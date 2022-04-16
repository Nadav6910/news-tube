import { useContext } from "react"
import { AppContext } from "../App"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function SearchBar(props) {

    const { themeState } = useContext(AppContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [searchTerm, setSearchTerm] = useState("")
    // console.log(searchTerm);
    useEffect(() => {
        if (location.pathname.includes("/search")) {
            document.getElementById("search-input").value = location.pathname.split("/")[2].split("%20").join(" ")
            props.data(location.pathname.split("/")[2].split("%20").join(" "))
        }
    }, [props, location])
    
    const sendDataToSearch = () => {
        props.data(searchTerm)
        navigate(`/search/${searchTerm}`)
    }

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={e => e.preventDefault()} role="search">
                <input id="search-input" className="search-input" onChange={e => setSearchTerm(e.target.value)} type="search" placeholder="Search..." autoFocus />
                <button className="search-btn" onClick={sendDataToSearch} style={{"backgroundColor": themeState ? "#6c19ff" : "#01b2d7", "color": themeState && "white"}} type="submit">Go</button>    
            </form>
        </div>
    )
}