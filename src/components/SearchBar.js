import { useContext } from "react"
import { AppContext } from "../App"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBar(props) {

    const { themeState } = useContext(AppContext)
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState("")

    const sendDataToSearch = (e) => {
        props.data(searchTerm)
        navigate(`/search/${searchTerm}`)
    }

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={e => e.preventDefault()} role="search">
                <input className="search-input" onChange={e => setSearchTerm(e.target.value)} type="search" placeholder="Search..." autoFocus />
                <button className="search-btn" onClick={sendDataToSearch} style={{"backgroundColor": themeState ? "#6c19ff" : "#01b2d7", "color": themeState && "white"}} type="submit">Go</button>    
            </form>
        </div>
    )
}