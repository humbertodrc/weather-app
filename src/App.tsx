import {Header} from "./components/common/Header";
import { Search } from "./features/Search/Search";

function App() {
	return (
		<>
			<Header>
				<h1>App del Clima</h1>
			</Header>
			<Search />
		</>
	);
}

export default App;
