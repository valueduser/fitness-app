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
    const uniqueActivities = Array.from(new Set(activities));
    const equipment = Array.from(new Set())
    uniqueActivities.forEach(activity => {
      if (activity.equipment?.length > 0)
        equipment.push(activity.equipment.toString().trim());   
    });
    const uniqueEquipment = Array.from(new Set(equipment));
    return uniqueEquipment.length > 0 ? uniqueEquipment : [ 'none' ]; 
  }

  const compileWorkoutTime = (activities: Activity[]) => {
    let totalTime = 0
    activities.forEach(activity => {
      if (activity.duration && activity.duration > 0) {
        console.warn(`activity ${activity.name} has a duration of ${activity.duration} in ${activity.duration_units}`)
        totalTime += activity.duration_units === "minutes" ? activity.duration : Math.floor(activity.duration / 60)
      }
    })
    console.warn(`total workout time: ${totalTime}`)
    return totalTime / 60
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
        { compileWorkoutTime(workout.activities) }
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