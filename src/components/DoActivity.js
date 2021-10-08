import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import Counter from "./Counter";


function DoActivity(props) {
  const { workoutId, activityId } = useParams();
  const activity = props.activities.find((a) => a.id === Number(activityId));
  const workout = props.workouts.find((a) => a.id === Number(workoutId));
  const activityIndex = workout.activities.indexOf(Number(activityId));

  if (activityIndex < 0) {
    return (
      <div>
        <h4>🎉 Workout Completed 🎉</h4>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }

  function RenderTimerOrCounter(props)
  {
    if(!!props.activity.duration) 
    {
      return <div>
        <Timer id={props.activity.id} time={props.activity.duration} image={activity.image} imageAltText={activity.name}></Timer>
      </div>;
    } else 
    {
      return <div>
        <Counter clickableImage={activity.image} imageAltText={activity.name} reps={activity.reps} sets={activity.sets}></Counter>
      </div>
    }
  }

  return (
    <div>
      <div>
        <h4>{activity.name}</h4>
        <RenderTimerOrCounter activity={activity}></RenderTimerOrCounter>
        <h4>Equipment: {activity.equipment.length > 0 ? activity.equipment : "none"}</h4>
        <h4>Notes: {activity.notes}</h4>
      </div>
      <Link
        to={`/doActivity/${Number(workoutId)}/${
          workout.activities[activityIndex + 1]
        }`}
      >
        <button>Next</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(DoActivity);
