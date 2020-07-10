import React from "react";
import { themeState } from "../../atoms/themeState";
import { activeSectionState } from "../../atoms/activeSectionState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-scroll";
import './header.styles.scss';

import { ReactComponent as SunIcon } from "../../assets/icons/SunIcon.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/MoonIcon.svg";
import { ReactComponent as HamburgerOpen } from "../../assets/icons/HamburgerOpen.svg";
import { ReactComponent as HamburgerClosed } from "../../assets/icons/HamburgerClosed.svg";

const Header = ({ data }) => {
  //   const { name } = data.main;

  const wayPoints = [
    {
      title: "Top",
      id: "top",
      url: "top",
    },
    {
      title: "About",
      id: "about",
      url: "about",
    },
    {
      title: "Stack",
      id: "stack",
      url: "stack",
    },
    {
      title: "Resume",
      id: "resume",
      url: "resume",
    },
    {
      title: "Work",
      id: "work",
      url: "work",
    },
    {
      title: "Contact",
      id: "contact",
      url: "contact",
    },
  ];

  const [navOpen, setNavOpen] = React.useState(false);
  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const activeSection = useRecoilValue(activeSectionState);
  const setActiveSection = useSetRecoilState(activeSectionState);


  return (
    <nav className="nav__primary flex items-center justify-end flex-wrap fixed w-full bg-primary bottom-0 lg:bottom-auto">
      <div
        className={`navbar order-2 flex w-full justify-between px-1 pr-4 py-0 lg:py-2${
          navOpen ? `` : `flex justify-between w-full flex-row`
        }`}
      >
        {/* {navOpen ? null : ( */}
        <div className="theme-toggle flex items-center justify-center w-6">
          <button
            onClick={() => toggleTheme()}
            className="inline-block text-sm leading-none text-secondary cursor-pointer"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
        {/* )} */}
        {navOpen ? null : (
          <div className="visible-links hidden lg:flex lg:items-center xl:flex">
            <div className="text-sm lg:flex-grow">
              {wayPoints.map((link) =>
                link.id !== "" ? (
                  <Link
                    to={link.url}
                    smooth={true}
                    key={link.id}
                    onClick={() => setActiveSection(link.id)}
                    className={`block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-1 cursor-pointer ${
                      activeSection === link.id
                        ? "text-quartary"
                        : "text-secondary"
                    }`}
                  >
                    {link.title}
                  </Link>
                ) : null
              )}
            </div>
          </div>
        )}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center pt-1 pb-2 py-2 text-quartary"
        >
          {navOpen ? <HamburgerOpen /> : <HamburgerClosed />}
        </button>
      </div>

      {/* // mobile dropdown */}
      <div
      id="menu-dropdown"
        className={`menu-dropdown order-1 ${
          !navOpen ? `hidden` : ``
        } w-full block flex-grow flex-col flex w-auto h-screen`}
      >
        <div className="menu-dropdown-container bg-gray-700 h-screen pt-8">
          <div className="lg:flex-grow">
            {wayPoints.map((link) =>
              link.id !== "" ? (
                <Link
                  to={link.url}
                  smooth={true}
                  key={link.id}
                  onClick={() => setActiveSection(link.id)}
                  className={`block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl ${
                    activeSection === link.id ? "text-quartary" : "text-white"
                  }`}
                >
                  {link.title}
                </Link>
              ) : null
            )}
          </div>
          <div className="lg:flex-grow border-top">
            <button className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl text-white">
              Link 1
            </button>
            <button className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl text-white">
              Link 2
            </button>
            <button className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl text-white">
              Link 3
            </button>
          </div>
        </div>
        {/* end mobile dropdown */}
        {/* <div
          onClick={() => (navOpen ? setNavOpen(false) : null)}
          className="w-full flex-grow lg:order-1"
          id="dropdown-exit"
        ></div> */}
      </div>
    </nav>
  );
};

export default Header;
