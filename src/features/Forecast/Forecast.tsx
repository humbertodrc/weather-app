import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ForecastCard } from "../../components/ForecastCard";
import { getCityFromCoordinates } from "../../services/getCity";
import { getGeoLocationUser } from "../../services/getGeoLocation";
import { fetchingForecast } from "../../store/slice";

export const Forecast = () => {
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	const getClimaFromLocation = async () => {
		try {
			const coordenadas = await getGeoLocationUser();

			if (coordenadas.lat && coordenadas.lon) {
				const current = getCityFromCoordinates({
					lat: coordenadas.lat,
					lon: coordenadas.lon,
				});

				const res = await current;
				dispatch(fetchingForecast(res));
			}
		} catch (error) {
			console.error("Error al obtener la ubicación:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getClimaFromLocation();
	}, []);

	return (
		<section>
			<h2>Pronostico por los proximos 5 dias cada 3 horas</h2>
			<div className="card-container">
				{loading ? <p>Obteniendo ubicación...</p> : <ForecastCard />}
			</div>
		</section>
	);
};
