import React from "react";
import SearchBar from "./components/SearchBar";
import MainNews from "./components/MainNews";
import PopularNews from "./components/PopularNews";
import "./styles/App.css"

const App = () => {
    return (
        <div className="container">
            <SearchBar />
            <PopularNews />
        </div>
    ) 
}

export default App;