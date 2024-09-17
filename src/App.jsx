import './App.css'
import Counter from './Counter';

function App() {
  // event handler using a function
  function handleClickMe(){
   alert("Click Click me");
  }
  // use arrow function..
  const handleClick2=()=>{
    alert("click 2")
  }
  // event handler with pera meter..
  const addToFive=(num)=>{
    alert(num+5);
  }

  return (
    <>
      <h2>React core concept part 2</h2>
      <Counter></Counter>
      <button onClick={handleClickMe}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{addToFive(1)}}>Third</button>
    </>
  )
}

export default App
