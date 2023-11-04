import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [gridSize, setGridSize] = useState(25);
  return (
    <select 
      value={gridSize} 
      onChange={e => setGridSize(e.target.value)}
>
      <option value="25" onChange={setGridSize}>5x5</option>
      <option value="36" onChange={setGridSize}>6x6</option>
      <option value="49" onChange={setGridSize}>7x7</option>
    </select>
  );
}
export default App;
