// import {forecast} from "../data/forecast";
import { useAppSelector } from "../store";
import { getDayWeek } from '../utils/getDate';

export const ForecastCard = () => {
	const forecast = useAppSelector((state) => state.forecast);

	return (
		<>
			{forecast.map((item) => (
				<div className="contenedor" key={item.dt}>
					{/* Dia */}
					<p>{getDayWeek(item.dt_txt)}</p>
					{/* Tipo de pronostico */}
					{new Date(item.dt * 1000).toLocaleString()}
					<img width="120" height="120" src={`./${item.weather[0].main}.svg`} alt={item.weather[0].description} />
					{/* Temperatura minima */}
					<p>{item.main.temp_min}°C</p>
					{/* Temperatura Maxima */}
					<p>{item.main.temp_max}°C</p>
				</div>
			))}
		</>
	);
};
