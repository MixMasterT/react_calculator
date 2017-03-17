import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Screen from './components/screen';

import styles from './app.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { string: " " }

    this.numClickHandler = this.numClickHandler.bind(this);
    this.funcClickHandler = this.funcClickHandler.bind(this);
  }

  numClickHandler(num) {
    this.setState({ string: this.state.string + num })
  }

  funcClickHandler(func) {
    return func => {
      // gotta figure this one out... const result =
    }
  }
  render() {
    return (
      <div className='calculator'>
        <Screen string={this.state.string} />
        <Keyboard
          numClickHandler={this.numClickHandler}
          funcClickHandler={this.funcClickHandler}
        />

      </div>
    );
  }
}

export default Calculator;
