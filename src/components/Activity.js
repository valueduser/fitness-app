import React from 'react'; 

export function Activity({ activity, index, handleEvent }) {
  return (
    <div className="activity">
      {activity.name}
      <div>
        <button onClick={() => handleEvent(index)}>{activity.list==="workoutActivities" ? "-" : "+"}</button>
      </div>
    </div>
  );
}





// const activity = {
//   "name": "test activity",
//   "image": "not found",
//   "duration": "6 minutes",
//   "notes": "engage glutes",
//   "reps": "3",
//   "sets": "10",
//   "equipment": "25 lb kettlebell",
//   "weight": "25 lbs",
//   "tags": [
//     "endurance", "flexibility", "conditioning", "strength", "antagonist"
//   ]
// };



// const Activity = (props) => {
//   //Validate props



//   console.warn("activity ");
//   return (
//     <div>
//       <h1>Name</h1>
//       <img src="" alt=""/>
//       <p>Duration</p>
//       <p>Reps</p>
//       <p>Sets</p>
//       <p>Equipment</p>
//       <p>Weight</p>
//       <p>Tags</p>
//       <p>Notes</p>
//     </div>
//   )
// };

// export default Activity;