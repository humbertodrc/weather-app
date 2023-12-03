import {FC} from "react";
import {OPTIONSCOUNTRY} from "../../constants/options";

interface SelectProps {
	htmlFor: string;
	label: string;
	id: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({
	htmlFor,
	label,
	name,
	id,
	value,
	onChange,
}) => {
	return (
		<>
			<label htmlFor={htmlFor}>{label}</label>
			<select name={name} id={id} value={value} onChange={onChange}>
				{OPTIONSCOUNTRY.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
};
