
import React from 'react';
import axios from 'axios';

let apiKey ="YOUR API KEY HERE";
let city = 'Helsinki';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


export default class WeatherClient extends React.Component {
  state = {
    url: {url},
    data: []
  }
 
  componentDidMount = () => {
    axios.get(url)
      .then(res => {
        const response = res.data;
        console.log(res.data)
        this.setState({data: this.state.data.concat(response)})  
        console.log(response.weather[0])
        console.log(this.state.data)
      }
      )
  }

  render() {
    const data = this.state.data.map(s=>
      <div class="inTurnFadingTextG">{s.weather[0].description} <br/> {s.main.temp}
      </div>)
    return (
    <div>
    
    <div id="inTurnFadingTextG_1" class="inTurnFadingTextG"> {city}<br/>{data}</div>
   </div>
    )
  }
}
