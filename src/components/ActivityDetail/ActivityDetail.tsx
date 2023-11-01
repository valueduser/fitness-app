import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
// import { useState } from 'react';
import { Activity } from '../../types/Activity';
import { Workout } from '../../types/Workout';
// import supabaseClient from '../../supabaseClient';
import { Utils } from '../../common/utils';
import Timer2 from '../Timer/Timer2';

function ActivityDetail(props: any) {

  const { workoutId, activityId } = useParams();
  // const [imageURL, setImageURL] = useState('');

  const workout = props.workouts.find((a: Workout) => a.id === Number(workoutId));
  const activity = workout.activities.find((a: Activity) => a.id === Number(activityId));
  const activityIndex = workout.activity_ids.indexOf(Number(activityId));


  function getNextActivityName(): string {
    const nextActivity = Utils.getNextActivity(activityIndex, workout)
    return nextActivity ? nextActivity.name: 'Finished!'
  }

  function getNextActivityUrl(): string {
    const nextActivity = Utils.getNextActivity(activityIndex, workout)
    const url: string = nextActivity ? `/activity/${Number(workoutId)}/${
      nextActivity.id
    }` : `/fitness-app`
    return url
  }

  function Item(activity: Activity) {
    if (activity.duration) {
      const initialDuration = activity.duration_units === "seconds" ? activity.duration : activity.duration * 60
      return <Timer2 initialDuration={initialDuration}/>;
    }
    return <div className="counter">you need to figure out counters</div>; // TODO:
  }

  return (
    <div>
      <div className='current-activity'>
        <h4>{activity.name}</h4>
        <Item {...activity}/>
        <h5>Equipment: {activity.equipment?.length > 0 ? activity.equipment : 'none'}</h5>
        <h5>Notes: {activity.notes}</h5>
      </div>
      <div className='next-activity'>
        <h5>Up Next: {
            getNextActivityName()
          }</h5>
          <Link to={getNextActivityUrl()}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    workouts: state.workouts
  };
};

export default connect(mapStateToProps)(ActivityDetail);
