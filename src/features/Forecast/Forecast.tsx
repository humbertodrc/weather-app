import { ForecastCard } from "../../components/ForecastCard";
import useForecast from '../../hooks/useForecast';

export const Forecast = () => {
	const {loading} = useForecast();

	return (
		<div>
			<h2>Pronostico por los proximos 5 dias cada 3 horas</h2>
			<div className="card-container">
				{loading ? <p>Obteniendo ubicación...</p> : <ForecastCard />}
			</div>
		</div>
	);
};
