import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = ()=>{
    setCount(count + 1);   
  }

  const handleDecrement =() => {
    if (count>0){
      setCount(count -1);
    }
    

  }
  // const [toggle, setToggle]= useState(false);
  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

 console.log('render', count)

  return (
    <div className="App">
      <h1>El valor de count es {count}</h1>      
        <button onClick={handleIncrement}>
          Increment
        </button>  
        {
          count > 0 
          ? (
            <button onClick={handleDecrement}>
              Decrement
            </button> 
            )
          : null
        }
      

      {/* <h2>Toogle is {toggle.toString()}</h2>
      <button onClick={handleToggle}>
      Click me!
      </button> */}

    </div>
  );
}

export default App;
