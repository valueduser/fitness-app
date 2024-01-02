import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../App.css';
import { Workout } from '../../types/Workout';
import { Activity } from '../../types/Activity';

function WorkoutSummary(props: any) {
  const { workoutId } = useParams();
  const workout = props.workouts.find((w: Workout) => w.id === Number(workoutId));

  const compileWorkoutEquipment = (activities: Activity[]) => {
    const uniqueEquipment: string[] = Array.from(
      new Set(
        activities.reduce((accumulator: string[], activity: Activity) => {
          console.warn(activity.equipment)
          if(activity.equipment) {
            accumulator.push(...activity.equipment);
          }
          return accumulator;
        }, [])
      )
    );
    return uniqueEquipment.length > 0 ? uniqueEquipment : [ 'none' ];
  }

  const compileWorkoutTime = (activities: Activity[]) => {
    let totalTime = 0
    activities.forEach(activity => {
      if (activity.duration && activity.duration > 0) {
        switch(activity.duration_units) {
          case "minutes":
            totalTime += activity.duration
          break;
          case "seconds":
            totalTime += Math.round(activity.duration / 60)
          break;
          case "hours": 
            totalTime += Math.round(activity.duration * 60)
          break;
        }
      }
    })
    return totalTime
  }

  return (
    <div>
      <h1>Do {workout.name} (WorkoutSummary)!</h1>
      <p id='workoutNotes'>
        <span id='workoutNoteLabel'>Notes: </span>
        {!!workout.notes ? workout.notes : 'none'}
      </p>
      <p id='workoutEquipment'>
        <span id='workoutEquipmentLabel'>Equipment needed: </span>
        { compileWorkoutEquipment(workout.activities).join(', ') }
      </p>
      <p id='workoutTime'>
        <span id='workoutTimeLabel'>Time needed: ~</span>
        { compileWorkoutTime(workout.activities) } minutes
      </p>
      <p id="firstUp">
        First up: {workout.activities[0].name}
      </p>
      <Link to={`/activity/${workout.id}/${workout.activities[0].id}`}>
        <button>Start</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    workouts: state.workouts
  };
};

export default connect(mapStateToProps)(WorkoutSummary);