import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";
import Card from '../card/card.component';

const Work = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);
  let num = [1, 2];
  return (
    <>
      <section
        id="work"
        className="min-h-screen flex items-center justify-center w-full bg-primary"
      >
        <Waypoint onEnter={() => setActiveSection("work")} />
        <div className="container flex flex-col px-10 lg:px-16 flex-wrap items-center justify-center ">
          <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows gap-4">
            {num.map((tile, index) => {
              return (
                  <Card key={index} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
