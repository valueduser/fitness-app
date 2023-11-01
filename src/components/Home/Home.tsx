import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Workout } from '../../types/Workout';

function Home(props: any) {
  return (
    <div>
      <h1>Available Workouts</h1>
      <div className='workout-list'>
        {props.workouts.map((workout: Workout) => (
          // <WorkoutSummary {...workout} />
          <div className='workout'
          key={workout.id}>
          {workout.name}
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


export default connect(mapStateToProps)(Home);