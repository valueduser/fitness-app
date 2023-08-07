import { createStore, combineReducers } from "redux";
import workoutListReducer from "./reducers/workoutListReducer";
import activityReducer from "./reducers/activityReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createClient } from "@supabase/supabase-js";

const supabaseRestEndpoint: string = process.env.REACT_APP_SUPABASE_REST || "";
const supabaseApiKey: string = process.env.REACT_APP_SUPABASE_API_KEY || "";
const supabase = createClient(supabaseRestEndpoint, supabaseApiKey);

//Combine our reducers and change property names
const allReducers = combineReducers({
  workouts: workoutListReducer,
  activities: activityReducer,
});

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
const store = createStore(allReducers, devToolsEnhancer({}));

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
