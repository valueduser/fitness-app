import React, { useState } from "react";
import { ActivityForm } from "./ActivityForm";


function AddActivity() {
  const [activities, setActivities] = useState([
    {
      name: "Lunges",
      list: "workoutActivities",
    },
    {
      name: "Goblet Squats",
      list: "workoutActivities",
    },
    {
      name: "Runner Lunges",
      list: "workoutActivities",
    },
    {
      name: "Pistol Squat",
      list: "workoutActivities",
    },
    {
      name: "Body weight nonsense",
      list: "workoutActivities",
    },
    {
      name: "Dangleboard 9000",
      list: "availableActivities",
    },
  ]);



  const addActivity = (name, list) => {
    const newActivities = [...activities, { name, list }];
    console.log(newActivities);
    setActivities(newActivities);
  };

  return (
    <div>
        <ActivityForm addActivity={addActivity} />
    </div>
    );
}

export default AddActivity;
