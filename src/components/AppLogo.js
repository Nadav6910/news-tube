import { useContext } from "react"
import { AppContext } from "../App"
import NewsIcon from "./NewsIcon"

export default function AppLogo() {

    const { themeState } = useContext(AppContext)

    return (
        <div className="logo-container">
            <NewsIcon />
            <p className="header-text-news" style={{"color": themeState ? "white" : "black"}}>News</p>
            <p className="header-text-tube">Tube</p>
        </div>
    )
}