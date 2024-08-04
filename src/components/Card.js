import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);

  const mediaType = data.data.media_type ?? media_type;

  if (!data || !data.data) {
    return null; // Or some fallback UI
  }

  return (
    <Link
      to={"/" + mediaType + "/" + data.data.id}
      className="w-full min-w-[230px] max-w-[230px] rounded h-80 overflow-hidden block hover:scale-110 transition-all relative z-10 "
    >
      {data?.data?.poster_path ? (
        <img src={imageURL + data?.data?.poster_path} alt="Poster " />
      ) : (
        <div className="bg-slate-900 flex justify-center items-center h-full w-full">
          No Image Found
        </div>
      )}

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
