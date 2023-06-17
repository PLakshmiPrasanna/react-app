import React from "react";

let user = {
    name: 'emma',
    age: 23
}

export  const UserContext = React.createContext();

export const UserContextProvider = ({children}) =>{
    return (
        <UserContext.Provider value={"abc"}>{children}</UserContext.Provider>
    )
    
}