import React from "react";
import { Activity } from "./Activity";

export function ActivityList({ allItems, handleEvent, listType }) {
  let listItems = allItems.map((itemObj, index) => {
    if(itemObj.list !== listType) {
      return null;
    }
    return <Activity activity={itemObj} key={index} index={index} handleEvent={handleEvent} />;
  });
  return <ul>{listItems}</ul>
}