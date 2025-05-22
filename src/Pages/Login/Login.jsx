import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {logIn} = use(AuthContext);
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);
        logIn(email , password )
        .then((result) =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => alert(error))
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="font-bold text-2xl text-center p-5">Login Your Account</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-sm text-center text-gray-400 font-semibold">Dont’t Have An Account ?<Link to="/auth/register" className="btn btn-link text-secondary">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
