import "../styles/home.css"
import { useState, useEffect } from "react";
import { useContext } from "react"
import { AppContext } from "../App"
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import NewsCard from "../components/NewsCard";
import axios from "axios"

export default function TechnologyPage() {

  const { themeState } = useContext(AppContext)

  const [generalNews, setGeneralNews] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://current-news.p.rapidapi.com/news/science',
      headers: {
        'X-RapidAPI-Host': 'current-news.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_CURRENT_NEWS_API_KEY
      }
    };
    
    axios.request(options).then(async function (response) {
      setGeneralNews(await response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <>
      {generalNews === null ?
        <div className="loading-container">
          <TwinSpin className="loading-animation" color={themeState ? "#6c19ff" : "#01b2d7"} width="70px" height="70px" duration="3s"/>  
        </div> :
    
      <div className="home-page-container">
        {generalNews.news.map((atricle, index) => {

          if (atricle.source.name !== "YouTube") {
            
            return (
              <NewsCard
                key={index}
                category={generalNews.message}
                title={atricle.title}
                content={atricle.content}
                url={atricle.url}
                image={atricle.urlToImage}
                source={atricle.source.name}
                date={atricle.publishedAt}
              />
            )

          }

          else {
            return null
          }

        })}
      </div>
    }
    </>
  )
}