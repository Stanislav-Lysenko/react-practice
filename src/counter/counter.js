import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Counter2 from '../counter2/counter2';

export default class Counter extends Component {

  state = {
    counter: 0
  };

  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
  // render() {
  //   return (
  //     <React.Fragment>
  //       <h2>Counter {this.state.counter}</h2>
  //       <button onClick={this.addCounter}>+</button>
  //       <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
  //     </React.Fragment>
  //     )
  //   }
  render() {
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <Counter2 />
        <button onClick={this.addCounter}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </Auxiliary>
    )
  }
}