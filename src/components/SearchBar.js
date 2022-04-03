export default function SearchBar() {

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={e => e.preventDefault()} role="search">
                <input className="search-input" type="search" placeholder="Search..." autoFocus />
                <button className="search-btn" type="submit">Go</button>    
            </form>
        </div>
    )
}