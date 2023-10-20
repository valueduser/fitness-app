import { Activity } from "../types/Activity";
import { Workout } from "../types/Workout";

export class Utils {
  static getNextActivity(activityIndex: number, workout: Workout): Activity | undefined {
    const nextId = workout.activity_ids[activityIndex + 1]
    // console.warn(`Next id is ${nextId})`)
    const nextActivity = workout.activities.find((a: Activity) => a.id === nextId)
    // console.warn(`Next activty is ${nextActivity?.name} (${nextActivity?.id})`)
    return nextActivity
  }
}
