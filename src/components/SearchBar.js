import React, { useState, useEffect } from 'react';
import MainNews from './MainNews';
import axios from 'axios';


const SearchBar = () => {

    const [input, setInput] = useState("nba");
    const [articles, setArticles] = useState([])

    const fetchData = async () => {
        const res = await axios.get("https://newsapi.org/v2/everything", {
        params: {
            apiKey: "b74f4d2c7b824f94929199595d382465",
            q: input,
            pageSize: 10
        }
        })

        setArticles(res.data.articles)
    }

        useEffect(() => {
            fetchData()
        }, [])

    console.log(articles)

    return (
        <div>
            <div className='ui form'>
                <form 
                className='field'
                onSubmit={(e) => {
                    e.preventDefault()
                    fetchData()
                }}
                >
                    <label>Search: </label>
                    <input 
                    className='input'
                    type="text" 
                    onChange={(e) => {
                        setInput(e.target.value)
                    } } 
                    />
                    {/* <button
                    onClick={() => {
                       fetchData()
                    }}
                    >Search</button> */}
                </form>
            </div>
            <MainNews input={input} articles={articles} />
        </div>
    )
}

export default SearchBar;
