import React from "react";
import SearchBar from "./components/SearchBar";
import MainNews from "./components/MainNews";
import PopularNews from "./components/PopularNews";

const App = () => {
    return (
        <div>
            <SearchBar />
            <MainNews />
        </div>
    ) 
}

export default App;