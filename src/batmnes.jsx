import { useState } from 'react'
import './App.css'
export default function Betmans() {
    const [player, setPlayer] = useState(0)
    const [sixs, setSixs] = useState(0)
    const handelPlayer = () => {
        const newPlayer = player + 1
        setPlayer(newPlayer);
    }
    const handelPlayer2 = () => {
        const newPlayer = player + 4
        setPlayer(newPlayer);
    }
    const handelPlayer3 = () => {
        const newPlayer = player + 6
        const ubdateSixs = sixs + 1
       
        setSixs(ubdateSixs);
        setPlayer(newPlayer);
    }
    return (
        <div className='counter'>
            <p>six-{sixs}</p>
            {
                player > 50 && <p>your score is 50</p>
            }
            <h3>player: bangladesh</h3>
            <h2>score: {player}</h2>
            <button className='btn' onClick={handelPlayer}>run</button>
            <button className='btn' onClick={handelPlayer2}>fore</button>
            <button className='btn' onClick={handelPlayer3}>six</button>
        </div>
    )
}