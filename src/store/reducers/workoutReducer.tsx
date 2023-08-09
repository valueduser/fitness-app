import { Workout } from "../../types/Workout";

interface Action {
  type: string;
  payload: Workout[];
}

const initialState: Workout[] = [];

// function nextWorkoutId(workouts) {
//   const id = workouts.reduce((id, workout) => Math.max(workout.id, id), -1);
//   return id + 1;
// }

const workoutReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':




      // for (let i = 0; i < action.payload.length; i++) {
      //   const allActivities = (action.payload[i] as any).activity
      //   allActivities.array.forEach((activity: number) => {
      //     action.payload[i].activities.push(activity)
      //   });
      // }

      // const convertedData: Workout[] = action.payload.map(({ id, name, activity, notes }) => ({
      //   id,
      //   name,
      //   activities: activity.map(a => a.id),
      //   notes: notes || ''
      // }));

      // const workouts = action.payload.forEach((workout) => {
      //   const activities = (workout as any).activity.map(({ id }: {id: number}) => id);
      //   // const activities = (workout as any).activity.map((a: { id: any; }) => a.id);
      //   workout.activities = activities;
      //   console.warn(workout);
      //   // workout.activities = (workout as any).activity[0].id
      //   return workout;
      // })
      // return workouts;




      const workouts = action.payload.map((workout) => {
        const activities = (workout as any).activity.map(({ id }: {id: number}) => id);
        return { ...workout, activities }; // Spread the existing workout and add activities property
      });
      
      return workouts;
      

      // const activities = (action.payload as any).activity;

      // action.payload.activities = [1];
      // action.payload.activities = activities[0].id
      // console.error(action.payload);

      // return action.payload;
    // case 'SET_WORKOUT_ACTIVITY':
    //   return action.payload;
    // case 'workoutList/addWorkout':
    //   return [
    //     ...state,
    //     {
    //       id: nextWorkoutId(state.workouts),
    //       name: action.payload.name,
    //       activities: action.payload.activities,
    //     },
    //   ];

    // case 'workoutList/removeWorkout':
    //   return [...state.filter((workout) => workout.id !== action.payload.id)];
    // case 'workoutList/updateWorkout':
    //   return state.map((workout) => {
    //     if (workout.id !== action.payload.id) return workout;
    //     return {
    //       id: action.payload.id,
    //       name: action.payload.name,
    //       activities: action.payload.activities,
    //     };
    //   });
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

export default workoutReducer;
