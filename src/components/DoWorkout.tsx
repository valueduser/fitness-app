import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { Workout } from '../types/Workout';
import { Activity } from '../types/Activity';

function DoWorkout(props: any) {
  const { workoutId } = useParams();
  const workout = props.workouts.find((w: Workout) => w.id === Number(workoutId));

  // const previous = (length, current) => {
  //   return (current - 1 + length) % length;
  // };

  // const next = (length, current) => {
  //   return (current + 1) % length;
  // };

  // const handleEvent = (index) => {
  //   // const newActivities = [...activities];
  //   // if (newActivities[index].list === 'workoutActivities') {
  //   //   newActivities[index].list = 'availableActivities';
  //   // } else {
  //   //   newActivities[index].list = 'workoutActivities';
  //   // }
  //   // setActivities(newActivities);
  // };

  const compileWorkoutEquipment = (activitiesIds: number[]) => {
    const uniqueActivities = Array.from(new Set(activitiesIds));
    const equipment = Array.from(new Set())
    uniqueActivities.forEach(activityId => {
      const activity = props.activities.find((a: Activity) => a.id === Number(activityId));
      if (activity.equipment?.length > 0)
        equipment.push(activity.equipment.toString().trim());   
    });
    const uniqueEquipment = Array.from(new Set(equipment));
    return uniqueEquipment.length > 0 ? uniqueEquipment : [ 'none' ]; 
  }

  return (
    <div>
      <h1>Do {workout.name}!</h1>
      <p id='workoutNotes'>
        <span id='workoutNoteLabel'>Notes: </span>
        {!!workout.notes ? workout.notes : 'none'}
      </p>
      <p id='workoutEquipment'>
        <span id='workoutEquipmentLabel'>Equipment needed: </span>
        { compileWorkoutEquipment(workout.activities).join(', ') }
      </p>
      <Link to={`/doActivity/${workout.id}/${workout.activities[0]}`}>
        <button>Start</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    workouts: state.workouts,
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(DoWorkout);