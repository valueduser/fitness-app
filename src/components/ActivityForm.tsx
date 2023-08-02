import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function ActivityForm({ addActivity }) {
  const { register, handleSubmit } = useForm();

  const [value, setValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!value) return;
  //   addActivity(value, "workoutActivities");
  //   setValue("");
  // };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    addActivity(data["activity-name"], "workoutActivities");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <label for="activity-name">Activity Name: </label> */}
      <input
        name="activity-name"
        ref={register({ required: true, maxLength: 40 })}
        type="text"
        className="input"
        placeholder="Activity Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* TODO: some kind of indicator that reps & duration are an OR choice.  */}
       <input name="reps" type="number" ref={register({ min: 1 })} placeholder="reps" />

      <input name="duration" ref={register} placeholder="duration" />
      {/* TODO: is there a need for anything other than seconds? */}
      <select name="duration-units" ref={register}>
        <option value="seconds">seconds</option>
        <option value="minutes">minutes</option>
      </select>

      {/* TODO: this needs some special validation logic */}
      <input name="image" ref={register} type="file" accept="image/png, image/jpeg" placeholder="image upload will go here someday" />

      <input type="submit" />
    </form>
  );
}
