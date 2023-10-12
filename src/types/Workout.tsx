import { Activity } from "./Activity";

export type Workout = {
  id: number,
  name: string, 
  activity_ids: number[],
  activities: Activity[],
  notes: string | ''
};
