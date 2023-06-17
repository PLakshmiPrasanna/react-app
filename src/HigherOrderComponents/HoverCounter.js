import React from "react";
import EnhancedCounter from "./EnhancedCounter";

const ClickCounter = (props) => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>

       <h3 onMouseEnter={props.incrementCount}>Hovered {props.count} times</h3>
    </div>
  );
};

export default EnhancedCounter(ClickCounter, 5);