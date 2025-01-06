import React, { useEffect, useState } from "react";

const Timer = () => {
  let [hour, setHour] = useState(0);
  let [minute, setMin] = useState(30);
  let [second, setSecond] = useState(0);
  let id;

  useEffect(() => {
    id = setInterval(() => {
      setSecond(second + 1);
      if (second == 59) {
        setSecond(0);
        setMin(minute - 1);
      }
      if (minute == 59) {
        setMin(0);
        setHour(hour+1)
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [second]);

  return <div>{hour}:{minute}:{second}</div>;
};

export default Timer;
