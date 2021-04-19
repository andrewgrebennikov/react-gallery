import React from "react";
import { Route } from "react-router-dom";
import { Home, Card } from "./pages";

function App() {
	return (
		<>
			<main className="main">
				<div className="wrapper">
					<Route exact path="/" component={Home} />
					<Route exact path="/card/:id" component={Card} />
				</div>
			</main>
		</>
	);
}

export default App;
