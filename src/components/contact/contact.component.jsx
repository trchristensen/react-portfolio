import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const Contact = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  return (
    <>
      <section
        id="contact"
        className="h-screen bg-white flex items-center justify-center"
      >
        <Waypoint onEnter={() => setActiveSection("contact")} />
        <h2>Contact</h2>
      </section>
    </>
  );
};

export default Contact;
