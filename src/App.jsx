import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import "./_variables.scss";
import "./styles.scss";

import AppContextProvider from "./components/AppContextProvider/AppContextProvider.js";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import DifficultyModal from "./components/DifficultyModal/DifficultyModal.jsx";

const App = () => {
  return (
    <AppContextProvider>
      <GameBoard />
      <DifficultyModal />
    </AppContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
