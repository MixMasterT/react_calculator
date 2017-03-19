import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Screen from './components/screen';

import styles from './app.scss';

import RpnCalculator from './rpn/rpn_calculator';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
                   showString: " ",
                   baseString: "",
                   temp: ""
                 }

    this.clickHandler = this.clickHandler.bind(this);
    this.calculator = new RpnCalculator();
  }

  clickHandler(sym) {
    if (sym === 'AC') { // reset calculator and string
      this.calculator.eval();
      this.setState({ showString: " ", baseString: "", temp: "" });

    } else if (sym === 'C') { // just get rid of temp
      this.setState({ temp: "" , showString: this.state.baseString })

    } else if (sym === '=') { // evaluate calculator and update strings
      const value = this.state.temp === "" ? '0' : this.state.temp;
      this.calculator.insert(value);
      const total = this.calculator.eval().toString()
      this.setState({ showString: total, baseString: total, temp: "" });
      this.calculator.insert(total);

    } else { // it's either an operator or a number
      const binOps = Object.keys(this.calculator.binaryOps);
      const unOps = Object.keys(this.calculator.unaryOps);

      if (binOps.indexOf(sym) > -1 || unOps.indexOf(sym)> -1) {
        // handle operator input

        // first add temp value into calculator if it has value
        if (this.state.temp !== "") {
          this.calculator.insert(this.state.temp);
        }

        if (binOps.indexOf(sym) > -1) { //handle binary operator
          this.calculator.insert(sym);
          const newStr = this.state.baseString + ` ${this.state.temp} ${sym} `;
          this.setState({ showString: newStr, baseString: newStr, temp: "" })

        } else { //handle unary operator
          this.calculator.insert(sym);

          // get the result, but also leave it in the stack for subsequent calculations
          const result = this.calculator.valStack[0];
          this.setState({ temp: "", showString: result, baseString: result });

        }
      } else { // handle number input
        this.setState({ temp: this.state.temp + sym,
                        showString: this.state.showString + sym });
      }
    }
  }

  render() {
    return (
      <div className='calculator'>
        <Screen string={this.state.showString} />
        <Keyboard
          clickHandler={this.clickHandler}
        />

      </div>
    );
  }
}

export default Calculator;
