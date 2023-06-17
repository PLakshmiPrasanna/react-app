import React , {useState, useEffect} from "react";

const url='https://jsonplaceholder.typicode.com/users';



function DataFetch(){
    const [userData, setUserData] = useState([]);

    useEffect( ()=> {
        fetchUsersData(url);
    }, [])
    const fetchUsersData = async (apiUrl) => {
           const response  =  await fetch(apiUrl);
           const data = await response.json();
           setUserData(data);
    }

    return (
        <div>
            <h1>data fetching </h1>
            <ul> 
                {userData.map( (eachUser) => {
                        <p>dffdd</p>
                        const {name, id, email } = eachUser;
                        return (<li key={id}> 
                            <div>{name}</div>
                            <div> { email }</div>
                        </li>
                        )
                    })
                }
                </ul>
        </div>
        
    )
}

export default DataFetch