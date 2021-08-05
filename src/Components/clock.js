import React, { useState } from 'react';

export function Clock() {
    const now = new Date().toLocaleTimeString();
    let [time, setTime] = useState(now);


    let updateTime = () => {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(updateTime, 1000);


    return (
        <div className="time">
            <h1>{time}</h1>
        </div>
    );
}