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
        <div className="container py-20 px-4 lg:px-16">
          <div className="row education flex flex-wrap flex-row border-b-2 mb-4 pb-4 border-gray-700">
            <div className="w-full lg:w-1/4 columns header-col">
              <h1 className="text-secondary mb-10 lg:mb-0 text-3xl ">
                <span className="border-b-2 border-quartary">Education</span>
              </h1>
            </div>
            <div className="w-full lg:w-3/4 columns main-col">
              <div className="row item">
                <div className="w-full columns">
                  <div>
                    <h3 className="text-secondary text-2xl font-bold">
                      San Diego State University
                    </h3>
                    <p className="info primary-font mb-4 text-secondary">
                      BA Public Administration <span>•</span>
                      <em className="date text-secondary">2007-2011</em>
                    </p>
                    <p className="text-secondary">
                      Studied business for the public sector, with an emphasis
                      in city planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row work flex flex-wrap flex-row">
            <div className="w-full lg:w-1/4 columns header-col">
              <h1 className="text-secondary mb-10 lg:mb-0 text-3xl ">
                <span className="border-b-2 border-quartary">Work</span>
              </h1>
            </div>
            <div className="w-full lg:w-3/4 columns main-col">
              <div class="row flex flex-wrap flex-col w-full">
                <h3 className="text-secondary text-2xl font-bold">
                  ByToddChristensen
                </h3>
                <p className="info primary-font mb-4 text-secondary">
                  Consultant/ Developer
                  <span>•</span>
                  <em className="date">
                    Remote <span>•</span>October 2018 - Present
                  </em>
                </p>
                <p className="mb-2 text-secondary text-secondary">
                  <ul>
                    <li>
                      Contracted developer work for DesignStudio.com, while
                      traveling the world.
                    </li>
                    <li>
                      Took on several clients simultaneously, consulting and
                      developing websites for their businesses.
                    </li>
                    <li>
                      Ran a Shopify dropshipping business, creating digital
                      marketing campaigns for Facebook ads and Twitter.
                    </li>
                  </ul>
                </p>
                <p className="mb-2 text-secondary text-secondary">
                  During this time, I have also attained a deep knowledge of
                  javascript ES6, React and related libraries, GraphQL with
                  Apollo-- working on several <a href="#work">side projects</a>.
                </p>
              </div>
              <div class="row flex flex-wrap flex-col w-full mt-6">
                <h3 className="text-secondary text-2xl font-bold text-secondary">
                  DesignStudio
                </h3>
                <p className="info primary-font mb-0 text-secondary">
                  Developer <span>•</span> Full-Time<span>•</span>{" "}
                  <em className="date">
                    San Diego, CA<span>•</span> April 2015 - October 2017
                  </em>
                </p>
                <p className="info primary-font mt-0 mb-0 text-secondary">
                  Developer <span>•</span> Full-Time<span>•</span>{" "}
                  <em className="date">
                    Remote<span>•</span>October 2017 - April 2018
                  </em>
                </p>

                <p className="mb-2 mt-4 text-secondary">
                  <ul className="list-style-dot">
                    <li>
                      Created and maintained hundreds of sites-- including large
                      corporate sites, hot tub dealers and several non-profit
                      company sites.
                    </li>
                    <li>
                      Converted web designs in Photoshop, Sketch and Adobe XD to
                      wordpress templates and pages, while using SEO best
                      practices and semantic code.
                    </li>
                    <li>
                      Our primary stack included the LAMP stack with Wordpress,
                      jQuery, Gulp, and git version control.
                    </li>
                    <li>
                      Assisted in developmont of a custom wordpress plugin that
                      syncs product and template data between dealer sites,
                      keeping them up to date with the latest product
                      information.
                    </li>
                    <li>
                      Proposed using a pagebuilder for majority of client sites,
                      cutting finishing time and development costs as well as
                      making sites more user friendly for clients.
                    </li>
                  </ul>
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
