import React, { useState, useEffect } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Function to fetch and set the leaderboard data from localStorage
    const fetchLeaderboardData = () => {
      const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      setLeaderboardData(storedLeaderboard);
    };

    // Fetch the leaderboard data when the component mounts
    fetchLeaderboardData();

    // Set up an interval to periodically check for changes in leaderboard data
    const leaderboardRefreshInterval = setInterval(fetchLeaderboardData, 5000); // Refresh every 5 seconds (adjust the interval as needed)

    // Clean up the interval on unmount
    return () => {
      clearInterval(leaderboardRefreshInterval);
    };
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry, index) => (
          <li key={index}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
