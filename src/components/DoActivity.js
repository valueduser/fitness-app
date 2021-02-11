import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function DoActivity(props) {
  const { workoutId, activityId } = useParams();
  const activity = props.activities.find((a) => a.id === Number(activityId));
  const workout = props.workouts.find((a) => a.id === Number(workoutId));
  const activityIndex = workout.activities.indexOf(Number(activityId));

  // Bestow congratulations and button to return home on completion.
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

  return (
    <div>
      <div>
        <h4>{activity.name}</h4>
        <img src={activity.image} alt={activity.name}></img>
        <Timer id={activity.id} time={activity.duration}></Timer>
        <h4>Duration: {activity.duration}</h4>
        <h4>Reps: {activity.reps}</h4>
        <h4>Sets: {activity.sets}</h4>
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
