import React from "react";
import "./LoginSignup.css";
import { Mail, LockKeyhole, UserRound } from "lucide-react";
import { useState } from "react";

function LoginSignup() {
  const [action, setAction] = useState("Login");
  return (
    <div className="container flex flex-col items-center bg-white pb-8 m-auto w-2/3">
      <div className="header flex flex-col items-center gap-6 mt-10 w-full">
        <div className="text underline text-indigo-700 text-4xl font-bold">
          {action}
        </div>
      </div>
      <div className="inputs mt-20 flex flex-col gap-6 text-purple-600">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input flex flex-col items-center m-auto w-96 h-20 rounded-md">
            <img className="mt-0 mb-0 mr-10 ml-10" src={UserRound} alt="" />
            <input
              className="h-10 w-96 text-xl border-2 border-indigo-400 rounded-md pl-2"
              type="name"
              placeholder="Name"
            />
          </div>
        )}

        <div className="input flex flex-col items-center m-auto w-96 h-20 rounded-md">
          <img className="mt-0 mb-0 mr-10 ml-10" src={Mail} alt="" />
          <input
            className="h-10 w-96 text-xl border-2 border-indigo-400 rounded-md pl-2"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input flex flex-col items-center m-auto w-96 h-20 rounded-md">
          <img className="mt-0 mb-0 mr-10 ml-10" src={LockKeyhole} alt="" />
          <input
            className="h-10 w-96 text-xl border-2 border-indigo-400 rounded-md pl-2"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password text-indigo-500 text-xl mt-6 items-center">
          Forgot Password? <span className="cursor-pointer">Click Here</span>
        </div>
      )}

      <div className="submit-container flex gap-8 m-16 m-auto items-center">
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </button>
        <button
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;
