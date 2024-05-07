import React from "react";

export class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = { bool: false };
  }

  onClick = () => {
    this.setState({ bool: true });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.lastName === "Alex") {
      return false;
    }
    console.log({ nextProps, nextState });
  };

  render() {
    return (
      <h2>
        From class component {this.state.bool.toString()} {this.props.lastName}
        <button onClick={this.onClick}>btn</button>
      </h2>
    );
  }
}
