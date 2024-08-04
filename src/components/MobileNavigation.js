import React from "react";
import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../extras/MobileNavigation";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden bg-neutral-400  bottom-0 fixed h-16 w-full text-black z-50">
      <div className="flex items-center justify-between h-full text-gray-500">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              className={({ isActive }) => `px-3 flex h-fullitemce
              flex-col justify-center ${isActive && "text-black"}`}
            >
              <div className=" text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
