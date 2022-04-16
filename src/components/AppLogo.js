import { useContext } from "react"
import { AppContext } from "../App"
import NewsIcon from "./NewsIcon"
import { useNavigate } from "react-router-dom"

export default function AppLogo() {

    const { themeState } = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className="logo-container" onClick={() => navigate("/")}>
            <NewsIcon />
            <p className="header-text-news" style={{"color": themeState ? "white" : "black"}}>News</p>
            <p className="header-text-tube">Tube</p>
        </div>
    )
}