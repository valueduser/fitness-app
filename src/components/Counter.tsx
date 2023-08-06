import React, { useState } from 'react';
import countdownCompleteChimeFile from '../assets/countdownCompleteChime.mp3';
import ActivityCompleteIndicator from './ActivityCompleteIndicator';

function Counter(props: any) {
  
  const [sets, setSets] = useState(Number(props.sets));
  const [reps, setReps] = useState(Number(props.reps));
  const [showCompleted, setShowCompleted] = useState(false);


  const countdownCompleteChimeSound = new Audio(countdownCompleteChimeFile);
  countdownCompleteChimeSound.muted = false;


  function reduceByOne(){
    if(reps > 1) {
      setReps(reps - 1);
    } else if (sets > 0) {
      setReps(props.reps);
      setSets(sets - 1);
    } else if (sets === 0 && reps === 1) {
      setShowCompleted(true);
      countdownCompleteChimeSound.play();
    }
  }

    return (
      <div>
        <img src={props.clickableImage} alt={props.imageAltText}
          onClick={() => reduceByOne()}
        ></img>
        <p>Sets: {sets} / {props.sets}</p>
        <p>Reps: {reps} / {props.reps}</p>
        <div><ActivityCompleteIndicator display={showCompleted}></ActivityCompleteIndicator></div>
      </div>
    );
}

export default Counter;