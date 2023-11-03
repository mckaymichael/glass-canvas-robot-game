
  // leaderboardReducer.js
  const initialState = {
    leaderboardData: [],
  };
  
  const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LEADERBOARD":
        return {
          ...state,
          leaderboardData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default leaderboardReducer;
