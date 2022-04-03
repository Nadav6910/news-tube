import NewsIcon from "./NewsIcon"

export default function Header() {
    return (
        <div className="header-container">
            <NewsIcon />
            <p className="header-text-news">News</p>
            <p className="header-text-tube">Tube</p>
        </div>
    )
}