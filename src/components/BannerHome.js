import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import VideoPlay from "./VideoPlay";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handlePlayVideo = (data) => {
    setPlayVideoId(data);
    setPlayVideo(true);
  };

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!playVideo) {
      const interval = setInterval(() => {
        if (currentImage < bannerData.length - 1) {
          handleNext();
        } else {
          setCurrentImage(0);
        }
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [bannerData, currentImage, playVideo]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h=[95vh]">
        {bannerData.map((data, index) => (
          <div
            key={data.id + "bannerHome" + index}
            className="relative min-w-full min-h-[450px] lg:min-h-full group transition-all"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            <div className="w-screen h-screen">
              <img
                src={imageURL + data.backdrop_path}
                alt="poster"
                className="h-full object-cover w-full"
              />
            </div>

            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

            <div className="absolute top-0 h-full w-full hidden lg:flex items-center justify-between px-4 text-3xl group-hover:flex">
              <button
                onClick={handlePrevious}
                className="rounded-full bg-white text-black hover:scale-110 p-2"
              >
                <FaAngleLeft />
              </button>

              <button
                onClick={handleNext}
                className="rounded-full bg-white text-black hover:scale-110 p-2"
              >
                <FaAngleRight />
              </button>
            </div>

            <div className="container mx-auto">
              <div className="absolute max-w-md px-4 bottom-14">
                <h2 className="text-white font-bold text-2xl lg:text-4xl">
                  {data.title || data.name}
                </h2>
                <p className="text-white text-ellipsis line-clamp-5 my-2 lg:text-xl">
                  {data.overview}
                </p>
                <div className="text-white items-center flex gap-4">
                  <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                  <span>|</span>
                  <p>View: {Number(data.popularity).toFixed(0)}</p>
                </div>
                <button
                  onClick={() => handlePlayVideo(data)}
                  className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 hover:shadow-md transition-all hover:scale-105"
                >
                  Play Now
                </button>
              </div>
            </div>

            {playVideo && (
              <VideoPlay
                data={playVideoId}
                close={() => setPlayVideo(false)}
                media_type="movie" // Assuming media_type is "movie", change if necessary
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
