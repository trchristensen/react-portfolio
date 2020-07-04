import React from 'react';
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";
import { useSetRecoilState } from "recoil";



const Hero = () => {

    const setActiveSection = useSetRecoilState(activeSectionState);
    return (
      <>
        <Waypoint onEnter={() => setActiveSection("top")} />
        <section
          id="top"
          className="h-screen bg-primary flex items-center justify-center flex-wrap flex-col">
          <div class="container w-full">
            <div className="card">
              <h2 className="text-secondary text-center text-6xl">Hero</h2>
            </div>
          </div>
          <p className="scrolldown w-full">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </section>
      </>
    );
}

export default Hero;