import { motion } from "framer-motion";
import React, { Fragment, fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
      <div className="clock flex justify-center select-none">
        <section>
          <p>{timerDays}</p>
          <small>Days</small>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <small>Hours</small>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <small>Minutes</small>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <small>Seconds</small>
        </section>
      </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
