import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 1 }
    ]
  };

  constructor() {
    super();
    console.log("app constructor");
  }

  componentDidMount() {
    // AJAX call
    console.log("app mounted");
  }

  handleIncrement = id => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(id);
    counters[index] = { ...id };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () => {
    this.setState({
      counters: [
        ...this.state.counters,
        {
          id: this.state.counters.filter(c => c.id).length + 1,
          value: 0
        }
      ]
    });
  };

  render() {
    console.log("app rendered");

    return (
      <React.Fragment>
        <NavBar items={this.state.counters.filter(c => c.value > 0).length} />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onAdd={this.handleAdd}
        />
      </React.Fragment>
    );
  }
}

export default App;
