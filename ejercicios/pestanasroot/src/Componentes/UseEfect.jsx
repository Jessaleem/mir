import {useEfect} from 'react'

function Greet({ name }) {
  
  const message = `Hello, ${name}!`;
  
  useEfect(() => {
    document.title = `Greetings to ${name}`; }, [name]); // Side-effect!

    
  return <div>{message}</div>;       // Calculates output

}

export default Greet;