import React, { useState } from "react";

function Workout({ workout, index, edit, remove }) {
  return (
    <div className="workout">
      {workout.name}
      <div>
        <button onClick={() => edit(index)}>Edit</button>
        <button onClick={() => remove(index)}>Delete</button>
      </div>
    </div>
  );
}

function Home() {
  const [workouts, setWorkouts] = useState([
    {
      name: "Monday Lifting",
    },
    {
      name: "Body weight nonsense",
    },
    {
      name: "Dangleboard 9000",
    },
  ]);

  const addWorkout = (name) => {
    const newWorkouts = [...workouts, { name }];
    setWorkouts(newWorkouts);
  };

  const editWorkout = (index) => {
    const newWorkouts = [...workouts];
    // todo: edit
    setWorkouts(newWorkouts);
  };

  const removeWorkout = (index) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(index, 1);
    setWorkouts(newWorkouts);
  };

  return (
    <div>
      <h1>welcome to home!</h1>
      <div className="workout-list">
        {workouts.map((workout, index) => (
          <Workout
            index={index}
            key={index}
            workout={workout}
            edit={editWorkout}
            remove={removeWorkout}
          />
        ))}
        <button onClick={() => addWorkout}>Add new</button>
        {/* todo: nav when button clicked */}
      </div>
    </div>
  );
}

export default Home;
