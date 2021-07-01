import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./CountDown.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 0, // 30 
  strokeWidth: 0 // 2
};


const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountDown(props) {


  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
 const traitementDate = new Date(props.DateTest).getTime() / 1000

// const endTime = stratTime + traitementDate ; // use UNIX timestamp in seconds
 const endTime = stratTime + props.Date ; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-2 ">
          <CountdownCircleTimer
                {...timerProps}
                colors={[["#7E2E84"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
            {({ elapsedTime }) =>
              renderTime("", getTimeDays(daysDuration - elapsedTime))
            }
          </CountdownCircleTimer>
        </div>

        <div className="col-2 ">
          <CountdownCircleTimer
              {...timerProps}
              colors={[["#D14081"]]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > hourSeconds
              ]}
          >
          {({ elapsedTime }) =>
            renderTime("", getTimeHours(daySeconds - elapsedTime))
          }
          </CountdownCircleTimer>
        </div>

        <div className="col-2 ">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#EF798A"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > minuteSeconds
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("", getTimeMinutes(hourSeconds - elapsedTime))
            }
          </CountdownCircleTimer>
        </div>

        <div className="col-2 ">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#218380"]]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > 0
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </div>
      </div>
      






    </div>
  );
}