import React, { useEffect, useState } from 'react';
import './Counter.css'; 

function Counter() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let id;
        if (flag) {
            id = setInterval(() => {
                setCount(count + 1);
            }, 1000);
        }
        return () => clearInterval(id);
    }, [count,flag]);

    return (
        <div className="heart-container">
            <div className={`heart ${flag ? "pumping" : ""}`}>
                <span className="counter-text">{count}</span>
            </div>
            <button className="toggle-button" onClick={() => setFlag(!flag)}>
                {flag ? 'Stop' : 'Start'}
            </button>
        </div>
    );
}

export default Counter;
