import React from 'react';
import styled from 'styled-components';
import Form from './Form';
// import device from '../responsive/Device';
import Weather from './Weather';
import Error from './Error';

const AppHeader = styled.h1`
  display: block;
  height: 64px;
  margin: 0;
  padding: 20px 0;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: skyblue;
  transition: 0.3s 1.4s;
  opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};
  ${({ secondary }) =>
    secondary &&
    `
    opacity: 1;
    height: auto;
    position: relative;
    padding: 20px 0;
    font-size: 30px;
    top: 20%;
    text-align: center;
    transition: .5s;
   
  `}
  ${({ showResult }) =>
    showResult &&
    `
    opacity: 0;
    visibility: hidden;
    top: 10%;
  `}
`

const AppWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto!important;
  border:solid 1px #000;
  height: calc(100vh - 64px);
  width: 60%;
  position: relative;
`;


class App extends React.Component {
  state = {
    value: '',
    weatherInfo: null,
    errorMessage: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSearchCity = e => {
    e.preventDefault();
    const { city } = this.state;
    const APIKEY = `4ceb0fa6fd7e05f54a5b2b782fc11334`

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([apiData1, apiData2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        
        const sunset = new Date(apiData1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(apiData1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
        const temperature = Math.round(apiData1.main.temp -273.15);
        const recommendation = recommendations.default[apiData1.weather[0].id].recommendation;
        const weather = {
            city: apiData1.name,
            country: apiData1.sys.country,
            date: apiData1.dt * 1000,
            description: apiData1.weather[0].description,
            main: apiData1.weather[0].main,
            temperature,
            recommendation,
            icon: apiData1.weather[0].icon,
            highestTemp: apiData1.main.temp_max,
            lowestTemp: apiData1.main.temp_min,
            sunrise,
            sunset,
            clouds: apiData1.clouds.all,
            humidity: apiData1.main.humidity,
            wind: apiData1.wind.speed,
            forecast: apiData2.list,
        };
        this.setState({
          weather,
          error: false,
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weather: null,
        });
      });
  };

  render() {
    const { value, weather, error } = this.state;
    return (
        <>
        <AppHeader showLabel={(weather || errorMessage) && true}>Weather app</AppHeader>
          <AppWrap>
            <h3>WEATHER APP</h3>
            <Form 
              searchValue={searchValue} 
              change={handleInputChange}
              submit={handleSearchCity}
            />
            {console.log(weather.data)}
            <Weather
              weather={weather}
              city={weather.city}
              country={weather.country}
              date={weather.date}
              description={weather.description}
              main={weather.main}
              temperature={weather.temperature}
              maxTemp={weather.maxTemp}
              minTemp={weather.minTemp}
              sunrise={weather.sunrise}
              sunset={weather.sunset}
              clouds={weather.clouds}
              humidity={weather.humidity}
              wind={weather.wind}
              forecast={weather.forecast}
              recommendation={weather.recommendation}
              icon={weather.icon}
              error={weather.error}
            />
            {console.log(weather.data)}

            {weather && <Weather weather={weather} />}
            {errorMessage && <Error errorMessage={errorMessage} />}
          </AppWrap>
        </>


    );
  }
}

export default App;