import React, { useState } from 'react';
import { ActivityForm } from './ActivityForm';

function AddActivity() {
  const [activities, setActivities] = useState([
    {
      name: 'Lunges',
      list: 'workoutActivities',
      image: 'https://www.wpoven.com/blog/wp-content/uploads/2018/10/error-404-not-found-1.png',
      duration: 25,
      durationUnits: 'seconds',
      reps: 2,
      sets: 1,
      equipment: [
        '25 lb kettlebell'
      ],
      weight: 31,
      tags: [
        'endurance', 'flexibility', 'conditioning', 'strength', 'antagonist'
      ]
    },
    {
      name: 'Goblet Squats',
      list: 'workoutActivities', 
      image: 'https://www.wpoven.com/blog/wp-content/uploads/2018/10/error-404-not-found-1.png',
      duration: 25,
      durationUnits: 'seconds',
      reps: 2,
      sets: 1,
      equipment: [
        '25 lb kettlebell'
      ],
      weight: 13,
      tags: [
        'endurance', 'flexibility', 'conditioning', 'strength', 'antagonist'
      ]
    },
    {
      name: 'Runner Lunges',
      list: 'workoutActivities', 
      image: 'https://www.wpoven.com/blog/wp-content/uploads/2018/10/error-404-not-found-1.png',
      duration: 25,
      durationUnits: 'seconds',
      reps: 2,
      sets: 1,
      equipment: [
        '25 lb kettlebell'
      ],
      weight: 4,
      tags: [
        'endurance', 'flexibility', 'conditioning', 'strength', 'antagonist'
      ]
    },
    {
      name: 'Pistol Squat',
      list: 'workoutActivities', 
      image: 'https://www.wpoven.com/blog/wp-content/uploads/2018/10/error-404-not-found-1.png',
      duration: 25,
      durationUnits: 'seconds',
      reps: 2,
      sets: 1,
      equipment: [
        '25 lb kettlebell'
      ],
      weight: 5,
      tags: [
        'endurance', 'flexibility', 'conditioning', 'strength', 'antagonist'
      ]
    },
    {
      name: 'Body weight nonsense',
      list: 'workoutActivities', 
      image: 'https://www.wpoven.com/blog/wp-content/uploads/2018/10/error-404-not-found-1.png',
      duration: 25,
      durationUnits: 'seconds',
      reps: 2,
      sets: 1,
      equipment: [
        '25 lb kettlebell'
      ],
      weight: '',
      tags: [
        'endurance', 'flexibility', 'conditioning', 'strength', 'antagonist'
      ]
    },
    {
      name: 'Dangleboard 9000',
      list: 'availableActivities', 
      image: 'https://www.wpoven.com/blog/wp-content/uploads/2018/10/error-404-not-found-1.png',
      duration: 25,
      durationUnits: 'seconds',
      reps: 2,
      sets: 1,
      equipment: [
        '25 lb kettlebell'
      ],
      weight: 5,
      tags: [
        'endurance', 'flexibility', 'conditioning', 'strength', 'antagonist'
      ]
    },
  ]);

  const addActivity = (name: string, image: string | '', list: string, duration: number, durationUnits: string, reps: number, sets: number, equipment: string[], weight: number, tags: string[]) => {
    const newActivities = [...activities, { name, image, list, duration, durationUnits, reps, sets, equipment, weight, tags }];
    console.log(newActivities);
    setActivities(newActivities);
  };

  return (
    <div>
        <ActivityForm addActivity={addActivity} />
    </div>
    );
}

export default AddActivity;
