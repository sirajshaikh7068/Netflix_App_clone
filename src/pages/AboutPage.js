import React from "react";
import { FaFilm, FaStar, FaUsers } from "react-icons/fa";
import { HERO } from "../utils/Constant";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        <div className="mb-12 text-center">
          <p className="text-xl mb-4">
            Welcome to our Movies Information Website! We are passionate about
            movies and dedicated to providing you with the best movie-related
            information.
          </p>
          <p className="text-lg">
            Our mission is to be your ultimate destination for discovering movie
            details, reviews, and recommendations. With our user-friendly
            interface and comprehensive data from TMDB, we ensure a seamless
            experience for movie enthusiasts like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaFilm className="text-4xl mb-4 mx-auto text-blue-500" />
            <h2 className="text-2xl font-semibold mb-2">Extensive Database</h2>
            <p>
              Access a vast collection of movies, including the latest releases,
              classic films, and upcoming blockbusters.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaStar className="text-4xl mb-4 mx-auto text-yellow-500" />
            <h2 className="text-2xl font-semibold mb-2">Detailed Ratings</h2>
            <p>
              Get detailed ratings and reviews to make informed decisions on
              what to watch next.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaUsers className="text-4xl mb-4 mx-auto text-green-500" />
            <h2 className="text-2xl font-semibold mb-2">Community Feedback</h2>
            <p>
              See what other movie lovers are saying and join the conversation
              about your favorite films.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg mb-8">
            Our team is made up of movie enthusiasts who are dedicated to
            bringing you the best movie content. Meet our passionate team
            members who make it all happen.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Add team member cards here */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
              <img
                src={HERO}
                alt="Team Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Siraj Shaikh</h3>
              <p className="text-gray-400">Developer</p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
