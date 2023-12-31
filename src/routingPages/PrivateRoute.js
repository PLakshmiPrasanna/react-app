import React from "react";

import {useAuth} from "./Auth";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    //console.log(children);

    const {user } = useAuth();
    console.log(user);

    if(!user){
        return <Navigate to = "/login"/>
    }

    return children;
}

export default PrivateRoute;