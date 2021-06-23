import React from "react";
import { useRecoilValue } from "recoil";
import { themeState } from '../../atoms/themeState';

const Footer = () => {

  const theme = useRecoilValue(themeState);

return (
  <>
    <section
      id="footer"
      className={`${
        theme === "dark" ? `bg-dark text-secondary` : `bg-secondary text-primary`
      } flex items-center justify-center flex-col`}
    >
      <div className="container px-4 p-4 flex flex-row flex-wrap justify-center items-center mb-16 lg:mb-0">
        This site is hosted on Internet Computer (Decentralized Web) via <a rel="noopener noreferrer" target="_blank" href="https://fleek.io">Fleek.io</a>
      </div>
    </section>
  </>
);
};

export default Footer;
