import { createStore, combineReducers } from "redux";
import workoutListReducer from "./reducers/workoutListReducer";
import workouts from "../api/demoWorkouts.json";
import { devToolsEnhancer } from "redux-devtools-extension";

//Combine our reducers and change property names
const allReducers = combineReducers({
  workouts: workoutListReducer,
});

//Create initial State.
const preloadedState = {
  workouts: workouts,
};

//Create out store and set our reducers, state, and middleware.
const store = createStore(allReducers, preloadedState, devToolsEnhancer());

export default store;
