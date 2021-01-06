import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import AppContextProvider from "./components/appContextProvider/AppContextProvider.js";

const App = () => {
  return <AppContextProvider>Running...</AppContextProvider>;
};

ReactDOM.render(<App />, document.getElementById("root"));
