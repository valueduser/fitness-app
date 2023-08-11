import { Workout } from "../../types/Workout";

interface Action {
  type: string;
  payload: Workout[];
}

const initialState: Workout[] = [];

const workoutReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':

      const workouts = action.payload.map((workout) => {
        const activities = (workout as any).activity.map(({ id }: {id: number}) => id);
        return { ...workout, activities }; // Spread the existing workout and add activities property
      });
      
      return workouts;
      
    default:
      return state;
  }
};

export default workoutReducer;
