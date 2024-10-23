import React, { Component } from "react";
import Counter from "../components/Counter";
import withLoader from "../hoc/withLoader";

const CounterWithLoader = withLoader("Loading")(Counter);

class CounterContainer extends Component {
  state = { clicksNumber: 0, isLoaded: false };

  componentDidMount() {
    this.id = setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 3000);
  }
  componentWillUnmount() {
    clearTimeout(this.id);
  }

  increment = () => {
    const { clicksNumber } = this.state;
    this.setState({
      clicksNumber: clicksNumber + 1,
    });
  };
  render() {
    return (
      <CounterWithLoader
        isLoaded={this.state.isLoaded}
        onIncrement={this.increment}
        clicksNumber={this.state.clicksNumber}
      />
    );
  }
}

export default CounterContainer;
