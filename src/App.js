import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContex";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    <div className="dark:bg-gray-dark-main">
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
