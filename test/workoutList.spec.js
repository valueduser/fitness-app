import workoutListReducer from "../src/store/reducers/workoutListReducer";

test("Updates a workout", () => {
  const initialState = [{ id: 0, name: "Test text", activities: [] }];

  const expectedWorkoutId = 1;
  const expectedWorkoutName = "new name value";
  const expectedWorkoutActivities = [
    "test activity"
  ];

  const newWorkout = {
    id: expectedWorkoutId,
    name: expectedWorkoutName,
    activities: expectedWorkoutActivities
  };

  const action = { type: "workoutList/updateWorkout", payload: newWorkout };
  const result = workoutListReducer(initialState, action);
  
  expect(result[0].id).toBe(expectedWorkoutId);
  expect(result[0].name).toBe(expectedWorkoutName);
  expect(result[0].activities).toBe(expectedWorkoutActivities);
})