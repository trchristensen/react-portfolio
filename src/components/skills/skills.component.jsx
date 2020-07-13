import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const currentYear = new Date().getFullYear();
const stackList = [
  {
    title: "HTML, CSS, Javascript",
    description: "Web Development",
    experience: 2012,
  },
  {
    title: "React, VueJs",
    description: "Frontend Javascript frameworks",
    experience: 2018,
    icon: "",
  },
  {
    title: "Node.js, Express",
    description: "Backend Javascript frameworks",
    experience: 2018,
  },
  {
    title: "Wordpress",
    description: "PHP Content Management System",
    experience: 2014,
  },
  {
    title: "Laravel",
    description: "Full Stack PHP framework",
    experience: '~1 year',
  },
  {
    title: "Firebase, AWS Amplify",
    description: "Backend-as-a-Service (BaaS)",
    experience: "~1 year",
  },
  {
    title: "Facebook Ads",
    description: "Digital Marketing Campaigns",
    experience: "~1 year",
  },
  {
    title: "Apollo GraphQL",
    description: "GraphQL API platform",
    experience: "~1 year",
  },
  {
    title: "Stack Overflow",
    description: "Searching for solutions",
    experience: 2014,
  },
  {
    title: "Git",
    description: "Version Control",
    experience: 2014,
  },
];


const Skills = () => {
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
            <span className="border-b-2 border-quartary">Skills</span>
          </h2>
        </div>
        <div className="container flex flex-row m-auto pt-20 pb-10 px-4 lg:px-20">
          <div className="flex flex-row flex-wrap">
            {stackList.map((item) => {
              return (
                <div className="stack__item text-secondary">
                  <div className="stack__item-content border border-gray-700 rounded-lg m-2 py-2 px-4">
                    <div className="stack__item-icon"></div>
                    <div className="stack__item-info">
                      <h6 className="text-xs font-semibold leading-none">
                        {item.title}
                      </h6>
                      <span className="flex mt-1 leading-none text-xs">
                        {item.description}
                      </span>
                      <span className="text-xs mt-1 leading-none flex">
                        {Number.isInteger(item.experience)
                          ? currentYear - item.experience + "+ years"
                          : item.experience}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

