import React from 'react';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import About from './components/about/about.component';
import Resume from "./components/resume/resume.component";
import Work from "./components/work/work.component";
import Contact from "./components/contact/contact.component";
import { themeState } from './atoms/themeState';
import { useRecoilValue } from 'recoil';

import useLocalStorage from './hooks/useLocalStorage';
import { Waypoint } from 'react-waypoint';

const json = {
  "main": {
    "name": "Todd Christensen"
  }
}


const App = () => {
  const [data] = React.useState(json);

  const [persistedTheme, setPersistedTheme] = useLocalStorage("themeState", 'light');
  const theme = useRecoilValue(themeState);

  React.useEffect(() => {
    setPersistedTheme(theme);
  }, [theme]);

  return (
    <div className={`theme-${theme}`}>
      <Header data={data} />
      <Hero />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
