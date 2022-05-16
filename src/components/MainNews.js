import React, { useEffect } from 'react';
import axios from 'axios';


const MainNews = () => {

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything", {
      params: {
        apiKey: "b74f4d2c7b824f94929199595d382465"
      }
    }).then((res) => console.log(response))
  })
  return (
    <div>MainNews</div>
  )
}

export default MainNews;