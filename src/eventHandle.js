import React from "react";
import ta from './data.js';
console.log(ta);


const App = () =>{
  const clickHandle = () =>{
    console.log("clicked");
  }

  const clickHandle1 = (e) =>{
    console.log("clicked", e);
  }


  const clickHandle2 = (e, firstName) =>{
    console.log("clicked", firstName);
  }

  
  return (
    <section>
      <button onClick= {clickHandle}>Click</button>
      <button onClick= {clickHandle1}>Click</button>
     <button onClick= {(e)=> clickHandle2(e, "srikanth")}>Click1</button>
    
    </section>
  );
}




export default App;
