import {FC} from "react";

interface InputProps {
	htmlFor: string;
	id: string;
	name: string;
	value: string;
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
	htmlFor,
	label,
	id,
	name,
	value,
	onChange,
}) => {
	return (
		<>
			<label htmlFor={htmlFor}>{label}</label>
			<input
				type="text"
				id={id}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</>
	);
};
