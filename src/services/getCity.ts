import { LocationType } from '../types/locations.type';

export const getCityFromCoordinates = async ({ lat, lon }: { lat: number, lon: number }): Promise<LocationType> => {
  const apiKey = import.meta.env.VITE_LOCATION_API_KEY;
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}+${lon}&pretty=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const ciudad = data.results[0]?.components?.city;
    const pais = data.results[0]?.components?.country;
    return { ciudad, pais };
  } catch (error) {
    throw new Error('Error al consultar el clima');
  }
}

