import React, { useState } from "react";
import { ActivityForm } from "./ActivityForm";
import { ActivityList } from "./ActivityList";
import "../App.css";

function AddWorkout() {
  const [activities, setActivities] = useState([
    {
      name: "Lunges",
      list: "workoutActivities"
    },
    {
      name: "Goblet Squats",
      list: "workoutActivities"
    },
    {
      name: "Runner Lunges",
      list: "workoutActivities"
    },
    {
      name: "Pistol Squat",
      list: "workoutActivities"
    },
    {
      name: "Body weight nonsense",
      list: "workoutActivities"
    },
    {
      name: "Dangleboard 9000",
      list: "availableActivities"
    },
  ]);

  const addActivity = (name, list) => {
    const newActivities = [...activities, { name, list }];
    console.log(newActivities);
    setActivities(newActivities);
  };

  const handleEvent = (index) => {
    const newActivities = [...activities];
    if (newActivities[index].list === "workoutActivities") {
      newActivities[index].list = "availableActivities";
    } else {
      newActivities[index].list = "workoutActivities";
    }
    setActivities(newActivities);
  };

  return (
    <div>
      <h1>Add Workout!</h1>
      <div className="activity-list">
      <ActivityList
      allItems={activities}
      handleEvent={handleEvent}
      listType={"workoutActivities"}
      />
      <ActivityForm addActivity={addActivity} />
      <ActivityList
      allItems={activities}
      handleEvent={handleEvent}
      listType={"availableActivities"}
      />
      </div>
    </div>
  );
}

export default AddWorkout;
