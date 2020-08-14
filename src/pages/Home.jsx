import React from "react";

import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import MyStack from "../components/myStack/myStack";
import Resume from "../components/resume/resume";
import Work from "../components/work/work";
import Contact from "../components/contact/contact";
import SocialBar from "../components/socialBar/socialBar";
import Footer from "../components/footer/footer";
import Section from "../components/section/section";

const Home = () => {
  return (
    <>
      <div className="sidebar__social hidden items-center pt-0 ml-4 lg:flex">
        <SocialBar />
      </div>
      <Header />
      <div className="meat">
        <Hero />
        <Section
          title="Work"
          id="work"
          className="bg-primary text-secondary"
          border={true}
          waypoint={true}
        >
          <Work />
        </Section>
        <Section
          title="About"
          id="about"
          className="bg-primary text-secondary"
          border={true}
          waypoint={true}
        >
          <About />
        </Section>
        <Section
          title="Skills"
          id="skills"
          className="bg-primary text-secondary"
          border={false}
          waypoint={true}
        >
          <Skills />
        </Section>
        <Section
          title="Stack"
          id="stack"
          className="bg-primary text-secondary"
          border={true}
          waypoint={true}
        >
          <MyStack />
        </Section>
        <Section
          id="resume"
          className="bg-primary text-secondary"
          border={true}
          waypoint={true}
        >
          <Resume />
        </Section>

        <Section
          title="Contact"
          id="contact"
          className="bg-primary text-secondary pb-20"
          border={false}
          waypoint={true}
        >
          <Contact />
        </Section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
