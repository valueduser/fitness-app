import React from "react";
import { Activity } from "./Activity";

export function ActivityList({ allItems, listType }) {
  let listItems = allItems.map((itemObj, index) => {
    if (itemObj.list !== listType) {
      return null;
    }
    return <Activity activity={itemObj} key={index} index={index} />;
  });

  return (
    <div>
      <label>
        {listType === "workoutActivities"
          ? "Workout Activities"
          : "Available Activities"}
      </label>
      <ul>{listItems}</ul>
    </div>
  );
}
