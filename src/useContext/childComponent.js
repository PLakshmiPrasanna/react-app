import React, { useContext } from "react";
import { UserContext } from "../context";


const Child = () =>{


const data = useContext(UserContext);
console.log(data);

    return (
        <div>
            <h1>Child</h1>
        </div>
    )
}

export default Child