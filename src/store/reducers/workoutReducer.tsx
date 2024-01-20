import { Activity } from "../../types/Activity";
import { Workout } from "../../types/Workout";

interface Action {
  type: string;
  workouts: Workout[];
  activities: any
}

const initialState: Workout[] = [];

const workoutReducer = (state = initialState, action: Action) => {  switch (action.type) {
    case 'SET_WORKOUTS':
      let workouts = action.workouts.map((workout) => {
        const activity_ids = (workout as any).activity.map(({ id }: {id: number}) => id);
        const activities: Activity[] = action.activities
        .filter((activity: Activity) => activity_ids.includes(activity.id))
        .map((activity: any) => ({ ...activity, isBilateral: activity.is_bilateral }))

        return { ...workout, activities };
      });
      return workouts;
      
    default:
      return state;
  }
};

export default workoutReducer;
