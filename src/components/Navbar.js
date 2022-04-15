import { useContext } from "react"
import { AppContext } from "../App"
import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"

export default function Navbar(props) {

    const { themeState } = useContext(AppContext)

    const sendDataToSearch = (searchTerm) => {
        props.data(searchTerm)
    }

    return (
        <div className="navbar-container" style={{"borderColor": themeState ? "#6c19ff" : "#01b2d7"}}>
            <CategorySelector />
            <SearchBar data={sendDataToSearch}/>
        </div>
    )
}