import React, { useEffect } from 'react';
import axios from 'axios';


const MainNews = ({ term }) => {

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything", {
      params: {
        apiKey: "b74f4d2c7b824f94929199595d382465",
        q: term
      }
    }).then((res) => res.json())
      .then(data => console.log(data))
  })
  
  return (
    <div>MainNews</div>
  )
}

export default MainNews;