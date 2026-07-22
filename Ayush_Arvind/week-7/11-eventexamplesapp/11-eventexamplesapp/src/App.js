import { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function App() {
    const [count, setCount] = useState(0);

    const sayHello = () => {
        alert("Hello! Welcome to React events.");
    };

    const increment = () => {
        setCount((value) => value + 1);
        sayHello();
    };

    const decrement = () => {
        setCount((value) => value - 1);
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const handlePress = (event) => {
        alert("I was clicked");
        console.log(event.type);
    };

    return (
        <div>
            <h1>Event Examples</h1>
            <h2>Counter: {count}</h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <button
                onClick={() => {
                    sayWelcome("Welcome");
                }}
            >
                Say Welcome
            </button>

            <button onClick={handlePress}>OnPress</button>

            <CurrencyConverter />
        </div>
    );
}

export default App;
