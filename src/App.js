import React from 'react';

import DayWeather from './components/DayWeather/DayWeather'
import FiveDayWeather from './components/FiveDayWeather/FiveDayWeather'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
// const openWeatherApiKey = '174b98cc20c17624f93c9b67fc010d1f';
const weatherApiLinkDay = `https://api.openweathermap.org/data/2.5/weather?q=${'Kharkiv,ua'}&lang=ru&units=metric&mode=json&appid=${openWeatherApiKey}`;
const weatherApiLinkFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${'Kharkiv,ua'}&lang=ru&units=metric&mode=json&appid=${openWeatherApiKey}`;

class App extends React.Component {

  state = {
    city: undefined,
    temp: undefined,
    summary: undefined,
    apparent: undefined,
    wind: undefined,
    humidity: undefined,
    day: undefined,
    days: []
  }

  componentDidMount = async () => {
    const responseDay= await fetch(weatherApiLinkDay);
    const dataDay = await responseDay.json();
    console.log(dataDay);

    this.setState({
      city: dataDay.name,
      temp: dataDay.main.temp,
      icon: dataDay.weather[0].icon,
      summary: dataDay.weather[0].description,
      apparent: dataDay.main.feels_like,
      wind: dataDay.wind.speed,
      humidity: dataDay.main.humidity,
      day: dataDay.dt,
    });

    const responseFiveDay= await fetch(weatherApiLinkFiveDay);
    const dataFiveDay = await responseFiveDay.json();
    const daytimeTemperatures = dataFiveDay.list.filter(reading => reading.dt_txt.includes("12:00:00"));
    console.log(daytimeTemperatures);

    this.setState({
      days: daytimeTemperatures
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <DayWeather 
          city={this.state.city}
          temp={this.state.temp}
          icon={this.state.icon}
          summary={this.state.summary}
          apparent={this.state.apparent}
          wind={this.state.wind}
          humidity={this.state.humidity}
          day={this.state.day}
        />
        <FiveDayWeather 
          days={this.state.days}
        />
      </div>
    );
  }
}

export default App;
