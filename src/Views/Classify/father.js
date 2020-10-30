import React, { Component } from "react";
import Classify from "./index";
class Father extends Component {
  render() {
    return (
      <div>
        <Classify items={[undefined, "", "bbb", "ddd"]}></Classify>
      </div>
    );
  }
}

export default Father;
