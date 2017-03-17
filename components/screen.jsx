import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='calc-screen'>
        <p className='calc-string'>{this.props.string}</p>
      </div>
    )
  }

}
