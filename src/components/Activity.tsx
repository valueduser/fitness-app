import React from 'react';
import { Activity } from '../types/Activity'

export function ActivityComponent({ activity, listType, index }: {activity: Activity, listType: string, index: number}) {
  // const toggleActivity = (activity: Activity) => {
    
  //   // const newActivities = workout.activities[index];
  //   if (activity.list === 'workoutActivities') { // TODO: don't have the activity know which workout it belongs to. That should be the responsibilty of the workout
  //     activity.list = 'availableActivities';
  //   } else {
  //     activity.list = 'workoutActivities';
  //   }
  //   console.log(activity);
  //   // setActivities(newActivities);
  // };

  return (
    <div className='activity'>
      {activity.name}
      <div>
        {/* <button onClick={() => toggleActivity(activity)}>
          {listType === 'workoutActivities' ? '-' : '+'}
        </button> */}
      </div>
    </div>
  );
}

export default ActivityComponent;
