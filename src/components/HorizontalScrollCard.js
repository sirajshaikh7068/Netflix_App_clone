import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerref = useRef();

  const handlePrev = () => {
    containerref.current.scrollLeft -= 300;
  };

  const handleNext = () => {
    containerref.current.scrollLeft += 300;
  };
  return (
    <div className=" container mx-auto px-3 my-10 ">
      <h2 className="text-lg lg:text-3xl font-bold mb-3 text-white">
        {heading}
      </h2>
      <div className=" relative">
        <div
          ref={containerref}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden scroll-smooth transition-all gap-6 overflow-x-scroll scrollbar-none "
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + "heading" + index}
                data={{ data }}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />
            );
          })}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center ">
          <button
            onClick={handlePrev}
            className="bg-black p-1 text-white rounded-full -ml-1 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-black p-1 text-white rounded-full  z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
