import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/main.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import { RecoilRoot } from "recoil";


ReactDOM.unstable_createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
