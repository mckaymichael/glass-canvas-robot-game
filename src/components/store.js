
  // store.js
  import { createStore } from "redux";
  import leaderboardReducer from "./LeaderboardReducer";
  
  const store = createStore(leaderboardReducer);
  
  export default store;
  