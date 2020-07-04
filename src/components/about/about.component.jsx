import React from 'react';
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const About = () => {
    const setActiveSection = useSetRecoilState(activeSectionState);

    return (
      <>
        <section id="about">
          <div className="h-screen bg-gray-500 flex justify-center items-center">
            <Waypoint onEnter={() => setActiveSection("about")} />
            <h2>About</h2>
          </div>
        </section>
      </>
    );
}

export default About;