import React from 'react';
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";
import { useSetRecoilState } from "recoil";



const Hero = () => {

    const setActiveSection = useSetRecoilState(activeSectionState);
    return (
      <>
        <Waypoint
          onEnter={() => setActiveSection("top")}
        />
        <section
          id="hero"
          className="h-screen bg-primary flex items-center justify-center"
        >
          <div class="container">
            <div className="card">
              <h2 className="text-secondary text-center text-6xl">Hero</h2>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;