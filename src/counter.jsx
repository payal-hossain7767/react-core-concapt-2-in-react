import { useState } from 'react'
import './App.css'
export default function Counter() {
    const [count, setCount] = useState(0)

    const handelClickMeAdd = () => {
       const newCount=count + 1;
       setCount(newCount)
    }

    return (
        <div className="counter">
            <h3>count:{count}</h3>
            <button onClick={handelClickMeAdd}>click me</button>
        </div>
    )
}