import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Activity } from '../../types/Activity';
import { Workout } from '../../types/Workout';
import { Utils } from '../../common/utils';
import Timer from '../Timer/Timer';

function ActivityDetail(props: any) {

  const { workoutId, activityId } = useParams();

  const workout = props.workouts.find((w: Workout) => w.id === Number(workoutId))
  const activity = workout.activities.find((a: Activity) => a.id === Number(activityId));
  const activityIndex = workout.activities.findIndex((a: Activity) => a.id === Number(activityId));
  const nextActivity = Utils.getNextActivity(activityIndex, workout)


  function getNextActivityName(): string {
    // console.warn(`Current activity is ${activity?.name} id:(${activity?.id} index: ${activityIndex}). Next activity is ${nextActivity?.name} id:(${nextActivity?.id}).`)
    return nextActivity ? nextActivity.name: 'Finished!'
  }

  function getNextActivityUrl(): string {
    const url: string = nextActivity ? `/activity/${Number(workoutId)}/${
      nextActivity.id
    }` : `/fitness-app`
    return url
  }

  function Item(activity: Activity) {
    // TODO: handle activity.isBilateral
    if (activity.duration) {
      const initialDuration = activity.duration_units === "seconds" ? activity.duration : activity.duration * 60
      return <Timer initialDuration={initialDuration}/>;
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
