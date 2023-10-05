import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Timer from './Timer';
import Counter from './Counter';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Activity } from '../types/Activity';
import supabaseClient from '../supabaseClient';

function DoActivity(props: any) {
  const { workoutId, activityId } = useParams();
  const activity = props.activities.find((a: any) => a.id === Number(activityId));
  const workout = props.workouts.find((a: any) => a.id === Number(workoutId));
  const activityIndex = workout.activities.indexOf(Number(activityId));

  const [imageURL, setImageURL] = useState('');

  function getNextActivityName(props: any): string {
    const nextActivity: Activity = props.activities.find((a: any) => a.id === Number(workout.activities[activityIndex + 1]))
    return nextActivity ? nextActivity.name: 'Finished!'
  }

  useEffect(() => {
    (async () => {
      if (activity.image === null) {
        setImageURL(`http://placehold.jp/3d4070/ffffff/150x150.png?text=${activity.name.replace(" ", "")}`);
      } else if (activity.image.startsWith('http')) {
        setImageURL(activity.image)
      } else {
        const { data, error } = await supabaseClient.storage
        .from("img")
        .createSignedUrl(activity.image, 600);

        if (error) {
          throw new Error(error.message)
        }
        console.warn("setting the iumage url: ", data.signedUrl);
        setImageURL(data.signedUrl);
      }
    })();
  },[activity]);

  if (activityIndex < 0) {
    return (
      <div>
        <h4>🎉 Workout Completed 🎉</h4>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    );
  }

  function RenderTimerOrCounter(props: any)
  {
    if(!!props.activity.duration) 
    {
      return <div>
        <Timer id={props.activity.id} time={props.activity.durationUnits === "seconds" ? props.activity.duration : props.activity.duration * 60} image={imageURL} imageAltText={activity.name}></Timer>
      </div>;
    } else 
    {
      return <div>
        <Counter clickableImage={imageURL} imageAltText={activity.name} reps={activity.reps} sets={activity.sets}></Counter>
      </div>
    }
  }

  return (
    <div>
      <div className='current-activity'>
        <h4>{activity.name}</h4>
        <RenderTimerOrCounter activity={activity}></RenderTimerOrCounter>
        <h4>Equipment: {activity.equipment?.length > 0 ? activity.equipment : 'none'}</h4>
        <h4>Notes: {activity.notes}</h4>
      </div>
      <div className='next-activity'>
        <h4>Up Next: {
            getNextActivityName(props)
          }</h4>
          <Link
            to={`/doActivity/${Number(workoutId)}/${
              workout.activities[activityIndex + 1]
            }`}
          >
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    workouts: state.workouts,
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(DoActivity);
