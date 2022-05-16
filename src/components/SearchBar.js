import React, { useState } from 'react';


const SearchBar = () => {

    const [input, setInput] = useState("")

    return (
        <div>
            <div className="ui input focus">
                <input 
                type="text" 
                placeholder="Search..."
                onChange={(e) => {
                    setInput(e.target.value)
                    console.log(input)
                } } 
                />
            </div>
        </div>
    )
}

export default SearchBar;
