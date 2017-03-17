import React, { Component } from 'react';
import Button from './button';

class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numHandler = this.props.numClickHandler;
    return (
      <div className='calc-keyboard'>
        <div className='row'>
          <Button text="7" handleClick={numHandler} />
          <Button text="8" handleClick={numHandler} />
          <Button text="9" handleClick={numHandler} />
        </div>
        <div className='row'>
          <Button text="4" handleClick={numHandler} />
          <Button text="5" handleClick={numHandler} />
          <Button text="6" handleClick={numHandler} />
        </div>
        <div className='row'>
          <Button text="1" handleClick={numHandler} />
          <Button text="2" handleClick={numHandler} />
          <Button text="3" handleClick={numHandler} />
        </div>
        <div className='row'>
          <Button text="=" />
          <Button text="0" handleClick={numHandler}/>
          <Button text="." handleClick={numHandler}/>
        </div>
      </div>
    )
  }
}

export default Keyboard;
