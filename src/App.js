import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

import GridCells from "./components/GridCells";
import VisibleCells from "./components/VisibleCells";

function App() {
  return (
    <>
      <GridCells />
      <FontAwesomeIcon icon={faRobot} />
    </>
  );
}

export default App;
