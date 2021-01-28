import React, { useState } from "react";
import { ActivityList } from "./ActivityList";
import "../App.css";

function AddWorkout() {
  //TODO: populate this only in demo mode
  const [activities, setActivities] = useState([
    {
      name: "Lunges",
      list: "workoutActivities",
      image: "not found",
      duration: "6 minutes",
      notes: "engage glutes",
      reps: 3,
      sets: 10,
      equipment: "25 lb kettlebell",
      weight: 25,
      weightUnits: "lbs",
      tags: [
        "endurance",
        "flexibility",
        "conditioning",
        "strength",
        "antagonist",
      ],
    },
    {
      name: "Goblet Squats",
      list: "workoutActivities",
      image: "not found",
      duration: "6 minutes",
      notes: "engage glutes",
      reps: 3,
      sets: 10,
      equipment: "25 lb kettlebell",
      weight: 25,
      weightUnits: "lbs",
      tags: [
        "endurance",
        "flexibility",
        "conditioning",
        "strength",
        "antagonist",
      ],
    },
    {
      name: "Runner Lunges",
      list: "workoutActivities",
      image: "not found",
      duration: "6 minutes",
      notes: "engage glutes",
      reps: 3,
      sets: 10,
      equipment: "25 lb kettlebell",
      weight: 25,
      weightUnits: "lbs",
      tags: [
        "endurance",
        "flexibility",
        "conditioning",
        "strength",
        "antagonist",
      ],
    },
    {
      name: "Pistol Squat",
      list: "workoutActivities",
      image: "not found",
      duration: "6 minutes",
      notes: "engage glutes",
      reps: 3,
      sets: 10,
      equipment: "25 lb kettlebell",
      weight: 25,
      weightUnits: "lbs",
      tags: [
        "endurance",
        "flexibility",
        "conditioning",
        "strength",
        "antagonist",
      ],
    },
    {
      name: "Body weight nonsense",
      list: "workoutActivities",
      image: "not found",
      duration: "6 minutes",
      notes: "engage glutes",
      reps: 3,
      sets: 10,
      equipment: "25 lb kettlebell",
      weight: 25,
      weightUnits: "lbs",
      tags: [
        "endurance",
        "flexibility",
        "conditioning",
        "strength",
        "antagonist",
      ],
    },
    {
      name: "Dangleboard 9000",
      list: "availableActivities",
      image: "not found",
      duration: "6 minutes",
      notes: "engage glutes",
      reps: 3,
      sets: 10,
      equipment: "25 lb kettlebell",
      weight: 25,
      weightUnits: "lbs",
      tags: [
        "endurance",
        "flexibility",
        "conditioning",
        "strength",
        "antagonist",
      ],
    },
  ]);

  const [workoutName, setWorkoutName] = useState("");

  const handleEvent = (index) => {
    const newActivities = [...activities];
    if (newActivities[index].list === "workoutActivities") {
      newActivities[index].list = "availableActivities";
    } else {
      newActivities[index].list = "workoutActivities";
    }
    setActivities(newActivities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: populate the name, activities etc properties of the new workout and save
    alert(e.target.value);
  };

  return (
    <div>
      <h1>Add Workout!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="workout-name">Workout Name: </label>
        <input
          name="workout-name"
          type="text"
          className="workout-name-input"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
      </form>
      <div className="activity-list">
        <ActivityList
          allItems={null}
          handleEvent={handleEvent}
          listType={"workoutActivities"}
        />
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
