import { Activity } from "../types/Activity";
import { Workout } from "../types/Workout";

export class Utils {
  static getNextActivity(activityIndex: number, workout: Workout): Activity | null {
    if (activityIndex >= 0) {
      const nextActivity = workout.activities[activityIndex + 1]
      // console.warn(`Next activty is ${nextActivity?.name} id:(${nextActivity?.id} index: ${activityIndex + 1})`)
      return nextActivity ? nextActivity : null
    }
    return null;
  }
}
