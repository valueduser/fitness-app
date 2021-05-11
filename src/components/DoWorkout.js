import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

function DoWorkout(props) {
  const { workoutId } = useParams();
  const workout = props.workouts.find((w) => w.id === Number(workoutId));

  const carouselReducer = (state, action) => {
    switch (action.type) {
      case "jump":
        return {
          ...state,
          desired: action.desired,
        };
      case "next":
        return {
          ...state,
          desired: next(action.length, state.active),
        };
      case "prev":
        return {
          ...state,
          desired: previous(action.length, state.active),
        };
      case "done":
        return {
          ...state,
          offset: NaN,
          active: state.desired,
        };
      case "drag":
        return {
          ...state,
          offset: action.offset,
        };
      default:
        return state;
    }
  };

  const previous = (length, current) => {
    return (current - 1 + length) % length;
  };

  const next = (length, current) => {
    return (current + 1) % length;
  };

  const handleEvent = (index) => {
    // const newActivities = [...activities];
    // if (newActivities[index].list === "workoutActivities") {
    //   newActivities[index].list = "availableActivities";
    // } else {
    //   newActivities[index].list = "workoutActivities";
    // }
    // setActivities(newActivities);
  };

  return (
    <div>
      <h1>Do {workout.name}!</h1>
      <p id="workoutNotes">
        <span id="workoutNoteLabel">notes: </span>
        {!!workout.notes ? workout.notes : "none"}
      </p>
      <p id="workoutEquipment">
        <span id="workoutEquipmentLabel">equipment needed: </span>
        {!!workout.equipment ? workout.equipment : "none"}
      </p>
      <Link to={`/doActivity/${workout.id}/${workout.activities[0]}`}>
        <button>Start</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
  };
};

export default connect(mapStateToProps)(DoWorkout);
