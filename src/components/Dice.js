import React from 'react';
import './Dice.css';

import dice1 from '../assets/dice-1.svg';
import dice2 from '../assets/dice-2.svg';
import dice3 from '../assets/dice-3.svg';
import dice4 from '../assets/dice-4.svg';
import dice5 from '../assets/dice-5.svg';
import dice6 from '../assets/dice-6.svg';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({ value, rolling }) => {
  return (
    <img 
      src={diceImages[value - 1]} 
      alt={`Dice ${value}`}
      className={`dice ${rolling ? 'rolling' : ''}`}
    />
  );
};

export default Dice;