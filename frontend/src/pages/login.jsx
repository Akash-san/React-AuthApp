import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";


const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
  const amazon = () => {
    window.open("http://localhost:5000/auth/amazon", "_self");
  };


  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-xl p-10 text-gray-700 rounded-lg">
          <h2 className="text-3xl font-medium">Join To Use GPT3</h2>
          <div className="py-4">
            <h3 className="py-4">Sign in with one of the providers</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={google}
                className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
              >
                <FcGoogle className="text-2xl" />
                Sign in with Google
              </button>
              <button
                className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
                onClick={github}
              >
                <AiFillGithub className="text-2xl text-blue-300" />
                Sign in with GitHub
              </button>
              <button
                className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
                onClick={amazon}
              >
                <AiFillAmazonCircle className="text-2xl text-blue-300" />
                Sign in with Amazon
              </button>
              <button
                className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
                onClick={facebook}
              >
                <AiFillFacebook className="text-2xl text-blue-300" />
                Sign in with facebook
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;