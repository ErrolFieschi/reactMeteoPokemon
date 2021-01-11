
import React, { useEffect, useState } from 'react';
import PokemonDisplay from "./components/PokemonDisplay";
import PokemonList from "./components/PokemonList";
import PokemonTypeList from "./components/PokemonTypeList";
import style from "./App.css";
const api = {
    key: "8bd866fb4cc3c1f94541e7e8b8d3145d",
}



function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    let [selectedType, setSelectedType] = useState("normal");
    let [selectedPokemonUrl, setSelectedPokemonUrl] =  useState(null);
    console.log(selectedPokemonUrl);


    function MyComponent() {

        useEffect(() => {
            const fetchData = async () => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&APPID=${api.key}`)
                    .then(res => res.json())
                    .then(result => {
                        setWeather(result);
                        console.log(result);
                    })
            }
            fetchData();
            return () => {
                <div></div>
            };
        }, []);
    }

MyComponent();



    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                    console.log(query);
                });
            console.log(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.key}`)

        }
    };

    return (
        <div className={'app'}>
            <div className="container" >
            <div className="row ">
                <div className="col-sm-6" >
                    <div className={ typeof weather.main != 'undefined' ? ( weather.weather[0].main + " card-body") : (" card-body")} style={{}}> {/*weather.weather[0].main +  <p>{ weather.weather[0].main }</p>*/}


                        <main>
                <div className="search-box">
                    <input
                        style={{marginBottom: 40 + 'px'}}
                        type="text"
                        className="search-bar form-control col-md-4 barre-css-style "
                        placeholder="Ville ..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (

                    <div className="block-meteo">
                        <div className="location-box">
                            <div style={{fontSize: 27 + 'px', textAlign: 'center'}} className="location">{weather.name}, {weather.sys.country}</div>
                        </div>
                        <div className="weather-box">
                            <div style={{fontSize: 27 + 'px', textAlign: 'center'}} className="temp">
                               {Math.round(weather.main.temp)}°C
                            </div>
                            <div style={{fontSize: 27 + 'px', textAlign: 'center'}} className="weather">Ciel : {weather.weather[0].main}</div>
                            <div style={{fontSize: 27 + 'px', textAlign: 'center'}} className="weather">Humidité : {weather.main.humidity}</div>
                            {weather.weather[0].main == 'Clear' ? (
                                <i style={{fontSize: 76 + 'px', textAlign: 'center', color: 'white'}} className="fa fa-sun-o" ></i>
                            ) : (
                                <i style={{fontSize: 76 + 'px', textAlign: 'center', color: 'white'}} className="fa fa-cloud" ></i>
                            )}


                        </div>
                    </div>

                ) : ('Aucune ville renseignée ')}
            </main>




                    </div>
                </div>
                <div className="col-sm-6 display-pokemon-css">
                    <div className="card-body">
                <div className="App">
                    <header className="App-header style-poke">
                        <PokemonDisplay className="PokemonDisplayCss" pokemonUrl={selectedPokemonUrl} />
                        <PokemonTypeList className="PokemonTypeListCss" setType={setSelectedType} />
                        <PokemonList className="PokemonListCss" type={selectedType} setPokemonUrl={setSelectedPokemonUrl} />
                    </header>
                </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default App;
