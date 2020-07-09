import React from "react";
import { themeState } from "../../atoms/themeState";
import { activeSectionState } from "../../atoms/activeSectionState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Link, animateScroll as scroll } from "react-scroll";
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
    <nav className="flex items-center justify-end flex-wrap fixed w-full bg-primary bottom-0 lg:bottom-auto">
      <div
        className={`navbar flex w-full justify-between px-1 pr-4 py-0 lg:py-2 ${
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
                    className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-2 ml-2 mb-1 ${
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
        className={`menu-dropdown id="menu-dropdown" ${
          !navOpen ? `hidden` : ``
        } w-full block flex-grow flex-col flex w-auto h-screen`}
      >
        <div className="menu-dropdown-container bg-gray-700 order-2">
          <div className="text-sm lg:flex-grow">
            {wayPoints.map((link) =>
              link.id !== "" ? (
                <Link
                  to={link.url}
                  smooth={true}
                  key={link.id}
                  onClick={() => setActiveSection(link.id)}
                  className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-2 ml-2 mb-1 ${
                    activeSection === link.id ? "text-quartary" : "text-white"
                  }`}
                >
                  {link.title}
                </Link>
              ) : null
            )}
          </div>
          <div className="text-sm lg:flex-grow border-top">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-white mr-2 ml-2 mb-1">
              Link 1
            </button>
            <button className="block mt-4 lg:inline-block lg:mt-0 text-white mr-2 ml-2 mb-1">
              Link 2
            </button>
            <button className="block mt-4 lg:inline-block lg:mt-0 text-white mr-2 ml-2 mb-1">
              Link 3
            </button>
          </div>
        </div>
        {/* end mobile dropdown */}
        <div
          onClick={() => (navOpen ? setNavOpen(false) : null)}
          className="w-full flex-grow"
          id="dropdown-exit"
        ></div>
      </div>
    </nav>
  );
};

export default Header;
