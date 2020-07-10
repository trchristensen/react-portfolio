import React from "react";
import "./App.scss";
import { useRecoilValue } from "recoil";
import useLocalStorage from "./hooks/useLocalStorage";
import ReactGA from "react-ga";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import Stack from "./components/stack/stack.component";
import Resume from "./components/resume/resume.component";
import Work from "./components/work/work.component";
import Contact from "./components/contact/contact.component";
import SocialBar from "./components/socialBar/socialBar.component";
import Footer from "./components/footer/footer.component";

import { themeState } from "./atoms/themeState";

const App = () => {
  ReactGA.initialize("UA-225799922");
  ReactGA.pageview(window.location.pathname);

  const [, setPersistedTheme] = useLocalStorage("themeState", "light");

  const theme = useRecoilValue(themeState);
  React.useEffect(() => {
    setPersistedTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className={`theme-${theme}`}>
      <SocialBar />
      <Header />
      <Hero />
      <About />
      <Stack />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
