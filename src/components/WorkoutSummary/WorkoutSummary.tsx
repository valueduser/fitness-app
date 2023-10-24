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
      <h1>Do {workout.name} (WorkoutSummary)!</h1>
      <p id='workoutNotes'>
        <span id='workoutNoteLabel'>Notes: </span>
        {!!workout.notes ? workout.notes : 'none'}
      </p>
      <p id='workoutEquipment'>
        <span id='workoutEquipmentLabel'>Equipment needed: </span>
        { compileWorkoutEquipment(workout.activity_ids).join(', ') }
      </p>
      <Link to={`/activity/${workout.id}/${workout.activity_ids[0]}`}>
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

export default connect(mapStateToProps)(WorkoutSummary);