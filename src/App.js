import React, { useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      setDiceValues([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ]);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="app">
      <h1>Игральные кости</h1>
      
      <div className="dice-wrapper">
        <div className="dice-container">
          <Dice value={diceValues[0]} rolling={isRolling} />
          <Dice value={diceValues[1]} rolling={isRolling} />
        </div>
      </div>
      
      <button 
        onClick={rollDice} 
        className="roll-button"
        disabled={isRolling}
      >
        {isRolling ? 'Бросаем...' : 'Бросить кости'}
      </button>
    </div>
  );
}

export default App;