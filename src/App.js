import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import PopularNews from "./components/PopularNews";
import "./styles/App.css";


const App = () => {
		return (
			<div className="page">
				<div className="header">
					<Header />
				</div>
				<div className="searchbar">
					<SearchBar /> 
				</div>
				<div className="popular">
					<PopularNews />
				</div>
			</div>
		) 
}

export default App;