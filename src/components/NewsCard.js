import "../styles/card.css";
import { useContext } from "react"
import { AppContext } from "../App"

export default function NewsCard() {

    const { themeState } = useContext(AppContext)

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="source" />
                </div>
                <div className="card-body" style={{"backgroundColor": themeState && "#414141", "color": themeState && "white"}}>
                    <span className="tag tag-teal">Technology</span>
                    <h4>
                        Why is the Tesla Cybertruck designed the way it
                        is?
                    </h4>
                    <p>
                        An exploration into the truck's polarising design
                    </p>
                    <div className="info-section">
                        <div className="info">
                            <h5>Jerusalem Post</h5>
                            <small style={{"color": themeState ? "#a7acbd" : "#545d7a"}}>2h ago</small>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}