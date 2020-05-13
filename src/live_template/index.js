import React, { useState } from 'react';

function Example(props) {
    // Declare a new state variable, which we'll call "count"
    const [hour, setHour] = useState(props.hour);
    const [minute, setMinute] = useState(props.minute);
    const [second, setSecond] = useState(props.second);


    return (
        <div>
            <p>Hour: {hour}</p>
            <button onClick={() => setHour(hour + 1)}>
                Up
            </button>

            <p>Minute: {minute}</p>
            <button onClick={() => setMinute(minute + 1)}>
                Up
            </button>

            <p>Second: {second}</p>
            <button onClick={() => setSecond(second + 1)}>
                Up
            </button>

        </div>
    );
}
