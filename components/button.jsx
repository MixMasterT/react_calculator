import React, { Component } from 'react';

export const Button = ({text, handleClick}) => {
  const curriedHandler = e => {
    return handleClick(text);
  }
  return (
    <div className='calc-button' onClick={curriedHandler}>{text}</div>
  );
}
//
// export const FuncButton = ({text, func, string, funcHandler}) => {
//   return (
//     <div className='calc-button' >{text}</div>
//   );
// }
export default Button;
