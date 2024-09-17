import { useEffect, useState } from "react";
import User from "./User";


const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
          
    },[])
    return (
        <div style={{
            border:'2px solid yellow',
            borderRadius:'15px',
            margin:'10px'
        }}>
            <h2>User: {users.length}</h2>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;