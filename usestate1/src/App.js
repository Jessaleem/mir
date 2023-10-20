
import './App.css';

let email = '';
let password = '';

function App() {

  const handlerClick = () => {
   console.log('email y el password son correctos', email, password)
  }
  
  const handlerMouseOver = () => {
    console.log('Mouse Over')
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log ('Submit', e);
  }

  const handlerChange = (e) =>{
    
    const value = e.target.value
    console.log(value)
    // email = value
  }

  const handlerChangePassword = (e) =>{
    const value = e.target.value
    console.log(e)
    password = value
  }


  return (
    <div className="App">

      <input type="email" name="email" placeholder='Enter your email' onChange={handlerChange} />
      <input type='password' name ="password" onChange={handlerChangePassword} />
      <select name="food" id="food" onChange={handlerChange}>
        <option value="pizza">Pizza</option>
        <option value="sushi">Sushi</option>
        <option value="hamburguer">Hamburguesa</option>
      </select>
    {/* <form onSubmit={handlerSubmit}>
      <input type='text' onChange={() => {console.log ('cambie')}} name ="info"/>      
      <button type='submit'> Submit</button>
    </form> */}

   
      <button onClick={handlerClick} on MouseOver={handlerMouseOver}>
        Click me
      </button>

    </div>
  );
}

export default App;
