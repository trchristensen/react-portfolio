import React from "react";
import { themeState } from "../../atoms/themeState";
import { activeSectionState } from "../../atoms/activeSectionState";
import { primaryNavState } from "../../atoms/primaryNavState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-scroll";
import "./header.styles.scss";
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

  const setNavOpen = useSetRecoilState(primaryNavState);
  const navOpen = useRecoilValue(primaryNavState);

  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const activeSection = useRecoilValue(activeSectionState);
  const setActiveSection = useSetRecoilState(activeSectionState);

  const node = React.useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    } else {
      setNavOpen(false)
    }
    return;
  };

  React.useEffect(() => {
    if (navOpen) {
      document.body.classList.add("nav__primary-open")
      document.addEventListener("mousedown", handleClickOutside);

    } else {
      document.body.classList.remove("nav__primary-open");
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [navOpen]);



  return (
    <>
      <nav className="nav__primary flex items-center justify-end flex-wrap fixed w-full bg-primary bottom-0 lg:bottom-auto">
        <div
          className={`navbar order-2 flex w-full justify-between px-6 py-1 pb-2 lg:py-2 flex justify-between w-full flex-row`}
        >
          <div className="theme-toggle flex items-center justify-center w-6">
            <button
              onClick={() => toggleTheme()}
              className="inline-block text-sm leading-none text-secondary cursor-pointer w-10 h-10"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

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

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="flex items-center pt-1 pb-2 py-2 text-quartary"
          >
            {navOpen ? <HamburgerOpen /> : <HamburgerClosed />}
          </button>
        </div>
      </nav>
      <div
        id="menu-dropdown"
        ref={node}
        className={`menu-dropdown order-1 w-full block flex-grow flex-col flex w-auto h-screen`}
      >
        <div className="menu-dropdown-container bg-dark h-screen pt-8 shadow">
          <div className="lg:flex-grow mx-4">
            {wayPoints.map((link) =>
              link.id !== "" ? (
                <Link
                  to={link.url}
                  smooth={true}
                  key={link.id}
                  onClick={() => {
                    setActiveSection(link.id);
                    setNavOpen(false);
                  }}
                  className={`block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-4 cursor-pointer text-2xl ${
                    activeSection === link.id ? "text-quartary" : "text-white"
                  }`}
                >
                  {link.title}
                </Link>
              ) : null
            )}
          </div>
          <div className="lg:flex-grow border-top mx-4 mt-2 border-t border-gray-700">
            <button
              onClick={() => setNavOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl text-white"
            >
              Link 1
            </button>
            <button
              onClick={() => setNavOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl text-white"
            >
              Link 2
            </button>
            <button
              onClick={() => setNavOpen(false)}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-2 ml-2 mb-2 cursor-pointer text-2xl text-white"
            >
              Link 3
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
