import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Screen from './components/screen';

import styles from './app.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
                   string: " "
                 }

    this.numClickHandler = this.numClickHandler.bind(this);
    // this.funcClickHandler = this.funcClickHandler.bind(this);
    this.calculator = new RpnCalculator();
  }

  clickHandler(sym) {
    if (sym === 'AC') {
      this.calculator.eval();
      this.setState({ string: ' ' });
    } else if (sym === '=') {
      this.setState({ string: this.calculator.eval()});
      this.calculator.insert(this.state.string)
    } else {
      this.calculator.insert(sym);
      this.setState({ string: this.state.string + num })
    }
  }

  // funcClickHandler(func) {
  //   const
  //   // return func => {
  //   //   // gotta figure this one out... const result =
  //   // }
  // }
  render() {
    return (
      <div className='calculator'>
        <Screen string={this.state.string} />
        <Keyboard
          clickHandler={this.clickHandler}
        />

      </div>
    );
  }
}

export default Calculator;
