import React, { Component } from 'react';
import RpnCalculator from '../rpn/rpn_calculator';

const c = new RpnCalculator();
const operators = Object.keys(c.binaryOps) + Object.keys(c.unaryOps);
const calcOps = ['AC', 'C', '='];

export const Button = ({text, handleClick}) => {
  const curriedHandler = e => {
    return handleClick(text);
  }
  let btnClass = operators.indexOf(text) > -1 ? 'op' : 'num-button';
  if (calcOps.indexOf(text) > -1) { btnClass = 'calc-op'; }
  return (
    <div
      className={btnClass}
      onClick={curriedHandler}>{text}
    </div>
  );
}

export default Button;
