import { createStore, combineReducers } from "redux";
import workoutReducer from "./reducers/workoutReducer";
import activityReducer from "./reducers/activityReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import supabaseClient from "../supabaseClient";

//Combine our reducers and change property names
const allReducers = combineReducers({
  workouts: workoutReducer,
  activities: activityReducer,
});

async function fetchActivities() {
  const { data, error } = await supabaseClient.from("activity").select();
  if (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
  return data;
}

async function fetchWorkoutsWithActivities() {
  const { data, error } = await supabaseClient.from('workout')
  .select(`
    id,
    name,
    notes,
    activity (
      id
    ) as activities
  `)
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
fetchWorkoutsWithActivities().then((data) => {
  store.dispatch({
    type: 'SET_WORKOUTS',
    payload: data,
  });
});

export default store;
