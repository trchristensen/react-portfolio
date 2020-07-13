import React from "react";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { useRecoilValue } from "recoil";
import useLocalStorage from "./hooks/useLocalStorage";
// import ReactGA from "react-ga";

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import MyStack from "./components/myStack/myStack";
import Resume from "./components/resume/resume";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import SocialBar from "./components/socialBar/socialBar";
import Footer from "./components/footer/footer";

import Section from "./components/section/section";

import { themeState } from "./atoms/themeState";


const App = () => {
  // ReactGA.initialize("UA-225799922");
  // ReactGA.pageview(window.location.pathname);

  const [, setPersistedTheme] = useLocalStorage("themeState", "light");
  const theme = useRecoilValue(themeState);
  React.useEffect(() => {
    setPersistedTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);



  return (
    <div className={`theme-${theme} bg-primary`}>
      <div className="sidebar__social items-start lg:flex lg:items-center ml-4 pt-4 lg:pt-0">
        <SocialBar />
      </div>
      <Header />
      <div className="meat">
        <Hero />
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
          title="Work"
          id="work"
          className="bg-primary text-secondary"
          border={true}
          waypoint={true}
        >
          <Work />
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
    </div>
  );
};

export default App;
