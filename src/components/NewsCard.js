import "../styles/card.css";
import { useContext } from "react"
import { AppContext } from "../App"

export default function NewsCard(props) {

    const { themeState } = useContext(AppContext)

    return (
        <div className="card-container">
            <div className="card" style={{"backgroundColor": themeState && "#414141"}}>
                <div className="card-header">
                    <img src={props.image} alt="source" />
                </div>
                <div className="card-body" style={{"backgroundColor": themeState && "#414141", "color": themeState && "white"}}>
                    <span className="tag tag-Tranding">{props.category === "general" ? "Tranding" : props.category}</span>
                    <h4>
                        {props.title && props.title.split(" - ")[0]}
                    </h4>
                    <p>
                        {props.content && props.content.split("[")[0]}
                    </p>
                    <div className="info-section">
                        <div className="info">
                            <h5>{props.source}</h5>
                            <small style={{"color": themeState ? "#a7acbd" : "#545d7a"}}>{props.date && props.date.split("T")[0] + " " + props.date.split("T")[1].split("Z")[0]}</small>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}