import React from "react";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue } from "recoil";
import useLocalStorage from "./hooks/useLocalStorage";
import { withRouter } from "react-router";
// import ReactGA from "react-ga";

import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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
      <Router>
        <Switch>
          <Route path="/qr">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;