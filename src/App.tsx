import { Header } from "./components/common/Header";
import { Climate } from "./features/Climate/Climate";
import { Forecast } from "./features/Forecast/Forecast";
import { Search } from "./features/Search/Search";
import { useSEO } from './hooks/useSEO';

function App() {

	useSEO({
		title: 'App del Clima',
		description: 'App del clima, con React, Redux Toolkit, TypeScript, Styled Components y OpenWeatherMap API',
	})

	return (
		<>
			<Header>
				<h1>App del Clima</h1>
			</Header>
			<main>
				<section className="dos-columnas">
					<Search />
					<Climate />
				</section>
				<section>
					<Forecast />
				</section>
			</main>
		</>
	);
}

export default App;
