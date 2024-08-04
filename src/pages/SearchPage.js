import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  const query = location?.search?.slice(3);

  const fetchdata = async () => {
    try {
      const response = await axios.get("/search/multi", {
        params: {
          query: query,
          page: page,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (query) {
      setpage(1);
      fetchdata();
      setData([]);
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchdata();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-16">
      <div className="lg:hidden my-4 mx-2 sticky top-[70px] z-20">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => navigate(`/search?q= ${e.target.value}`)}
          value={query.split("%20").join(" ")}
          className="px-4 py-2 bg-white text-lg text-slate-900 rounded-full h-full w-full "
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-2">
          Search Result
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchdata, index) => {
            // console.log(exploreData);
            return (
              <Card
                data={{ data: searchdata }}
                key={searchdata.id + "searchdatasection"}
                media_type={searchdata.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
