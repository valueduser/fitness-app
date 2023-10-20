import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
// import { useState } from 'react';
import { Activity } from '../../types/Activity';
import { Workout } from '../../types/Workout';
// import supabaseClient from '../../supabaseClient';
import { Utils } from '../../common/utils';
import Timer2 from '../Timer2';

function ActivityDetail(props: any) {

  const { workoutId, activityId } = useParams();
  // const [imageURL, setImageURL] = useState('');
  // const [time, setTime] = useState(0);

  const workout = props.workouts.find((a: Workout) => a.id === Number(workoutId));
  const activity = workout.activities.find((a: Activity) => a.id === Number(activityId));
  const activityIndex = workout.activity_ids.indexOf(Number(activityId));
  const initialDuration = activity.duration_units === "seconds" ? activity.duration : activity.duration * 60
  // if(activity.duration) {
  //   setTime(activity.duration_units === "seconds" ? activity.duration : activity.duration * 60)
  // }

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

  return (
    <div>
      <div className='current-activity'>
        <h4>{activity.name}(New)</h4>
        {/* <CountdownCircleTimer
          isPlaying
          duration={7}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer> */}
        {/* <RenderTimerOrCounter/> */}
        <Timer2 initialDuration={initialDuration}/>
        <h4>Equipment: {activity.equipment?.length > 0 ? activity.equipment : 'none'}</h4>
        <h4>Notes: {activity.notes}</h4>
      </div>
      <div className='next-activity'>
        <h4>Up Next: {
            getNextActivityName()
          }</h4>
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
