import React from 'react';
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const About = () => {
    const setActiveSection = useSetRecoilState(activeSectionState);

    return (
          <Waypoint
      onLeave={() => console.log("left about!")}
      onEnter={() => setActiveSection('about')}
      >
      <section
        id="about"
        className="h-screen bg-white flex items-center justify-center"
      >
        <h2>About</h2>
      </section>
      </Waypoint>
    );
}

export default About;