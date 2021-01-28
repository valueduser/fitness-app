import { createStore, combineReducers } from "redux";
import workoutListReducer from "./reducers/workoutListReducer";
import activityReducer from "./reducers/activityReducer";
import workouts from "../api/demoWorkouts.json";
import activities from "../api/demoActivities.json";
import { devToolsEnhancer } from "redux-devtools-extension";

//Combine our reducers and change property names
const allReducers = combineReducers({
  workouts: workoutListReducer,
  activities: activityReducer
});

//Create initial State.
const preloadedState = {
  workouts: workouts,
  activities: activities
};

//Create out store and set our reducers, state, and middleware.
const store = createStore(allReducers, preloadedState, devToolsEnhancer());

export default store;
