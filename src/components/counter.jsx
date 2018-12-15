import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
class Counter extends Component {
  componentDidUpdate() {
    console.log("Counter updated");
  }

  componentWillUnmount() {
    console.log("Counter unmounted");
  }

  render() {
    console.log("Counter rendered");

    return (
      <React.Fragment>
        <span style={{ margin: 20, fontFamily: "Roboto" }}>
          Product #{this.props.counter.id}
        </span>
        <Badge
          style={{ margin: 20 }}
          color={this.getBadgeClasses()}
          badgeContent={this.formatCount()}
        >
          <span />
        </Badge>
        <Button
          style={{ margin: 20 }}
          variant="contained"
          onClick={() => this.props.onIncrement(this.props.counter)}
          size="small"
        >
          Add to Cart
        </Button>
        <IconButton
          variant="contained"
          color="secondary"
          onClick={() => this.props.onDelete(this.props.counter.id)}
          size="small"
        >
          <DeleteIcon />
        </IconButton>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.props.counter.value === 0 ? "error" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 0 : value;
  }
}

export default Counter;
