import React from "react";
import { themeState } from '../../atoms/themeState';
import { useSetRecoilState, useRecoilValue } from "recoil";


const Header = ({ data }) => {
//   const { name } = data.main;

  const [navOpen, setNavOpen] = React.useState(false);
  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
      <div className="block lg:hidden">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-blue-500 bg-primary hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* // mobile dropdown */}
      <div
        className={`${
          !navOpen ? `hidden` : ``
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            onClick={() => toggleTheme()}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-secondary border-secondary hover:border-transparent hover:text-tertiary hover:bg-secondary mt-4 lg:mt-0"
          >
            {theme === 'light' ? 'Dark' : 'Light' }
          </a>
        </div>
      </div>
      {/* end mobile dropdown */}
    </nav>
  );
};

export default Header;
