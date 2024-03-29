import React from 'react';
import { ActivityComponent } from './Activity';

export default function ActivityList({ allItems, handleEvent, listType }:{allItems: any, handleEvent: any, listType: string}) {
  let listItems;
  if (allItems?.length > 1) {
    listItems = allItems.map((itemObj: any, index: number) => {
      // if (!!itemObj.list && itemObj.list !== listType) {
      //   return null;
      // }
      return (
        <ActivityComponent
          activity={itemObj}
          listType={listType}
          key={index}
          index={index}
        />
      );
    });
  }

  return (
    <div>
      <label>
        {listType === 'workoutActivities'
          ? 'Workout Activities'
          : 'Available Activities'}
      </label>
      <ul>{listItems}</ul>
    </div>
  );
}
