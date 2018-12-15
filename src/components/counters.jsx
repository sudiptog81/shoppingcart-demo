import React, { Component } from "react";
import Counter from "./counter";
import Button from "@material-ui/core/Button";

class Counters extends Component {
  render() {
    console.log("Counters rendered");

    const { counters, onReset, onDelete, onIncrement, onAdd } = this.props;

    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
        <Button
          style={{ margin: 20 }}
          variant="contained"
          color="primary"
          size="small"
          onClick={onAdd}
        >
          Add Item
        </Button>
        <Button
          style={{ margin: 20 }}
          variant="contained"
          color="secondary"
          size="small"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default Counters;
