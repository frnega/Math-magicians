/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };

  return (
    <div>
      <p className="valueparagraph">Let's do some math!</p>
      <p className="result">
        <span>{state.total}</span>
        <span>{state.operation}</span>
        <span>{state.next}</span>
      </p>
      <div className="calculator-app">
        <button type="button" className="greyButtons" name="AC" onClick={handleEvent}>AC</button>
        <button type="button" className="greyButtons" name="+/-" onClick={handleEvent}>+/-</button>
        <button type="button" className="greyButtons" name="%" onClick={handleEvent}>% </button>
        <button type="button" className="orangeButtons" name="÷" onClick={handleEvent}>÷</button>
        <button type="button" className="greyButtons" name="7" onClick={handleEvent}>7</button>
        <button type="button" className="greyButtons" name="8" onClick={handleEvent}>8</button>
        <button type="button" className="greyButtons" name="9" onClick={handleEvent}>9</button>
        <button type="button" className="orangeButtons" name="x" onClick={handleEvent}>x</button>
        <button type="button" className="greyButtons" name="4" onClick={handleEvent}>4</button>
        <button type="button" className="greyButtons" name="5" onClick={handleEvent}>5</button>
        <button type="button" className="greyButtons" name="6" onClick={handleEvent}>6</button>
        <button type="button" className="orangeButtons" name="-" onClick={handleEvent}>-</button>
        <button type="button" className="greyButtons" name="1" onClick={handleEvent}>1</button>
        <button type="button" className="greyButtons" name="2" onClick={handleEvent}>2</button>
        <button type="button" className="greyButtons" name="3" onClick={handleEvent}>3</button>
        <button type="button" className="orangeButtons" name="+" onClick={handleEvent}>+</button>
        <button type="button" className="greyButton-0" name="0" onClick={handleEvent}>0</button>
        <button type="button" className="greyButtons" name="." onClick={handleEvent}>.</button>
        <button type="button" className="orangeButtons" name="=" onClick={handleEvent}>=</button>
      </div>
    </div>

  );
};

export default Calculator;
