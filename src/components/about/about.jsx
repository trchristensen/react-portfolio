import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./about.styles.scss";

const About = () => {
  return (
    <>
      <div className="row flex flex-row flex-wrap w-full mt-8">
        <div className="w-full md:w-1/2 lg:w-1/3 text-secondary about-left flex flex-wrap justify-center content-center p-4">
          <div class="w-64 h-64 relative mb-4">
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <span class="hidden group-hover:table-cell text-white font-bold align-middle">
                KR
              </span>
              <img
                src="/assets/me-and-fam.jpg"
                alt="im the dad on the right"
                class="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 about-right flex flex-wrap content-center">
          <p className="text-secondary mb-4">
            I am a practical, self-taught developer from the Bay Area, CA with
            more than 5 years of professional experience. I got into coding to
            translate my ideas into reality. I have an entreprenuerial spirit
            with a passion for building useful applications and solving
            problems.
          </p>
          <p className="text-secondary mb-4">
            Experience with LAMP, MERN, and JAM stacks. Professional experience
            at a web design &amp; marketing agency collaborating on a small
            team, taking on several responsibilities, including development,
            social media marketing, and project manager for a brief period. As a
            software engineer, I have experience with several programming
            languages and frameworks including Javascript ES6 / TypeScript with Node, Vue,
            and React / Next.js, Wordpress and Laravel
            with PHP, and Python.
          </p>
          <p className="text-secondary mb-4">
            During the last several years I have traveled South East Asia while running a freelance/ consulting business and
            working on my own personal projects. I am currently residing in the
            Philippines.
          </p>
          <div className="row flex flex-row flex-wrap w-full mt-12">
            <div className="w-full">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1O9dOB56jeDlxIn7lXGC0SIW36Zu8q0B0/view?usp=sharing"
                className="button btn text-secondary border-gray-700 border rounded-lg px-4 py-2 bg-primary hover:bg-quartary hover:text-primary"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span className="pl-2">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
