import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="w-11/12 mx-auto p-10">
      <header className="flex flex-col gap-7">
        <Header></Header>
        <section className="latest_news">
          <LatestNews></LatestNews>
        </section>
        <Navbar></Navbar>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayouts;
