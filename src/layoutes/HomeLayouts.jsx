import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

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
      <main className="my-4 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
            <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
