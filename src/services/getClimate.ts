import { ClimateType } from '../types/climate.types';
import { ForecastType } from '../types/forecast.types';
import { SearchType } from '../types/search.types';

// Buscar el clima de una ciudad especifica
export const getClimate = async (datos: SearchType): Promise<ClimateType> => {
	try {
		const {ciudad, pais} = datos;
		const appId = import.meta.env.VITE_CLIMA_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`;
		const respuesta = await fetch(url);
		if (!respuesta.ok) {
      throw new Error("No se pudo obtener el clima");
    }
    const resultado = await respuesta.json();
    const { name, main } = resultado;

    return {
      name,
      main
    };

	} catch (error) {
		throw new Error("Error al consultar el clima");
	}
};

// Pronostico del clima por los 5 dias siguientes
export const getForecast = async (datos: SearchType): Promise<ForecastType[]> => {
	try {
		const {ciudad} = datos;
		const appId = import.meta.env.VITE_CLIMA_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${appId}&units=metric`;
		const respuesta = await fetch(url);
		if (!respuesta.ok) {
			throw new Error("No se pudo obtener el clima");
		}
		const resultado = await respuesta.json();
		return resultado.list;

	} catch (error) {
		throw new Error("Error al consultar el clima");
	}

};


