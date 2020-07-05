import React, {Suspense} from 'react';
import './App.scss';
import { useRecoilValue, useSetRecoilState } from "recoil";
import useLocalStorage from "./hooks/useLocalStorage";

import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import About from './components/about/about.component';
import Resume from "./components/resume/resume.component";
import Work from "./components/work/work.component";
import Contact from "./components/contact/contact.component";
import SocialBar from "./components/socialBar/socialBar.component";

import { themeState } from './atoms/themeState';


const App = () => {
  const [persistedTheme, setPersistedTheme] = useLocalStorage(
    "themeState",
    "light"
  );
  const theme = useRecoilValue(themeState);
  React.useEffect(() => {
    setPersistedTheme(theme);
  }, [theme]);


  return (
    <div className={`theme-${theme}`}>
      <SocialBar />
      <Header />
      <Hero />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
