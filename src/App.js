import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Card } from "./pages";

function App() {
	return (
		<>
			<main className="main">
				<div className="wrapper">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/card/:id" component={Card} />
					</Switch>
				</div>
			</main>
		</>
	);
}

export default App;
