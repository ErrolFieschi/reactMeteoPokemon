import React, {Component} from 'react'

export class Form extends Component{

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

    render(){
        return(
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
        )
    }
}

export default Form;
