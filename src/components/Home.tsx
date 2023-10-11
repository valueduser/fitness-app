import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Workout } from '../types/Workout';


function WorkoutComponent(props: any) {
  return (
    <div className='workout'>
      {props.workout.name}
      {/* TODO: display required equipment (if any) and rough estimate of time*/}
      <div>
        <Link to={`/doWorkout/${props.workout.id}`}>
          <button>Start</button>
        </Link>
      </div>
      <br/>
    </div>
  );
}

function Home(props: any) {
  return (
    <div>
      <h1>Available Workouts</h1>
      <div className='workout-list'>
        {props.workouts.map((workout: Workout) => (
          <div>
            <WorkoutComponent
            index={workout.id}
            key={workout.id}
            workout={workout}
            remove={props.removeWorkout}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    workouts: state.workouts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeWorkout: (workout: any) =>
      dispatch({ type: 'workoutList/removeWorkout', payload: workout }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);