import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useContext, useState } from "react";
import { AuthContex } from "../context/AuthContex";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUpProvider, forgotPassword } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[500px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-center font-[500] text-2xl mb-3 tracking-[0.1em]">
            Sign In
          </h2>
          <div className="relative mb-6" data-te-input-wrapper-init="">
            <input
              type="email"
              className="peer"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email address</label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init="">
            <input
              type="password"
              className="peer"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <div className="flex justify-between ">
            <span
              onClick={() => forgotPassword(email)}
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
            >
              Forgot Password
            </span>
            <Link
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
              to="/register"
            >
              Sign Up
            </Link>
          </div>

          <div className="text-center lg:text-left">
            <button type="submit" className="btn-danger">
              Login
            </button>
            <button
              className="flex justify-between text-center btn-danger"
              type="button"
              onClick={() => {
                signUpProvider();
              }}
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
            <p className="mb-0 mt-2 pt-1 text-md text-white font-semibold">
              Don't have an account?
              <Link
                to="/register"
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
