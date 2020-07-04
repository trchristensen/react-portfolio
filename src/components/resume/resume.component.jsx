import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const Resume = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  return (
    <>
      <section
        id="resume"
        className="h-screen bg-white flex items-center justify-center"
      >
        <Waypoint onEnter={() => setActiveSection("resume")} />
        <h2>Resume</h2>
      </section>
    </>
  );
};

export default Resume;
