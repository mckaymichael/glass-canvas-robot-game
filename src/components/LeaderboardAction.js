// leaderboardActions.js
export const updateLeaderboard = (newData) => {
    return {
      type: "UPDATE_LEADERBOARD",
      payload: newData,
    };
  };
  