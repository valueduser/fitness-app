import { useState } from 'react';
import ReactCountDown, { zeroPad } from "react-countdown";
import countdownBeepFile from "../assets/countdownBeep.mp3";
import countdownCompleteChimeFile from "../assets/countdownCompleteChime.mp3";
import ActivityCompleteIndicator from "./ActivityCompleteIndicator.tsx";
import React from 'react';

function Timer(props: any) {
  const countdownBeepSound = new Audio(countdownBeepFile);
  const countdownCompleteChimeSound = new Audio(countdownCompleteChimeFile);
  const TIMER_WARNING_SECONDS = 3;

  //BUG: There remains an issue where navigating to the next activity will not start the timer
  countdownBeepSound.muted = false;
  countdownCompleteChimeSound.muted = false;

  const [showCompleted, setShowCompleted] = useState(false);

  const renderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => {
    return (
      <span data-display="inline">
        {zeroPad(minutes)}:{zeroPad(seconds)}<ActivityCompleteIndicator display={showCompleted}></ActivityCompleteIndicator>
      </span>
    );
  };

  //Prevent rendering of the beep timer
  const emptyRender = () => {
    return <span></span>;
  };

  const countDownBeeps = (evt: any, count: number) => {
    if (evt.completed === false || count > TIMER_WARNING_SECONDS) return;
    if (count === TIMER_WARNING_SECONDS) {
      setShowCompleted(true);
      countdownCompleteChimeSound.play();
    } else {
      countdownBeepSound.play();
      setTimeout(() => countDownBeeps(evt, ++count), 1000);
    }
  };

  return (
    <div>
      <div><img src={props.image} alt={props.imageAltText}></img></div>
      <ReactCountDown
        data-id="renderedTimer"
        key={props.id}
        date={Date.now() + Number(props.time * 1000)}
        renderer={renderer}
      ></ReactCountDown>
      <div id="beepTimer" data-display="none">
        <ReactCountDown
          data-id="beepTimer"
          key={props.id}
          date={
            Date.now() +
            Number(props.time * 1000 - TIMER_WARNING_SECONDS * 1000)
          }
          onComplete={(e) => countDownBeeps(e, 0)}
          renderer={emptyRender}
        ></ReactCountDown>
      </div>
    </div>
  );
}
export default Timer;
