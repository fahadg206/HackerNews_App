import React from "react";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Route } from "react-router-dom";
import PopularNews from "./components/PopularNews";
import "./styles/App.css"



const App = () => {
    return (
            <div className="container">
                <div className="search-spantwo">
                   <SearchBar /> 
                </div>
                <div className="popular">
                    <PopularNews />
                </div>
                
            </div>
         
    ) 
}

export default App;