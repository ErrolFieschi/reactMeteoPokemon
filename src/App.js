
import React, { useEffect, useState } from 'react';
import PokemonDisplay from "./components/PokemonDisplay";
import PokemonList from "./components/PokemonList";
import PokemonTypeList from "./components/PokemonTypeList";
import Meteo from "./components/Meteo";
import style from "./App.css";


function App() {
    let [selectedType, setSelectedType] = useState("normal");
    let [selectedPokemonUrl, setSelectedPokemonUrl] =  useState(null);

    return (
 <div className="container" >
    <div className="row ">
        <div className="col-sm-6 display-pokemon-css">
            <div className="card-body">
                <div className="App">
                    <div className="App-header style-poke">
                        <PokemonDisplay pokemonUrl={selectedPokemonUrl} />
                        <PokemonTypeList setType={setSelectedType} />
                        <PokemonList type={selectedType} setPokemonUrl={setSelectedPokemonUrl} />
                     </div>
                </div>
            </div>
            
        </div> 
        <Meteo/>
        </div>
        </div>
   
        );
    }
export default App;
