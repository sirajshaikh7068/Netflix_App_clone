import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useDebugValue, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieSlice";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const respose = await axios.get("/trending/all/week");

      dispatch(setBannerData(respose.data.results));
    } catch (error) {
      // console.log("error", error);
    }
  };

  const fetchCOnfigurationData = async () => {
    try {
      const respose = await axios.get("/configuration");

      dispatch(setImageURL(respose.data.images.secure_base_url + "original"));
    } catch (error) {}
  };

  useEffect(() => {
    fetchTrendingData();
    fetchCOnfigurationData();
  }, []);

  return (
    <main className="pb-16 lg:pb-0">
      <Header />
      <div className="min-h-[92vh]">
        <Outlet />
      </div>

      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
