import { useState } from "react";


const Counter = () => {
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
        const newCount=count + 1;
        setCount(newCount);
    }
    const handleRemove=()=>{
        const newCount= count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border:'2px solid blue',borderRadius:'5px', padding:'5px'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Counter;