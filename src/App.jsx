import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import "./_variables.scss";
import "./styles.scss";

import AppContextProvider from "./components/AppContextProvider/AppContextProvider.js";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import TransitionScreen from "./components/TransitionScreen/TransitionScreen.jsx";

const App = () => {
  return (
    <AppContextProvider>
      <GameBoard />
      <TransitionScreen />
    </AppContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
