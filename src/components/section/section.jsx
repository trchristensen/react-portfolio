import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const Section = (props) => {
    const {children, className, id, title, border, waypoint} = props;
    const setActiveSection = useSetRecoilState(activeSectionState);
    
  return (
    <section
      id={id}
      className={`flex flex-wrap flex-row w-full items-center justify-center  ${className}`}
    >
      {waypoint !== false && id ? (
        <Waypoint onEnter={() => setActiveSection(id)} />
      ) : null}

      <div
        className={`container flex flex-wrap flex-row mx-4  ${
          border ? `py-20` : `pt-20`
        } ${border ? `border-b-2 border-gray-700lg:mx-20` : ``}`}
      >
        {props.title ? (
          <div className="row section__title flex flex-row w-full">
            <h2 className="mb-10 text-3xl">
              <span className="border-b-2 border-quartary">{title}</span>
            </h2>
          </div>
        ) : null}

        <div className="row section__content flex flex-row flex-wrap w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;