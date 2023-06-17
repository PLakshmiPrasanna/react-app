import React, {useState} from "react";

/*function App () {
   let counter = 0; 
  return (
          <>
            <h1> Counter: {counter}</h1>
            <button onClick= {updateCounter}> Change </button>
          </>
    )

    function updateCounter(){
      ++counter;
      console.log(counter);
    }
}
*/

function App () {
   let [counter, updateCounter] = useState(0)  // give initial value of the data to be shown i.e., the initial value of counter (=0) as input to useState.
   return (
         <>
           <h1> Counter: {counter}</h1>
           <button onClick= { ()=> {updateCounter(++counter)}}> Change </button>
         </>
   )

}
export default App;