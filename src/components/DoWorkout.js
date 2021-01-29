import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

function DoWorkout(props) {
  const { workoutId } = useParams();
  const workout = props.workouts.find((w) => w.id === Number(workoutId));

  const carouselReducer = (state, action) => {
    switch (action.type) {
      case "jump":
        return {
          ...state,
          desired: action.desired,
        };
      case "next":
        return {
          ...state,
          desired: next(action.length, state.active),
        };
      case "prev":
        return {
          ...state,
          desired: previous(action.length, state.active),
        };
      case "done":
        return {
          ...state,
          offset: NaN,
          active: state.desired,
        };
      case "drag":
        return {
          ...state,
          offset: action.offset,
        };
      default:
        return state;
    }
  };

  const previous = (length, current) => {
    return (current - 1 + length) % length;
  };

  const next = (length, current) => {
    return (current + 1) % length;
  };

  const handleEvent = (index) => {
    // const newActivities = [...activities];
    // if (newActivities[index].list === "workoutActivities") {
    //   newActivities[index].list = "availableActivities";
    // } else {
    //   newActivities[index].list = "workoutActivities";
    // }
    // setActivities(newActivities);
  };

  return (
    <div>
      <h1>Do {workout.name}!</h1>
      <p>
        TODO: Add some information about how long the workout is expected to
        take, equipment needed, list of activities that are part of this workout
      </p>
      <Link to={`/doActivity/${workout.id}/${workout.activities[0]}`}>
        <button>Start</button>
      </Link>
    </div>
  );
}

// var $scope = {};
// $scope.selectedEmployees = ["1001", "1002"];
// $scope.selectedTasks = ["Task1", "Task2"];
// var newArray = [];
// for (var i = 0; i < $scope.selectedEmployees.length; i++) {
//   for (var j = 0; j < $scope.selectedTasks.length; j++) {
//     newArray.push({
//       empId: $scope.selectedEmployees[i],
//       task: $scope.selectedTasks[j],
//     });
//   }
// }

// console.log(newArray);

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
  };
};

export default connect(mapStateToProps)(DoWorkout);
