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
        className="min-h-screen bg-primary flex items-center justify-center flex-wrap"
      >
        <Waypoint onEnter={() => setActiveSection("resume")} />
        <div className="container px-10 lg:px-16">
          <div className="row education flex flex-wrap flex-row">
            <div className="w-full lg:w-1/4 columns header-col">
              <h1 className="text-secondary mb-10 lg:mb-0">
                <span>Education</span>
              </h1>
            </div>
            <div className="w-full lg:w-3/4 columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div>
                    <h3 className="text-secondary">
                      San Diego State University
                    </h3>
                    <p className="info primary-font mt-2 mb-4">
                      BA Public Administration <span>•</span>
                      <em className="date">2007-2011</em>
                    </p>
                    <p>Learned how to drink beer through a funnel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row work flex flex-wrap flex-row">
            <div className="w-full lg:w-1/4 columns header-col">
              <h1 className="text-secondary mb-10 lg:mb-0">
                <span>Work</span>
              </h1>
            </div>
            <div className="w-full lg:w-3/4 columns main-col">
              <div>
                <h3 className="text-secondary">DesignStudio</h3>
                <p className="info primary-font mt-2 mb-0">
                  Developer <span>•</span> Full-Time<span>•</span>{" "}
                  <em className="date">
                    April 2015 - October 2017
                  </em>
                </p>
                <p className="info primary-font mt-0 mb-0">
                  Developer <span>•</span> Full-Time, Remote<span>•</span>{" "}
                  <em className="date">October 2017 - April 2018</em>
                </p>
                <p className="info primary-font mt-0 mb-4">
                  Developer <span>•</span> Part-Time, Remote<span>•</span>{" "}
                  <em className="date">
                    April 2018 - April 2019
                  </em>
                </p>
                <p>
                  Started as production, doing simple tasks until I proved
                  myself to be a valuable asset on the developer team. As a
                  developer at DesignStudio I created and maintained large
                  corporate sites, hot tub dealers and several non-profit
                  company sites. Working on a small team, for a small company
                  gave me a lot of insight into running and growing a business.
                </p>
                <p>
                  We built a unique wordpress plugin that syncs product and
                  template data between hundreds of dealer sites, keeping them
                  up to date with the latest product information. While working
                  at DesignStudio we were responsible for the creation and
                  maintenance of hundreds of Hot Tub Dealer websites, a large
                  contractor for RedCross.org, and several other large
                  non-profits. I stayed with the company when it was down to
                  only a handful of employees and wore multiple hats as it grew
                  much larger over the years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
