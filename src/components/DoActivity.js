import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function DoActivity(props) {
  const { activityId } = useParams();
  const activity = props.activities.find((a) => a.id === Number(activityId));

  return (
    <div>
      <div>
        <h4>Do {activity.name}</h4>
        <img src={activity.image} alt={activity.name}></img>
        <h4>Duration: {activity.duration}</h4>
        <h4>Reps: {activity.reps}</h4>
        <h4>Sets: {activity.sets}</h4>
        <h4>Notes: {activity.notes}</h4>
      </div>
      <p>
        TODO: This needs to actually increment the index of the activity on the
        workout. Also needs to return home if there isn't a next activity
      </p>
      <Link to={`/doActivity/${Number(activityId) + 1}`}>
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
