import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  console.log(data);
  return (
    <Link
      to={"/" + data.data.media_type + "/" + data.data.id}
      className="w-full min-w-[230px] max-w-[230px] rounded h-80 overflow-hidden relative z-10 "
    >
      <img src={imageURL + data?.data?.poster_path} alt="Poster " />
      <div className="absolute top-4 text-white">
        {trending && (
          <div className="py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden">
            # {index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 text-white backdrop-blur-3xl w-full bg-black/60 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.data?.title || data?.data?.name}
        </h2>
        <div className="text-neutral-400 text-sm flex items-center  justify-between ">
          <p>
            {moment(
              data?.data?.release_date || data?.data?.first_air_date
            ).format("MMM Do YY")}
          </p>
          <p className="text-xs bg-black px-1 rounded-md text-white">
            Rating : {Number(data?.data?.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
