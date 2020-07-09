import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./about.styles.scss";

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
              <h2 className="text-secondary text-3xl mb-4">About Me</h2>
              <p className="text-secondary mb-4">
                I am a practical, self-taught developer from the Bay Area, CA
                with more than 5 years of professional experience. I got into coding to
                translate my ideas into reality (also, to customize my MySpace profile). I have an entreprenuerial
                spirit with a passion for building useful applications and
                solving problems.
              </p>
              <p className="text-secondary mb-4">
                Experience with LAMP, MERN, and JAM stacks. Professional
                experience at a Design Agency collaborating on a small team,
                taking on several responsibilities, including social media
                marketing, and project manager for a brief period. As a software
                engineer, I have experience with several programming languages
                and frameworks including Ruby Rails, Wordpress and Laravel with
                PHP, Python, and Javascript ES6 with Node, Vue, and React.
              </p>
              <p className="text-secondary mb-4">
                During the last several years I have traveled much of South East
                Asia, Hong Kong, and Japan while running a consulting business
                and working on my own personal projects. I am currently residing
                in the Philippines.
              </p>
              <div className="row flex flex-row flex-wrap w-full mt-12">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-secondary">Contact Details</h2>
                  <p>Address</p>
                  <p className="text-secondary primary-font mb-4">Testing contact email <a href="mailto:hello@toddchristensen.net">hello@toddchristensen.net</a></p>
                </div>
                <div className="w-full w-1/2">
                  <button
                    href="#"
                    className="button btn neu-convex text-secondary"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    <span className="pl-2">Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
