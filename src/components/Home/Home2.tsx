import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Workout } from '../../types/Workout';

function Home2(props: any) {
  return (
    <div>
      <h1>Available Workouts (Home 2)</h1>
      <div className='workout-list'>
        {props.workouts.map((workout: Workout) => (
          // <WorkoutSummary {...workout} />
          <div className='workout'>
          {workout.name}
          {/* TODO: display required equipment (if any) and rough estimate of time*/}
          <div>
            <Link to={`/workoutSummary/${workout.id}`}>
              <button>Start</button>
            </Link>
          </div>
          <br/>
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


export default connect(mapStateToProps)(Home2);