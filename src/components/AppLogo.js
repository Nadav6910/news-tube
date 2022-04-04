import NewsIcon from "./NewsIcon"

export default function AppLogo() {
    return (
        <div className="logo-container">
            <NewsIcon />
            <p className="header-text-news">News</p>
            <p className="header-text-tube">Tube</p>
        </div>
    )
}