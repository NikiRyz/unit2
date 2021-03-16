import React, {Component} from 'react';
import WeatherDisplay from './WeatherDisplay'

const PLACES = ["London", "Moscow", "Kiev", "Minsk"]

class WeatherContainer extends Component{

    state={
        city:0
    }

    render(){
        const city = this.state.city;
        return(
            <div className="App">
                {PLACES.map((city, index)=>(
                        <button
                        key={index}
                        onClick={()=>{this.setState({city:index})}}
                        >
                            {city}
                        </button>
                  ))  }
                
                <WeatherDisplay key={city} name ={PLACES[city]}/>
            </div>
        )
                }
}

export default WeatherContainer;