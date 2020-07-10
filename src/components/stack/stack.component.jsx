import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const Stack = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

return (
  <>
    <section
      id="stack"
      className="bg-primary flex items-center justify-center flex-wrap text-primary"
    >
      <Waypoint onEnter={() => setActiveSection("contact")} />
      <div className="container flex flex-col m-auto pt-20 pb-0 px-4 lg:px-20">
        <h2 className="text-secondary mb-10 lg:mb-0 text-3xl ">
          <span className="border-b-2 border-quartary">Stack</span>
        </h2>
      </div>
      <div className="container flex flex-col m-auto pt-20 pb-10 px-4 lg:px-20">
        preferred stack
      </div>
    </section>
  </>
);
};

export default Stack;
