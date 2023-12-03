import { CurrentSearchType } from '../types/search.types';


// Obtener las navigator.geolocation
export const getGeoLocationUser = async (): Promise<CurrentSearchType> => {
  try {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      }, reject);
    });
  } catch (error) {
    throw new Error('Error al consultar el clima');
  }
}