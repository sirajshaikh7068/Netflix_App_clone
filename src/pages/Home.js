import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendinData = useSelector((state) => state.movieData.bannerData);

  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: Popular } = useFetch("/movie/popular");
  const { data: PopularShow } = useFetch("/tv/popular");
  const { data: OnTheAirShow } = useFetch("/tv/on_the_air");
  const { data: AiringTVShow } = useFetch("/tv/airing_today");
  const { data: TopTVShow } = useFetch("/tv/top_rated");
  const { data: TopRated } = useFetch("/movie/top_rated");
  const { data: UpComing } = useFetch("/movie/upcoming");

  return (
    <div className="overflow-hidden">
      <BannerHome />
      <HorizontalScrollCard
        data={trendinData}
        heading={"Trending Show"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={Popular}
        heading={"Popular"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={TopRated}
        heading={"TopRated"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={PopularShow}
        heading={"PopularShow"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={OnTheAirShow}
        heading={"OnTheAirShow"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={TopTVShow}
        heading={"TopTVShow"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={UpComing}
        heading={"UpComing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={AiringTVShow}
        heading={"AiringTVShow"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
