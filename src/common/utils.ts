import { Activity } from "../types/Activity"
import { Workout } from "../types/Workout"

export class Utils {
  static getNextActivity(activityIndex: number, workout: Workout): Activity | null {
    if (activityIndex >= 0) {
      const nextActivity = workout.activities[activityIndex + 1]
      return nextActivity ? nextActivity : null
    }
    return null
  }

  static isNullOrEmpty(value: any): boolean {
    if (value === null || value === undefined) {
      return true
    }

    if (typeof value === 'string' || value instanceof String) {
      return value.trim().length === 0
    }

    if (Array.isArray(value)) {
      return value.length === 0
    }

    if (typeof value === 'object') {
      return Object.keys(value).length === 0
    }

    return false
  }
}
