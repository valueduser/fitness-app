import React from "react";
import { ActivityList } from "./ActivityList";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import workouts from "../api/demoWorkouts.json";
import "../App.css";

function EditWorkout(props) {
  const { workoutId } = useParams();
  const workout = workouts.find((w) => w.id === Number(workoutId));

  const handleChange = (e) => {
    console.warn(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: populate the name, activities etc properties of the new workout and save
    console.log(e);
  };

  return (
    <div>
      <h1>Edit Workout!</h1>
      <h3>{workout.name}</h3>
      <form id="editWorkoutForm" onSubmit={handleSubmit}>
        <label htmlFor="workout-name">Workout Name: </label>
        <input
          name="workout-name"
          type="text"
          className="workout-name-input"
          value={props.workoutName}
          // onChange={handleChange}
          // onChange={(e) => setWorkoutName(e.target.value)}
        />
        <div>
          <label>
            With hooks
            <input
              type="checkbox"
              name="hooks"
              checked={true}
              // onChange={handleChange}
            />
          </label>
        </div>


        {/* //TODO: MAYBE MAKE THESE CHECKBOXES AND RENDER THEM THAT WAY */}


        <div className="activity-list">
          <ActivityList
            allItems={workout.activities}
            listType={"workoutActivities"}
          />
          <ActivityList
            allItems={workout.activities} //TODO: get all activities
            listType={"availableActivities"}
          />
        </div>
      </form>
      <button type="submit" form="editWorkoutForm" value="Save">
        Save
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkout: (workout) =>
      dispatch({ type: "workoutList/updateWorkout", payload: workout }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);
