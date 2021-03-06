import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import { DataProvider } from "./context/dataContext";
import { DetailsProvider } from "./context/detailsContext.js";
import {LoginProvider} from "./context/loginContext";
ReactDOM.render(
  <React.StrictMode>
      <LoginProvider>
          <DataProvider>
              <DetailsProvider>
                  <App />
              </DetailsProvider>
          </DataProvider>
      </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
