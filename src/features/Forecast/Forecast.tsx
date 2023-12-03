import { ForecastCard } from '../../components/ForecastCard'

export const Forecast = () => {
  return (
    <section>
      <h2>Pronostico por los proximos 5 dias cada 3 horas</h2>
      <div className="card-container">
        <ForecastCard />
      </div>
    </section>
  )
}