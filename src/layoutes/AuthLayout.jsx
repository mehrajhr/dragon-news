import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto py-6">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="py-5">
            <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
