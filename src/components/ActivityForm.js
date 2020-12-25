import React, { useState } from "react";

export function ActivityForm({ addActivity }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addActivity(value, "workoutActivities");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="activity-name">Activity Name: </label>
      <input
        name="activity-name"
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
