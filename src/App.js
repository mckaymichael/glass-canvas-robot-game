import React, { useState, useEffect } from "react";
import "./App.css";

import Grid from "./components/Grid";
import Star from "./components/Star";

function App() {
  const [gridSize, setGridSize] = useState(25);
  const [star, setStar] = useState(false);
  const [startButton, setStartButton] = useState("Start")
  const [randomCellIndex, setRandomCellIndex] = useState(Math.floor(Math.random() * gridSize));
  const [prevRandomCellIndex, setPreviousRandomCellIndex] = useState(null);

  const generateRandomCellIndex = () => {
    let newIndex;
    do { newIndex = Math.floor(Math.random() * gridSize) }
    while (newIndex === prevRandomCellIndex) {
      setPreviousRandomCellIndex(randomCellIndex);
      setRandomCellIndex(newIndex);
    }
  }
  
  const handleGameStateButton = () => {
    if (startButton === "Stop") {
        setStar(false);
        setStartButton("Start")
      } else if (startButton === "Start") {
        setStar(true);
        setStartButton("Stop");
        generateRandomCellIndex();
        console.log(randomCellIndex);
    }
  };
  
  return (
    <>
      <Grid gridSize={gridSize}/>
      <select value={gridSize} onChange={e => {setGridSize(e.target.value)}}>
        <option value="25">
          5x5
        </option>
        <option value="49">
          7x7
        </option>
        <option value="81">
          9x9
        </option>
      </select>
      <button onClick={handleGameStateButton}>{startButton}</button>
      {star && <Star/>}
    </>
  );
}

export default App;
