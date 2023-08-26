import React, { Component } from "react";
import { colors } from "./components/MainPage/Buttons";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1 style={{ color: "#d61a1a" }}> Oops! Refresh or click out to resume searching for quotes</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
