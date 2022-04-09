import "./styles/header+navbar.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
// import axios from "axios"

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

  const [themeState, setThemeState] = useState(false)

  //getting state of toggle from header component
  const themeToggle = (state) => {
    setThemeState(state)
  }

  return (
    <AppContext.Provider value={{ themeState }}>    
      <div className="App">
        <Header themeState={themeToggle}/>
        <Navbar />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App
