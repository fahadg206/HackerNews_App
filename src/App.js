import React from "react";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Route } from "react-router-dom";
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