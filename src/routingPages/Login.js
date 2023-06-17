import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

function Login(){

    const [name, setName] = useState("");
   const {login} = useAuth();
   console.log(useAuth());
   
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="enter username"
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                login(name);
                navigate("/", { replace: true });
                }}
            >
        login
      </button>
        </div>
    )
}

export default Login;