export class WeatherAPI {
  //constructor
  constructor() {
    this.apiKey = "11ebb0ac3b2e468191c130903231810";
    this.baseURL = "http://api.weatherapi.com/v1";
  }

  //get current weather with async/await and city name as parameter
  async getCurrentWeather(city) {
    try {
      const response = await fetch(
        `${this.baseURL}/current.json?key=${this.apiKey}&q=${city}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
