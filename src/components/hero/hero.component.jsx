import React from "react";
import { Waypoint } from "react-waypoint";
import { useSetRecoilState } from "recoil";
import "./hero.styles.scss";

import { activeSectionState } from "../../atoms/activeSectionState";


const Hero = (props) => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  return (
    <>
      <Waypoint onEnter={() => setActiveSection("top")} />
      <section
        id="top"
        className="h-screen bg-primary flex items-center justify-center flex-wrap flex-col hero"
      >
        <div className="container flex flex-wrap flex-col text-center px-10">
          <h2 className="text-secondary mb-0 text-3xl lg:text-6xl">
            Todd
            Christensen
          </h2>
          <h3 className="text-quartary text-lg lg:text-3xl">
            React Developer
          </h3>
          <span className="primary-font mt-3 inline-block description">
            I'm a remote based javascript developer from
            California, residing in The Philippines <span role="img" aria-label="Philippines Flag">🇵🇭</span>. I am currently looking
            for a position!
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
