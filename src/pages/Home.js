import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

const Home = () => {
  const trendinData = useSelector((state) => state.movieData.bannerData);
  return (
    <div className="overflow-hidden">
      <BannerHome />
      <HorizontalScrollCard data={trendinData} heading={"Trending Show"} />
    </div>
  );
};

export default Home;
