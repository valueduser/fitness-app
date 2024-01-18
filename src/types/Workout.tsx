import { Activity } from "./Activity";

export type Workout = {
  id: number,
  name: string, 
  activities: Activity[],
  notes: string | '',
  isActive: boolean | true
};
