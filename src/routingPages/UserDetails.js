import React from "react";
import {useParams} from "react-router-dom";
import userData from "./UserData";

const UserDetails =() => {

    const {userId} = useParams();
    console.log(userId);

    const userDetailsData = userData.find((eachUser) => 
        eachUser.id == userId
    )

    return (
        <div>
            <h1>{userDetailsData.name}</h1>
            <h3>{userDetailsData.email}</h3>
            <p>{userDetailsData.phone}</p>
        </div>
    )
}

export default UserDetails