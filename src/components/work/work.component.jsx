import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const Work = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  return (
    <>
      <section
        id="work"
        className="h-screen bg-gray-300 flex items-center justify-center"
      >
        <Waypoint onEnter={() => setActiveSection("work")} />
        <h2>Work</h2>
      </section>
    </>
  );
};

export default Work;
