// import { climate } from '../data/climate'
import { useAppSelector } from '../store'

export const WatherCard = () => {

  const climate = useAppSelector(state => state.climate)
  const {name, main} = climate

  return (
    <div>
      <h2>El clima de {name} es:</h2>
      <p>
        Temperatura actual: {main?.temp}°C
      </p>
      <p>
        Temperatura máxima: {main?.temp_max}°C
      </p>
      <p>
        Temperatura mínima: {main?.temp_min}°C
      </p>
      <p>
        Humedad: {main?.humidity}%
      </p>
      <p>
        Presión: {main?.pressure} hPa
      </p>
      <p>
        Sensación térmica: {main?.feels_like}°C
      </p>
    </div>
  )
}