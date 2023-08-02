import React, { useState } from "react";
import { connect } from "react-redux";
import ActivityList from "./ActivityList.tsx";
import "../App.css";

function AddWorkout(props) {
  const [workoutName, setWorkoutName] = useState("");

  const handleEvent = (index) => {
    // const newActivities = [...activities];
    // if (newActivities[index].list === "workoutActivities") {
    //   newActivities[index].list = "availableActivities";
    // } else {
    //   newActivities[index].list = "workoutActivities";
    // }
    // setActivities(newActivities);
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
          allItems={props.activities}
          handleEvent={handleEvent}
          listType={"availableActivities"}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(AddWorkout);
