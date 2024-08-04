import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    label: "TV Show",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoMdHome />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
