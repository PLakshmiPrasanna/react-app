import React from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {

    const navigate = useNavigate();

    const navigateToSuccess = () =>{
        navigate('/success');
    }
    return (
        <div> 
            <h1>Home </h1>
            <button onClick= {navigateToSuccess} > Submit</button>
        </div>
        
    )
}

export default Home;