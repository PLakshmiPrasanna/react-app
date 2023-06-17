import React from "react";
import EnhancedCounter from "./EnhancedCounter";

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>
        {props.name} Counter Clicked {props.count} times
      </button>
    </div>
  );
};

export default EnhancedCounter(ClickCounter, 10);