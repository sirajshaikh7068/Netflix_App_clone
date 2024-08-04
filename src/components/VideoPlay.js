import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetail from "../hooks/useFetchDetail";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetail(
    `/${media_type}/${data?.id}/videos`
  );

  const videoKey = videoData?.results?.[0]?.key;

  return (
    <section className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button
          onClick={close}
          className="absolute -right-1 -top-6 text-3xl z-50"
        >
          <IoClose />
        </button>

        {videoKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white">
            No video available
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlay;
