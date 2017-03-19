import React, { Component } from 'react';
import RpnCalculator from '../rpn/rpn_calculator';

const c = new RpnCalculator();
const operators = Object.keys(c.binaryOps) + Object.keys(c.unaryOps) +
                  ['AC', 'C', '='];

export const Button = ({text, handleClick}) => {
  const curriedHandler = e => {
    return handleClick(text);
  }
  const btnClass = operators.indexOf(text) > -1 ? 'op' : 'num-button';
  return (
    <div
      className={btnClass}
      onClick={curriedHandler}>{text}
    </div>
  );
}

export default Button;
