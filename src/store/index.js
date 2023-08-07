import { createStore, combineReducers } from "redux";
import workoutListReducer from "./reducers/workoutListReducer";
import activityReducer from "./reducers/activityReducer";
// import workouts from "../api/demoWorkouts.json";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://iekzfniuwsvsrfewgohg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlla3pmbml1d3N2c3JmZXdnb2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MjQzMTIsImV4cCI6MjAwNzAwMDMxMn0.0izcEnH86wcnLme6jjF_PMNFqcBm0jc9xgPer0zqRPE");

//Combine our reducers and change property names
const allReducers = combineReducers({
  workouts: workoutListReducer,
  activities: activityReducer,
});

// //Create initial State.
// const preloadedState = {
//   workouts: workouts,
//   activities: getActivities(),
// };


async function fetchActivities() {
  const { data, error } = await supabase.from("activity").select();
  if (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
  return data;
}

async function fetchWorkouts() {
  const { data, error } = await supabase.from("workout").select();
  if (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
  return data;
}

//Create out store and set our reducers, state, and middleware.
const store = createStore(allReducers, devToolsEnhancer());

// Fetch activities and update store
fetchActivities().then((data) => {
  store.dispatch({
    type: 'SET_ACTIVITIES',
    payload: data,
  });
});

// Fetch workouts and update store
fetchWorkouts().then((data) => {
  store.dispatch({
    type: 'SET_WORKOUTS',
    payload: data,
  });
});

export default store;
