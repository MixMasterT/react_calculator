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
    if (sym === 'AC') {
      this.calculator.eval();
      this.setState({ showString: " ", baseString: "", temp: "" });

    } else if (sym === '=') {
      this.calculator.insert(this.state.temp);
      const total = this.calculator.eval().toString()
      this.setState({ showString: total, baseString: total, temp: "" });
      this.calculator.insert(total)

    } else {
      if (this.calculator.operators.indexOf(sym) > -1) {
        if (this.state.temp !== "") {
          this.calculator.insert(this.state.temp);
        }
        this.calculator.insert(sym);
        const newStr = this.state.baseString + ` ${this.state.temp} ${sym} `;
        this.setState({ showString: newStr, baseString: newStr, temp: "" })
      } else {
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
