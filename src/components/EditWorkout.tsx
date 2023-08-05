import React from "react";
import ActivityList from "./ActivityList";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import { Activity } from "../types/Activity";
import { Workout } from "../types/Workout";

function EditWorkout(props: any) {
  const { workoutId } = useParams();
  const workout = props.workouts.find((w: Workout) => w.id === Number(workoutId));

  const handleChange = (e: Event) => {
    console.warn(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: populate the name, activities etc properties of the new workout and save
    console.log(e);
  };


  //TODO: edit the ordering of workout items
  //TODO: add rest activity type

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
          onBlur={handleChange}
        />

        <div className="activity-list">
          <ActivityList
            allItems={linkWorkoutActivities(workout, props.activities)}
            listType={"workoutActivities"}
          />
          <ActivityList
            allItems={filterActivities(workout, props.activities)}
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

const linkWorkoutActivities = (workout: Workout, allActivities: Activity[]) => {
  const workoutActivities: number[] = [];

  workout.activities.forEach((activity: number) =>
    workoutActivities.push(allActivities.find((act: Activity) => act.id === activity))
  );

  return workoutActivities;
};

const filterActivities = (workout: Workout, allActivities: number[]) => {
  const workoutActivities = linkWorkoutActivities(workout, allActivities);

  const unassignedActivities = allActivities.filter(
    (e) => !workoutActivities.includes(e)
  );

  return unassignedActivities;
};

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    activities: state.activities,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateWorkout: (workout: Workout) =>
      dispatch({ type: "workoutList/updateWorkout", payload: workout }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);
