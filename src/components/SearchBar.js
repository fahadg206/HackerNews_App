import React, { useState } from 'react';
import MainNews from './MainNews';


const SearchBar = () => {

    const [input, setInput] = useState("")

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setInput(e.target.value)
            }}>
                <div>
                    <input 
                    type="text" 
                    // value={input}
                    // onChange={(e) => {
                    //     setInput(e.target.value)
                    // } } 
                    />
                </div>
            </form>
            <MainNews term={input} />
        </div>
    )
}

export default SearchBar;
