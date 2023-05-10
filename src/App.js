import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  //state vars
  const [pokemon, setPokemon] = useState([])
  //vanilla js fetch
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((serverResponse) => {
        return serverResponse.json()
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)
        setPokemon(jsonResponse.results)
      })
      .catch((err) => console.log("got an error", err))
  }
  return (
    <div className="App">
      <h1>POKEMON API</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <hr />
      {/* {JSON.stringify(pokemon)} */}
      <div>
        {
          pokemon.map( (poke, idx) => {
            return (
              <li key={idx}>{poke.name}</li>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
