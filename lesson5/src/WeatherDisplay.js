import React, { Component } from "react";

export default class WeatherDisplay extends Component {
  state = {
    weatherData: null,
  };
  componentDidMount() {
    const name = this.props.name;
    const URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&appid=0ecbdb7fcd16e4c89e6f495a7cc83684";
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ weatherData: json });
      });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Загружаю данные...</div>;
    console.log(weatherData)
    const weather = weatherData.weather[0]
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png"
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={iconUrl} alt={weatherData.description}/>
        <p>Скорость ветра: {weatherData.wind.speed}</p>
      </div>
      //   <p>
      //     {"Температура в Лондоне сейчас: " +
      //       Math.ceil(weatherData.main.temp - 273)}
      //   </p>
    );
  }
}
