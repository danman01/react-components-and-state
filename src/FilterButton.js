import React, { Component } from 'react';

class FilterButton extends Component {
  render() {

    const text = this.props.text

    return (
      <button onClick={this.props.onClick}>{text}</button>
    )
  }
}

export default FilterButton
