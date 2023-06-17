import { useState } from "react";
import React from "react";

const Form  = () => {

    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");

    const changeEmail= (e) =>{
        setEmail(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let userObj = {email: email};
        console.log(userObj)
    }
    const handleInputField = (e, name) => {
        if(name="password1"){
            setPassword(e.target.value);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">   
                <input type="text" name="email" id="email" placeholder="enter your  email" 
                value={email} onChange={changeEmail}/>
            </div>
            <div className="form-container"> 
                <input type="text" id="password" name="password" placeholder="enter your password" 
                onChange={(e) => handleInputField(e, "password1")} />
            </div>
                <button type="submit">Submit </button>
           
        </form>
    )
}
export default Form;