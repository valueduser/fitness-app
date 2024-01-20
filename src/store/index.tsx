import { createStore, combineReducers } from "redux"
import workoutReducer from "./reducers/workoutReducer"
import { devToolsEnhancer } from "redux-devtools-extension"
import supabaseClient from "../supabaseClient"

const allReducers = combineReducers({
  workouts: workoutReducer
})

async function fetchActivities() {
  const { data, error } = await supabaseClient.from("activity").select().eq('is_active', 'true').order('id')
  if (error) {
    console.error('Error fetching activities:', error)
    return []
  }
  return data
}

async function fetchWorkoutsWithActivities() {
    const { data, error } = await supabaseClient.from('workout')
    .select(`
      id,
      name,
      notes,
      is_active,
      activity(id)
  `).eq('is_active', 'true')
  .order('id')
  if (error) {
    console.error('Error fetching workouts:', error)
    return []
  }
  return data
}

const store = createStore(allReducers, devToolsEnhancer({}))


fetchActivities().then((activityData) => {
  fetchWorkoutsWithActivities().then((data) => {
    store.dispatch({
      type: 'SET_WORKOUTS',
      workouts: data,
      activities: activityData
    })
  })
})


export default store
