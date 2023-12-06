import { WatherCard } from "../../components/WatherCard";
import useClimate from '../../hooks/useClimate';

export const Climate = () => {

	const {loading} = useClimate();
	
	return (
		<div className="contenedor">
			{loading ? <p>Obteniendo ubicación...</p> : <WatherCard />}
		</div>
	);
};
