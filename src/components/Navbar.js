import { useContext } from "react"
import { AppContext } from "../App"
import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"

export default function Navbar() {

    const { themeState } = useContext(AppContext)

    return (
        <div className="navbar-container" style={{"borderColor": themeState ? "#6c19ff" : "#01b2d7"}}>
            <CategorySelector />
            <SearchBar />
        </div>
    )
}