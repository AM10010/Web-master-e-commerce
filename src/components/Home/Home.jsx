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
      <div className="home-hero  d-flex align-items-center justify-content-around">
        <div className="mt-4">
          <Sidebar />
        </div>
        <div>
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
      <Service />
    </div>
  );
};

export default HomePage;
