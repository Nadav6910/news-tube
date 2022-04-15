import { useContext } from "react"
import { AppContext } from "../App"

export default function SearchBar() {

    const { themeState } = useContext(AppContext)

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={e => e.preventDefault()} role="search">
                <input className="search-input" type="search" placeholder="Search..." autoFocus />
                <button className="search-btn" style={{"backgroundColor": themeState ? "#6c19ff" : "#01b2d7", "color": themeState && "white"}} type="submit">Go</button>    
            </form>
        </div>
    )
}