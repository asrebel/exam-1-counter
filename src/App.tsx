import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {

    const maxCounterValue = 5
    const minCounterValue = 0

    const [count, setCount] = useState(minCounterValue)

    const incCount = () => {
        const nextCount = count + 1
        if (count < maxCounterValue) {
            setCount(nextCount)
        }
    }

    const resetCount = () => {
        setCount(minCounterValue)
    }


    return (
        <div className="App">
            <Counter count={count}
                     incCount={incCount}
                     resetCount={resetCount}
                     maxCounterValue={maxCounterValue}
                     minCounterValue={minCounterValue}
            />
        </div>
    );
}


export default App;
