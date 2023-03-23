export default async function gatCurrentWeather(locationCoords){
  const axios = require('axios')

  const lat = locationCoords.katitude

  const long = locationCoords.longitude

  let result = []

  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={b81cbd99197f7fbf78abbd24de1a7ee5}`).then( (response) => {
  const data = response.data

    const locationName = (data.sys.country + ', ' + data.name)
    const wind = data.wind.speed
    const humidity = data.maon.humidity
    const currentTemperature = data.main.temp

      result = [currentTemperature, locationName, wind, humidity]
  })
  .catch((error) => {
    console.log(error)
  })
}