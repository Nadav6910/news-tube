import "../styles/home.css"
import { useState, useEffect } from "react";
import { useContext } from "react"
import { AppContext } from "../App"
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import SearchNewsCard from "../components/SearchNewsCard";
import axios from "axios"

export default function SearchPage() {

    const { themeState } = useContext(AppContext)

    const [generalNews, setGeneralNews] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
            params: {q: 'Elon Musk', lang: 'en', media: 'True'},
            headers: {
              'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
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
                    {generalNews.articles.map((atricle, index) => {            
                        return (
                            <SearchNewsCard
                                key={index}
                                category={generalNews.user_input.q}
                                title={atricle.title}
                                content={atricle.summary}
                                url={atricle.link}
                                image={atricle.media}
                                source={atricle.author}
                                date={atricle.published_date}
                            />
                        )
                    })}
                </div>
            }
        </>
    )
}
