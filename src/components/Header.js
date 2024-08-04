import React, { useEffect, useState } from "react";
import { LOGO, USER_ICON } from "../utils/Constant";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../extras/MobileNavigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");

  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  const submitClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q= ${searchInput}`);
    }
  }, [searchInput]);

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600  opacity-50 z-40 flex items-center">
      <div className="container mx-auto font-bold flex items-center h-full px-3">
        <Link to="/">
          <img src={LOGO} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex   gap-2 pl-4 ">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-200 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="items-center ml-auto flex justify-between gap-4">
          <form className="gap-2 flex text-black">
            <input
              type="text"
              placeholder="Search here..."
              className="hidden bg-transparent outline-none border-none text-black px-4 py-1 text-xl lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button
              className="text-black text-3xl font-bold"
              onClick={submitClick}
            >
              <IoSearchOutline />
            </button>
          </form>
          <img
            className="w-12 h-12 rounded-lg cursor-pointer m-2 "
            src={USER_ICON}
            alt="usericon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
