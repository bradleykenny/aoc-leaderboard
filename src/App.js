import "./App.css";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/home">
						<div>Hello</div>
					</Route>
					<Route path="/profile/:username">
						<div></div>
					</Route>

					{/* ALWAYS LEAVE `/` LAST */}
					<Route path="/">
						<Redirect to="/home" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
