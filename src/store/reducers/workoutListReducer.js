const initialState = {};

function nextWorkoutId(workouts) {
  const id = workouts.reduce((id, workout) => Math.max(workout.id, id), -1);
  return id + 1;
}

const workoutListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "workoutList/addWorkout":
      return [
        ...state,
        {
          id: nextWorkoutId(state.workouts),
          name: action.payload.name,
          activities: action.payload.activities,
        },
      ];

    case "workoutList/removeWorkout":
      return [...state.filter((workout) => workout.id !== action.payload.id)];
    case "workoutList/updateWorkout":
      return state.map((workout) => {
        if (workout.id !== action.payload.id) return workout;
        return {
          id: action.payload.id,
          name: action.payload.name,
          activities: action.payload.activities,
        };
      });
    // return {
    //   ...state,
    //   workouts: state.workouts.map((workout) => {
    //     if (workout.id !== action.payload.id) return workout;

    //     return {
    //       id: action.payload.id,
    //       name: action.payload.name,
    //       activities: action.payload.activities,
    //     };
    //   }),

    // [
    //   ...state.workouts,
    //   {
    //     id: action.payload, //.id TODO:,
    //     name: action.payload, //.name TODO:,
    //     activities: action.payload, //.activities
    //   },
    // ],

    default:
      return state;
  }
};

export default workoutListReducer;
