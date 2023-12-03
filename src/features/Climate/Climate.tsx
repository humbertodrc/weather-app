import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WatherCard } from "../../components/WatherCard";
import { getCityFromCoordinates } from "../../services/getCity";
import { getGeoLocationUser } from "../../services/getGeoLocation";
import { fetchingClimate } from "../../store/slice";

export const Climate = () => {
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
				dispatch(fetchingClimate(res));
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
		<div className="contenedor">
			{loading ? <p>Obteniendo ubicación...</p> : <WatherCard />}
		</div>
	);
};
