import {FC} from "react";

interface AlertProps {
	message: string;
}

export const Alert: FC<AlertProps> = ({message}) => {
	return <p>{message}</p>;
};
