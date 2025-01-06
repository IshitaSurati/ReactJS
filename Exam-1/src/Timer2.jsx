import React, { useEffect, useState } from "react";

const Timer2 = () => {
  let [hour, setHour] = useState(1);  
  let [minute, setMin] = useState(0); 
  let [second, setSecond] = useState(0); 
  let id;

  useEffect(() => {
    id = setInterval(() => {
      if (second === 0) {
        if (minute === 0) {
          if (hour === 0) {
            clearInterval(id); // Stop the timer when it reaches 00:00:00
          } else {
            setHour(hour - 1); // Decrease hour
            setMin(59); // Reset minutes to 59
            setSecond(59); // Reset seconds to 59
          }
        } else {
          setMin(minute - 1); // Decrease minute
          setSecond(59); // Reset seconds to 59
        }
      } else {
        setSecond(second - 1); // Decrease second
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [second, minute, hour]);

  return <div>{hour}:{minute}:{second}</div>;
};

export default Timer2;
