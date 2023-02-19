import React from 'react';
import {useState} from 'react';
import './Dice.css'

function Dice() {
    const [roll, setRoll] = useState(1);

    function rollDice() {
        setRoll(Math.floor(Math.random() * 6) + 1);
    }
  return (
    <div className='dice-container'>
      <div className={`dice dice-${roll}`}>
        <span className='dot'></span>
         { roll > 1 ? <span className="dot"></span> : null }
        { roll > 3 ? <span className="dot"></span> : null }
        { roll === 6 ? <span className="dot"></span> : null }
        { roll % 2 !== 0 ? <span className="dot"></span> : null }
        { roll === 6 ? <span className="dot"></span> : null }
        { roll > 3 ? <span className="dot"></span> : null }
        { roll > 1 ? <span className="dot"></span> : null }
      </div>
    <div className='dice-info'>
      <h1>Dice</h1>
      <p>Current roll: {roll}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
    </div>
  );
}

export default Dice;
