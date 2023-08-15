import React from 'react';
import ActivityList from './ActivityList';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { Activity } from '../types/Activity';
import { Workout } from '../types/Workout';

function EditWorkout(props: any) {
  const { workoutId } = useParams();
  const workout = props.workouts.find((w: Workout) => w.id === Number(workoutId));

  const handleChange = (e: Event) => {
    console.warn((e.target as HTMLTextAreaElement).value);
  };

  const handleSubmit = (e: any) => {
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
      <form id='editWorkoutForm' onSubmit={handleSubmit}>
        <label htmlFor='workout-name'>Workout Name: </label>
        <input
          name='workout-name'
          type='text'
          className='workout-name-input'
          value={props.workoutName}
          onBlur={handleChange as any}
        />

        <div className='activity-list'>
          <ActivityList
            allItems={linkWorkoutActivities(workout, props.activities)}
            handleEvent={null}
            listType={'workoutActivities'}
          />
          <ActivityList
            allItems={filterActivities(workout, props.activities)}
            handleEvent={null}
            listType={'availableActivities'}
          />
        </div>
      </form>
      <button type='submit' form='editWorkoutForm' value='Save'>
        Save
      </button>
    </div>
  );
}

const linkWorkoutActivities = (workout: Workout, allActivities: Activity[]) => {
  const workoutActivities: number[] = [];

  workout.activities.forEach((activity: number) => {
    const matchingActivity = allActivities.find((act: Activity) => act.id === activity)
    if (matchingActivity)
      workoutActivities.push(matchingActivity.id)
  }
  );

  return workoutActivities;
};

const filterActivities = (workout: Workout, allActivities: Activity[]) => {
  const workoutActivities = linkWorkoutActivities(workout, allActivities);

  const unassignedActivities = allActivities.filter(
    (e) => !workoutActivities.includes(e.id)
  );

  return unassignedActivities;
};

const mapStateToProps = (state: any) => {
  return {
    workouts: state.workouts,
    activities: state.activities,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateWorkout: (workout: Workout) =>
      dispatch({ type: 'workoutList/updateWorkout', payload: workout }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);
