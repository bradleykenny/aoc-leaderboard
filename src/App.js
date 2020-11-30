import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
