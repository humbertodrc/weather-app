import {Header} from "./components/common/Header";
import {Climate} from "./features/Climate/Climate";
import {Forecast} from "./features/Forecast/Forecast";
import {Search} from "./features/Search/Search";

function App() {
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
