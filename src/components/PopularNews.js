import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularNews = () => {

  const [topNews, setTopNews] = useState([])

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            apiKey: "b74f4d2c7b824f94929199595d382465",
            country: "us",
            pageSize: 7
          }
        }).then((res) => setTopNews(res.data.articles))
  },[])

  const popularNews = topNews.map(top => {
    return (
      <div className='card' key={top.title}>
          <div>
            <img src={top.urlToImage} />
          </div>
          <div className='pop-content'>
            <h3 className='pop-title'><a href={top.url} target="_blank">{top.title}</a></h3>
          </div>
        </div>
    )
  })

  return (
    <div>
      <h2>Popular This Week</h2>
      {popularNews}
    </div>
  )
}

export default PopularNews;