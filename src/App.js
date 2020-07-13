import React from "react";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { useRecoilValue } from "recoil";
import useLocalStorage from "./hooks/useLocalStorage";
// import ReactGA from "react-ga";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import MyStack from "./components/myStack/myStack.component";
import Resume from "./components/resume/resume.component";
import Work from "./components/work/work.component";
import Contact from "./components/contact/contact.component";
import SocialBar from "./components/socialBar/socialBar.component";
import Footer from "./components/footer/footer.component";

import Section from "./components/section/section.component";

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
      <SocialBar />
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
          className="bg-primary text-secondary"
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
