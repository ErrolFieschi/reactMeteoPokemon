import React, {Component} from 'react';


class ApiTest extends Component {
    state = {
        loading: true
    };
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        }
    }
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    };

    handleSubmit = event => {
        alert(`${this.state.city}`)
        event.preventDefault();
    };

     async componentDidMount() {
        const api_key = "54d1aec0ebc8a059046c1d10fe7f63bf";
        const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=paris${this.state.city}`;
        const response = await fetch(url);
        const data =  await response.json();
        this.setState({info: data.location, loading: false});
        this.setState({geo: data.current, loading: false});

    }

    onChangeLinkName(newName){
         this.setState({
             homeLink: newName
         })
    }

    render() {
        return (

            <div>
                {this.state.loading || !this.state.info || !this.state.geo ? (
                    <div>Loading</div>
                ):(
                    <div className="row first_block_weather">
                        <div className="col-sm-6">
                            <div className="card-body">
                                <div>{this.state.info.name}</div>
                                <div>{this.state.info.country}</div>
                                <div>{this.state.geo.temperature} °</div>
                                <img src={this.state.geo.weather_icons}/>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Username</label>
                                <input type='text'
                                       value={this.state.city}
                                       onChange={this.handleCityChange}
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                )
                }
            </div>
        );
    }
}

export default ApiTest
