import {forecast} from "../data/forecast";

export const ForecastCard = () => {
	return (
		<div className="contenedor">
			<p>{forecast.list[0].dt_txt}</p>
			<p>{forecast.list[0].main.temp_min}°C</p>
			<p>{forecast.list[0].main.temp_max}°C</p>
		</div>
	);
};
