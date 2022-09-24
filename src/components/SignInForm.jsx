import PocketBase from "/node_modules/pocketbase/dist/pocketbase.es.mjs";
import { useRef } from "react";

const client = new PocketBase("http://127.0.0.1:8090");

const SignInForm = ({ onRegisterClick }) => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleAuth = async () => {
    const authData = await client.users.authViaEmail(
      emailInput.current.value,
      passwordInput.current.value
    );
    console.log(authData);
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailInput}
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword2"
            placeholder="Password"
            ref={passwordInput}
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <a
            href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Forgot password?
          </a>
        </div>
        <button
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          onClick={handleAuth}
          type="button"
        >
          Sign in
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Not a member?{" "}
          <button
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            onClick={onRegisterClick}
            type="button"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
