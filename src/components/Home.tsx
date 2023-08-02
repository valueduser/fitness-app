import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Workout(props: any) {
  return (
    <div className="workout">
      {props.workout.name}
      <div>
        <Link to={`/editWorkout/${props.workout.id}`}>
          {/* TODO: editWorkout page pass the workout and modify and return */}
          <button>Edit</button>
        </Link>
        <button onClick={() => props.remove(props.workout)}>Delete</button>
        <Link to={`/doWorkout/${props.workout.id}`}>
          <button>Start</button>
        </Link>
      </div>
      <br/>
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <h1>Available Workouts</h1>
      <div className="workout-list">
        {props.workouts.map((workout, index) => (
          <Workout
            index={index}
            key={index}
            workout={workout}
            remove={props.removeWorkout}
          />
        ))}

        <Link to="/addWorkout">
          <button>New Workout</button>
        </Link>
      </div>
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
    removeWorkout: (workout) =>
      dispatch({ type: "workoutList/removeWorkout", payload: workout }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);