import React from 'react';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import About from './components/about/about.component';
import { themeState } from './atoms/themeState';
import { useRecoilValue } from 'recoil';

import useLocalStorage from './hooks/useLocalStorage';

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
    </div>
  );
}

export default App;
