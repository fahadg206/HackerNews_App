import React from "react";
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
            <div className="container">
                <div className="search-spantwo">
                   <SearchBar /> 
                </div>
                <div className="popular">
                    <PopularNews />
                </div>
                
            </div>
        </div>
    ) 
}

export default App;