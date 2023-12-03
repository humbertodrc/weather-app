import { forecast } from '../data/forecast'

export const ForecastCard = () => {
  return (
    <section>
      <h2>Pronostico por los proximos 5 dias cada 3 horas</h2>
      <div>
        <p>{forecast.list[0].dt_txt}</p>
        <p>{forecast.list[0].main.temp_min}°C</p>
        <p>{forecast.list[0].main.temp_max}°C</p>
      </div>
    </section>
  )
}