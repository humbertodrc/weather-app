import { climate } from '../data/climate'

export const WatherCard = () => {

  return (
    <div>
      <h2>El clima de {climate.name} es:</h2>
      <p>
        Temperatura actual: {climate.main?.temp}°C
      </p>
      <p>
        Temperatura máxima: {climate.main?.temp_max}°C
      </p>
      <p>
        Temperatura mínima: {climate.main?.temp_min}°C
      </p>
      <p>
        Humedad: {climate.main?.humidity}%
      </p>
      <p>
        Presión: {climate.main?.pressure} hPa
      </p>
      <p>
        Sensación térmica: {climate.main?.feels_like}°C
      </p>
    </div>
  )
}