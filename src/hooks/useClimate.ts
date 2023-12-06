import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCityFromCoordinates } from '../services/getCity';
import { getGeoLocationUser } from '../services/getGeoLocation';
import { fetchingClimate } from '../store/slice';

const useClimate = () => {
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

  return { loading };
};

export default useClimate;
