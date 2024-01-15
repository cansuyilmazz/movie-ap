import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { AuthContex } from "../context/AuthContex";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const Main = () => {
  const { movies, loading, getMovies } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContex);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentUser && searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search movie");
      navigate("/login");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center p-2">
        <input
          type="search"
          className="w-80 h-8 p-1 m-2 rounded-md"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered">Search</button>
      </form>
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
