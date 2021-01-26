import React from 'react'; 

export function Activity({ activity, index }) {

  const toggleActivity = (activity) => {
    console.log(activity);
    // const newActivities = workout.activities[index];
    if (activity.list === "workoutActivities") {
      activity.list = "availableActivities";
    } else {
      activity.list = "workoutActivities";
    }
    // setActivities(newActivities);
  };


  return (
    <div className="activity">
      {activity.name}
      <div>
        <button onClick={() => toggleActivity(activity)}>{activity.list==="workoutActivities" ? "-" : "+"}</button>
      </div>
    </div>
  );
}

export default Activity;