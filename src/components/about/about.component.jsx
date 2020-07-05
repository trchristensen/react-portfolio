import React from 'react';
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

import { fontAwesomeIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import './about.styles.scss';

const About = () => {
    const setActiveSection = useSetRecoilState(activeSectionState);

    return (
      <>
        <section
          id="about"
          className="min-h-screen bg-primary flex items-center justify-center
          flex-wrap text-primary"
        >
          <div className="container flex m-auto px-10 lg:px-16">
            <Waypoint onEnter={() => setActiveSection("about")} />
            <div className="row flex flex-row flex-wrap w-full">
              <div className="w-full md:w-1/2 lg:w-1/3 text-secondary about-left flex flex-wrap justify-center content-center">
                <img
                  className="profile-pic"
                  src="https://avatars0.githubusercontent.com/u/6512813?s=460&amp;u=95c2a1f2bb132eeab6d7e4bb01871b61e4287ab6&amp;v=4"
                  alt="Todd Christensen Profile Pic"
                />
              </div>
              <div className="w-full lg:w-2/3 about-right flex flex-wrap content-center">
                <h2 className="text-secondary">About Me</h2>
                <p>
                  I am a practical, self-taught developer with 5+ years of
                  experience. I got into coding to translate my ideas into
                  reality. I have a passion for building useful things and
                  solving problems.
                </p>
                <div className="row flex flex-row flex-wrap w-full mt-12">
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-secondary">Contact Details</h2>
                    <p>Address</p>
                  </div>
                  <div className="w-full w-1/2">
                    <a href="#" className="button btn neu-convex">
                      <FontAwesomeIcon icon={faDownload} />
                      <span className="pl-2">Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default About;