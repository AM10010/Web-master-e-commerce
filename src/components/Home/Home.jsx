import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Home/Sidebar/Sidebar";
import Hero from "./Hero/Hero";
import "./Home.css";
import FlashSale from "./Flashsale/FlashSale";
import Catogery from "./Category/Category";
import Service from "../servics/Servics";
import Bestselling from "./BestSelling/BestSelling";
import Adbanner from "./Adbanner/Adbanner";
import Explore from "./Explore/Explore";
import NewArrival from "./Newarrival/NewArrival";

const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="home-hero row align-items-start justify-content-between">
        {/* Sidebar on left */}
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <Sidebar />
        </div>

        {/* Hero banner on right */}
        <div className="col-12 col-lg-9">
          <Hero />
        </div>
      </div>

      <hr />

      {/* Flash Sales Section */}
      <FlashSale products={[]} />
      <hr className="mt-5" />

      {/* Browse by Category */}
      <Catogery />
      <hr className="mt-5" />

      {/* Best Selling Products */}
      <Bestselling products={[]} />

      {/* Ad Banner */}
      <Adbanner />

      {/* Explore Our Products */}
      <Explore />

      {/* New Arrivals */}
      <NewArrival />

      {/* Services */}
      <Service />
    </div>
  );
};

export default HomePage;
