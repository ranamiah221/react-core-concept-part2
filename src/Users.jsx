import { useEffect, useState } from "react";


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
        </div>
    );
};

export default Users;