import React, { useState } from "react";
import { useParams } from "react-router-dom";
import workouts from "../api/demoWorkouts.json";
import { Link } from "react-router-dom";
import "../App.css";

function DoWorkout(data) {
  const { workoutId } = useParams();
  const workout = workouts.find((w) => w.id === Number(workoutId));

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



  const carouselReducer =( state, action ) => {
    switch (action.type) {
      case 'jump':
        return {
          ...state,
          desired: action.desired,
        };
      case 'next':
        return {
          ...state,
          desired: next(action.length, state.active),
        };
      case 'prev':
        return {
          ...state,
          desired: previous(action.length, state.active),
        };
      case 'done':
        return {
          ...state,
          offset: NaN,
          active: state.desired,
        };
      case 'drag':
        return {
          ...state,
          offset: action.offset,
        };
      default:
        return state;
    }
  }


  const previous = (length, current) => {
    return (current - 1 + length) % length;
  }

  const next = (length, current) => {
    return (current + 1) % length;
  }

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
      <h1>Do {workout.name}!</h1>
      <Link to={`/doActivity/${workout.id}`}>
          <button>Start</button>
        </Link>
    </div>
  );
}

export default DoWorkout;
