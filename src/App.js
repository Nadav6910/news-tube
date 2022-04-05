import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

export const AppContext = createContext(null)

function App() {

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
          </Routes>
      </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App
