import React, { useEffect } from "react";
import { themeState } from "../../atoms/themeState";
import { activeSectionState } from "../../atoms/activeSectionState";
import { useSetRecoilState, useRecoilValue } from "recoil";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-sun"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-moon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const Header = ({ data }) => {
  //   const { name } = data.main;

  const navLinks = [
    {
      title: "Top",
      id: "top",
      url: "#top",
    },
    {
      title: "About",
      id: "about",
      url: "#about",
    },
    {
      title: "Resume",
      id: "resume",
      url: "#resume",
    },
    {
      title: "Work",
      id: "work",
      url: "#work",
    },
    {
      title: "Contact",
      id: "contact",
      url: "#contact",
    },
  ];

  const [navOpen, setNavOpen] = React.useState(false);
  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const activeSection = useRecoilValue(activeSectionState);

  return (
    <nav className="flex items-center justify-end flex-wrap bg-gray-900 px-6 py-0 fixed w-full">
      <div className={`${navOpen ? `` : `navbar flex justify-between w-full flex-row`}`}>
        {navOpen ? null : (
          <div className="theme-toggle flex items-center justify-center w-6">
            <a
              onClick={() => toggleTheme()}
              className="inline-block text-sm leading-none text-white cursor-pointer"
            >
              {theme === "light" ? MoonIcon() : SunIcon()}
            </a>
          </div>
        )}
        {navOpen ? null : (
          <div className="visible-links xs:hidden sm:hidden md:hidden lg:flex lg:items-center xl:flex">
            <div className="text-sm lg:flex-grow">
              {navLinks.map((link) =>
                link.id !== "" ? (
                  <a
                    href={link.url}
                    className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-2 ml-2 mb-1 ${
                      activeSection === link.id ? "text-tertiary" : "text-white"
                    }`}
                  >
                    {link.title}
                  </a>
                ) : null
              )}
            </div>
          </div>
        )}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center pt-1 pb-2 py-2 text-tertiary"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {navOpen ? (
              <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className=""></div>
      {/* // mobile dropdown */}
      <div
        className={`${
          !navOpen ? `hidden` : ``
        } w-full block flex-grow flex items-center w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {navLinks.map((link) =>
            link.id !== "" ? (
              <a
                href={link.url}
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-2 ml-2 mb-1 ${
                  activeSection === link.id ? "text-tertiary" : "text-white"
                }`}
              >
                {link.title}
              </a>
            ) : null
          )}
        </div>
      </div>
      {/* end mobile dropdown */}
    </nav>
  );
};

export default Header;
