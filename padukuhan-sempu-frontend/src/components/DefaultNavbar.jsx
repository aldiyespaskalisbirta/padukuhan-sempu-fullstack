import React, { useContext, useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../contex/authContextProvider";
const navigation = [
  { name: "Home", to: "/" },
  { name: "Budaya", to: "/budaya" },
  { name: "Gallery Foto", to: "/gallery/images" },
  { name: "Kontak", to: "/kontak" },
];

const DefaultNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [hoveredLink, setHoveredLink] = useState(null);

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const handleLinkHover = (index) => {
    setHoveredLink(index);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className=" opacity-80 px-24 bg-[#577865] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <span className="logo text-white font-bold text-2xl">SEMPU</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-white rounded-lg md:hidden hover:bg-white hover:text-black focus:ring-2 focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.to}
                  className={`${
                    hoveredLink === index ? "text-white" : "text-gray-300"
                  } hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors duration-500`}
                  onMouseEnter={() => handleLinkHover(index)}
                  onMouseLeave={handleLinkLeave}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <div className="flex justify-center items-center">
              <a href="/login">
                {currentUser ? (
                  <p>Hallo {currentUser.username}</p>
                ) : (
                  <UserIcon className="h-5 w-5 text-white" />
                )}
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DefaultNavbar;
