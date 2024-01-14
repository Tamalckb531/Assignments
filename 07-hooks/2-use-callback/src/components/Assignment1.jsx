import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        setCount(function(currentCount){
            return currentCount+1;
        });
    }, [])

    const handleDecrement = useCallback(() => {
        setCount(function(currentCount){
            return currentCount-1;
        });
    }, [])

    //* The way we wrote the setCount is because it don't depend on count and hence we don't need to give any dependencies to useCallback hooks. If we give the count as an dependency and use the traditional setCount method then there will be no significance of making the function with useCallback. count is the only state here that is responsible for rerendering and we don't want the buttons to redender each time.
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
