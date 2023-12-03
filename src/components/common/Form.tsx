import {useState} from "react";
import {BusquedaType} from "../../types/search.types";
import {Input} from "./Input";
import {Select} from "./Select";
import {Alert} from "./Alert";

export const Form = () => {
	const [busqueda, setBusqueda] = useState<BusquedaType>({
		ciudad: "",
		pais: "",
	});
	const [alerta, setAlerta] = useState(false);

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
		console.log(busqueda);
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
