import "./styles/header+navbar.css"
import { Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import NewsPage from "./pages/NewsPage"
import SearchPage from "./pages/SearchPage"
import Footer from "./components/Footer"

export const AppContext = createContext(null)

function App() {

  // let dateYesterday = Math.floor(new Date(Date.now() - 86400000) / 1000)

  // axios.get(`https://api.pushshift.io/reddit/search/submission/?subreddit=worldnews&sort=desc&sort_type=created_utc&after=${dateYesterday}&size=1000`)
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })

  const [themeState, setThemeState] = useState(localStorage.getItem("theme") === "dark" ? true : false)
  const [searchTerm, setSearchTerm] = useState("")

  //getting state of toggle from header component
  const themeToggle = (state) => {
    setThemeState(state)
  }

  //getting state of search term from searchbar component
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  if (themeState) {
    document.body.style.backgroundColor = 'rgb(33 32 32)'
  } else {
      document.body.style.backgroundColor = 'white'
  }

  // window.addEventListener("scroll", () => {
  //   console.log(window.scrollY)
  // })

  return (
    <AppContext.Provider value={{ themeState, searchTerm }}>    
      <div className="App">
        <Header themeState={themeToggle}/>
        <Navbar data={getSearchTerm}/>

          <Routes>
            <Route path="/" element={<NewsPage category="general"/>} />
            <Route path="/business" element={<NewsPage category="business"/>} />
            <Route path="/entertainment" element={<NewsPage category="entertainment"/>} />
            <Route path="/technology" element={<NewsPage category="technology"/>} />
            <Route path="/science" element={<NewsPage category="science"/>} />
            <Route path="/sports" element={<NewsPage category="sports"/>} />
            <Route path="/search/:name" element={<SearchPage />} />
            <Route path="*" element={<NewsPage category="general"/>} />
          </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App
