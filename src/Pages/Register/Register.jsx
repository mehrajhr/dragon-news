import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser , setUser} = use(AuthContext);
    const handleRegister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;
        console.log(name , photo, password , email);
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="font-bold text-2xl text-center p-5">
          Register Your Account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input required name="name" type="text" className="input" placeholder="Name" />
            <label className="label">Your Photo URL</label>
            <input required name="photoUrl" type="text" className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input required name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input required name="password" type="password" className="input" placeholder="Password" />
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-sm text-center text-gray-400 font-semibold">
            Already Have An Account ?
            <Link to="/auth/login" className="btn btn-link text-secondary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
