import React from "react";
import { Header } from "./components/common";
import { Footer } from "./components/common";
import { Search } from "./components/common";
import { Recipes } from "./components/common";
import { Category } from "./components/common";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Footer />
			<Search />
			<Recipes />
			<Category />
		</div>
	);
}

export default App;
