import React from "react";
import userData from "./UserData";
import { Link } from "react-router-dom";

const Users=()=>{
    return (
        <div>
            {
                userData.map((eachUser) =>  {
                    const {id, email, name} = eachUser ;
                    return (
                        <Link to=  {`/users/${id}`} key={id}>
                            <article >
                                <h3>{name}</h3>
                                <h3>{email}</h3>
                            </article>
                        </Link>
                    )
                })
            }
        </div>
    )

}

export default Users