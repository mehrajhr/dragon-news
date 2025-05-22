import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="font-bold text-2xl text-center p-5">
          Register Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Your Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-sm text-center text-gray-400 font-semibold">
            Already Have An Account ?
            <Link to="/auth/login" className="btn btn-link text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
