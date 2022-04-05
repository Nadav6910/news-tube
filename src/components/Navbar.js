import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"

export default function Navbar() {

    return (
        <div className="navbar-container">
            <CategorySelector />
            <SearchBar />
        </div>
    )
}