import "./styles/header+navbar.css"
import { Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BusinessPage from "./pages/BusinessPage"
import EntertainmentPage from "./pages/EntertainmentPage"
import TechnologyPage from "./pages/TechnologyPage"
import SciencePage from "./pages/SciencePage"
import SportsPage from "./pages/SportsPage"
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

  //getting state of toggle from header component
  const themeToggle = (state) => {
    setThemeState(state)
  }

  if (themeState) {
    document.body.style.backgroundColor = 'rgb(33 32 32)'
  } else {
      document.body.style.backgroundColor = 'white'
  }

  return (
    <AppContext.Provider value={{ themeState }}>    
      <div className="App">
        <Header themeState={themeToggle}/>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App
