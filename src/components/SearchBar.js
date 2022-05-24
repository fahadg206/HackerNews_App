import React, { useState } from 'react';
import MainNews from './MainNews';


const SearchBar = () => {

    const [input, setInput] = useState("nba");

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Search: </label>
                    <input 
                    className='input'
                    type="text" 
                    
                    onChange={(e) => {
                        setInput(e.target.value)
                    } } 
                    />
                    <button
                    onClick={() => {
                       
                    }}
                    >Search</button>
                </div>
            </div>
            <MainNews input={input} />
        </div>
    )
}

export default SearchBar;
