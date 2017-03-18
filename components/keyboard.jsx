import React, { Component } from 'react';
import Button from './button';

class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clickHandler = this.props.clickHandler;
    return (
      <div className='calc-keyboard'>
        <div className='row'>
          <Button text="7" handleClick={clickHandler} />
          <Button text="8" handleClick={clickHandler} />
          <Button text="9" handleClick={clickHandler} />
        </div>
        <div className='row'>
          <Button text="4" handleClick={clickHandler} />
          <Button text="5" handleClick={clickHandler} />
          <Button text="6" handleClick={clickHandler} />
        </div>
        <div className='row'>
          <Button text="1" handleClick={clickHandler} />
          <Button text="2" handleClick={clickHandler} />
          <Button text="3" handleClick={clickHandler} />
        </div>
        <div className='row'>
          <Button text="=" handleClick={clickHandler}/>
          <Button text="0" handleClick={clickHandler}/>
          <Button text="." handleClick={clickHandler}/>
        </div>
      </div>
    )
  }
}

export default Keyboard;
