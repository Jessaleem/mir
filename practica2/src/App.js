import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Countries from './components/Countries'

function App() {

  // const profile ={
  //   userName: 'Lucía',
  //   country: 'PERU'
  // }

  // countries un solo objeto
  // const country = {
  //   name: 'USA',
  //   capital: 'Whashington',
  //   population: 32000000,
  //   flag: '🏳️‍🌈'
  // }

  const countries = [
    {
    name: 'USA',
    capital: 'Whashington',
    population: 32000000,
    flag: '🏳️‍🌈'
  },
  {
    name: 'Canada',
    capital: 'Otawa',
    population: 99846000,
    flag: '🍁'
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    population: 126230000,
    flag: '🛺'
  },
  {
    name: 'Rusia',
    capital: 'Moscow',
    population: 146500000,
    flag: '🍾'
  }
  ]


  return (
    <div className="App">

      {/* Definiendo las props en return */}
      {/* <Hello userName="jessica" country="COLOMBIA"/>
      <Hello userName="Lucía" country="PERU"/>
      <Hello userName="Adela" country="ARGENTINA" />
      <Hello userName="Juliette" country="CHILE"/> */}
    

      {/* para solo Objeto */}
      {/* <Hello profile ={profile} /> */}

      {/* para combinar con objeto */}
      {/* <Hello userName="jessica" country="COLOMBIA"/>
      <Hello userName={profile.userName} country={profile.country}/>
      <Hello userName="Adela" country="ARGENTINA" />
      <Hello userName="Juliette" country="CHILE"/> */}

      {/* countries un solo objeto opcn 1
      <Countries {...country} /> */}

      {/* countries un solo objeto opcn 2 */}
      {/* <Countries country={country} />   */}

      {/* countries arreglo con varios objetos */}

      {
        countries.map(country =>(
          <Countries key={country.name} country={country}/>
        ))
      }


      
    </div>
  );
}

export default App;
