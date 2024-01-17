import { useState } from "react";
import "./counter.css";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount((count) => count + 1);
    const decrement = () => {
        if (count === 0) return;
        return setCount((count) => count - 1);
    };

    return (
        <div className="counter-wrapper">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;