import React, {useState} from "react";
function Counter() {

    console.log("counter example");
    const userObj =  {
        firstname: 'lakshmi',
        lastname: 'prasanna',
        age: 29
    }
    
    const [counter, setCounter ] = useState(0);
    const [data, setData] = useState(userObj);

    const increment = () => {
        setCounter ( ( prevCount ) => { return prevCount +1 });
        setCounter ( ( prevCount ) => { return prevCount +1 });
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const changeLastName = () =>{
        setData({
            ...data, 
            lastname: 'perumalla'
        })
    };
    return  (
    <div>
        <h1> Counter: </h1>
        <button onClick= {decrement}> decrement</button>
        <span>{counter}</span>
        <button onClick = {increment}> increment </button>

        <h1> firstname : {data.firstname}  lastName : {data.lastname} age: {data.age}</h1>
        <button onClick= {changeLastName} >changeLastName </button> 
    </div>
    );
}

export default Counter;