/** @format */

import { React, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  });

  function Timer() {
    setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
      });
    }, 1000);
  }

  // function that count time
  Timer();

  return (
    <>
      <p className='text-9xl text-zinc-50 text-center'>
        {time.hour} : {time.min < 10 ? '0' + time.min : time.min} :{' '}
        {time.sec < 10 ? '0' + time.sec : time.sec}
      </p>
    </>
  );
};

export default Clock;
