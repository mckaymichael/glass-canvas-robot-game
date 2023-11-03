import React, { useState, useEffect } from "react";
import "./App.css";
import GridCells from "./components/GridCells";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [robotDirection, setRobotDirection] = useState("up");
  const [robotIndex, setRobotIndex] = useState(12);
  const [starPosition, setStarPosition] = useState(generateRandomPosition());

  const [starCounter, setStarCounter] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const neighbors = [1, 6, 7, 11, 12, 13, 17, 18, 23]; // Define your neighbors based on your grid size.

  useEffect(() => {
    if (robotIndex === starPosition) {
      const newStarPosition = generateRandomPosition();
      setStarPosition(newStarPosition);
      setStarCounter((prevCounter) => prevCounter + 1);
    }
  }, [robotIndex, starPosition]);

  const handleMoveForward = () => {
    if (gameStarted && !gameOver) {
      let newIndex;

      switch (robotDirection) {
        case "up":
          newIndex = robotIndex - 5; // Adjust for a 5x5 grid
          break;
        case "down":
          newIndex = robotIndex + 5; // Adjust for a 5x5 grid
          break;
        case "left":
          newIndex = robotIndex - 1;
          break;
        case "right":
          newIndex = robotIndex + 1;
          break;
        default:
          newIndex = robotIndex;
      }

      if (neighbors.includes(newIndex)) {
        setRobotIndex(newIndex);
      } else {
        stopGame();
      }
    }
  };

  const handleRotateLeft = () => {
    // Implement your rotation logic here
  };

  const handleRotateRight = () => {
    // Implement your rotation logic here
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);

    const newStarPosition = generateRandomPosition();
    setStarPosition(newStarPosition);

    const gameDuration = 60 * 1000; // 60 seconds in milliseconds
    setTimeout(() => {
      stopGame();
    }, gameDuration);
  };

  const stopGame = () => {
    setGameStarted(false);
    setGameOver(true);
    handleGameEnd();
  };

  useEffect(() => {
    let timer;

    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameStarted, gameOver]);

  const handleGameEnd = () => {
    const playerScore = starCounter;
    const playerName = prompt("Enter your name:");

    if (playerName && playerScore > 0) {
      const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      const newEntry = { name: playerName, score: playerScore };
      const updatedLeaderboard = [...storedLeaderboard, newEntry];
      setLeaderboardData(updatedLeaderboard);
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
    }
  };

  return (
    <>
      <GridCells
        robotDirection={robotDirection}
        robotIndex={robotIndex}
        neighbors={neighbors}
        starPosition={starPosition}
      />
      <div>Star Counter: {starCounter}</div>
      <button onClick={handleRotateLeft}>Rotate Left</button>
      <button onClick={handleMoveForward}>Forward</button>
      <button onClick={handleRotateRight}>Rotate Right</button>
      <button onClick={startGame} disabled={gameStarted || gameOver}>
        Start Game
      </button>
      <div>
        Game Status:{" "}
        {gameStarted ? (gameOver ? "Game Over" : "Running") : "Not Started"}
      </div>
      <div>Elapsed Time: {Math.floor(elapsedTime / 1000)} seconds</div>
      <Leaderboard leaderboardData={leaderboardData} />
    </>
  );
}

function generateRandomPosition() {
  return Math.floor(Math.random() * 25); // For a 5x5 grid
}

export default App;
