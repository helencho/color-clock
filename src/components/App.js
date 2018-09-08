import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/color_actions';

class App extends Component {
  componentDidMount() {
    this.interval();
  };

  componentWillUnmount() {
    clearInterval(this.interval());
  };

  /**
   * Tick every second 
   */
  interval = () => {
    setInterval(() => {
      this.changeColor();
    }, 1000)
  };

  /**
   * Increments or decrements one of the following:
   * Red, green, or blue 
   */
  changeColor = () => {
    const { red, green, blue } = this.props;
    if (red !== 10 && green === 250 && blue === 250) {
      this.props.decrement('red');
    } else if (red === 10 && green === 250 && blue !== 10) {
      this.props.decrement('blue');
    } else if (red === 10 && green !== 10 && blue === 10) {
      this.props.decrement('green');
    } else if (red !== 250 && green === 10 && blue === 10) {
      this.props.increment('red');
    } else if (red === 250 && green === 10 && blue !== 250) {
      this.props.increment('blue');
    } else if (red !== 10 && green === 10 && blue === 250) {
      this.props.decrement('red');
    } else if (red === 10 && green !== 250 & blue === 250) {
      this.props.increment('green');
    } else {
      console.log('There is an error.');
    }
  };

  render() {
    const { red, green, blue } = this.props;

    const style = {
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    console.log(this.props);

    return (
      <div style={style}>
        <h1>What color is it right now?</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    red: state.colors.red,
    green: state.colors.green,
    blue: state.colors.blue
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (color) => dispatch(increment(color)),
    decrement: (color) => dispatch(decrement(color))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
