import { useState } from 'react';
// import countdownBeepFile from '../assets/countdownBeep.mp3';
import countdownCompleteChimeFile from '../../assets/countdownCompleteChime.mp3';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Timer.css';

// import ActivityCompleteIndicator from './ActivityCompleteIndicator';
import React from 'react';

function Timer(props: any) {
  console.warn(JSON.stringify(props.initialDuration))
  const [isPlaying] = useState(true)
  const [count] = useState(props.initialDuration)

  // const countdownBeepSound = new Audio(countdownBeepFile);
  const countdownCompleteChimeSound = new Audio(countdownCompleteChimeFile);
  // const TIMER_WARNING_SECONDS = 3;

  //BUG: There remains an issue where navigating to the next activity will not start the timer
  // countdownBeepSound.muted = false;
  // countdownCompleteChimeSound.muted = true;

  // const [showCompleted, setShowCompleted] = useState(false);

  function showCountdownTimer():boolean {
    return true
  }

  // const countDownBeeps = (evt: any, count: number) => {
  //   if (evt.completed === false || count > TIMER_WARNING_SECONDS) return;
  //   if (count === TIMER_WARNING_SECONDS) {
  //     setShowCompleted(true);
  //     countdownCompleteChimeSound.play();
  //   } else {
  //     countdownBeepSound.play();
  //     setTimeout(() => countDownBeeps(evt, ++count), 1000);
  //   }
  // };

  // const onComplete = countdownCompleteChimeSound.play()

  // TODO: on init, set the remaining time to the initialDuration

  return showCountdownTimer() && (
    <div className="time-wrapper">
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={count}
        isSmoothColorTransition={true }
        size={100}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onUpdate={(remainingTime) => {
          console.log(`Counter is at ${count}. Remaining time is ${remainingTime}`)
        }}
        onComplete={() => countdownCompleteChimeSound.play() as any}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
      <hr />
      {/* <button onClick={() => setIsPlaying((prev) => !prev)}>
        Toggle Playing
      </button> */}
      {/* <button onClick={() => setCount((prev: any) => (prev += 5))}>Count</button> */}
    </div>
  )
}

export default Timer;