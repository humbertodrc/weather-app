import { useState } from "react";
import { Alert } from "./Alert";
import { Input } from "./Input";
import { Select } from "./Select";
import { useDispatch } from 'react-redux';
import { SearchType } from '../../types/search.types';
import { fetchingClimate, fetchingForecast } from '../../store/slice';

export const Form = () => {
	const [busqueda, setBusqueda] = useState<SearchType>({
		ciudad: "",
		pais: "",
	});
	const [alerta, setAlerta] = useState(false);
	
	const dispatch = useDispatch();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (Object.values(busqueda).includes("")) {
			setAlerta(true);
			return;
		}

		setAlerta(false);
		dispatch(fetchingClimate(busqueda))
		dispatch(fetchingForecast(busqueda))
	};

	return (
		<div className="contenedor">
			{alerta && <Alert message="Todos los campos son obligatorios" />}
			<div>
				<img src="" alt="" />
			</div>
			<form onSubmit={handleSubmit}>
				<div className="campo">
					<Input
						htmlFor="ciudad"
						label="Ciudad"
						id="ciudad"
						name="ciudad"
						value={busqueda.ciudad}
						onChange={handleChange}
					/>
				</div>
				<div className="campo">
					<Select
						htmlFor="pais"
						label="Pais"
						id="pais"
						name="pais"
						value={busqueda.pais}
						onChange={handleChange}
					/>
				</div>
				<input type="submit" value="Consultar Clima" />
			</form>
		</div>
	);
};
