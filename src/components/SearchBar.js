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
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    } } 
                    />
                </div>
            </div>
            <MainNews term={input} />
        </div>
    )
}

export default SearchBar;
