import "../styles/card.css";
import { useContext, useState } from "react"
import { AppContext } from "../App"
import imageLoading from "../images/image-loading.gif"
import noPhotoImage from "../images/no-photo.png"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function NewsCard(props) {

    const { themeState } = useContext(AppContext)
    const [imageLoaded, setimageLoaded] = useState(false)

    return (
        <div className="card-container">
            <div className="card" style={{"backgroundColor": themeState && "#414141"}}>
                <div className="card-header">
                    <img onError={({ currentTarget }) => {
                        currentTarget.onerror = null
                        currentTarget.src=noPhotoImage}}
                        onLoad={() => setimageLoaded(true)} 
                        src={imageLoaded === false ? imageLoading : props.image === null ? noPhotoImage : props.image} 
                        style={{"objectFit": props.image === null || imageLoaded === false ? "contain" : "cover"}}
                        alt="source" 
                    />
                </div>
                <div className="card-body" style={{"backgroundColor": themeState && "#414141", "color": themeState && "white"}}>
                    <span className={`tag tag-${props.category}`}>{props.category === "general" ? "Trending" : props.category}</span>
                    <h4>
                        {props.title && props.title.split(" - ")[0]}
                    </h4>
                    <p>
                        {props.content === null ? props.title+"..." : props.content.split("[")[0]}
                    </p>
                    <div className="info-section">
                        <div className="info">
                            <h5>{props.source}</h5>
                            <small style={{"color": themeState ? "#a7acbd" : "#545d7a"}}>{props.date && props.date.split("T")[0] + " " + props.date.split("T")[1].split("Z")[0]}</small>
                        </div>
                        <div className="article-link-container">
                            <a className="article-link" href={props.url && props.url} target="_blank" rel="noopener noreferrer" style={{"color": themeState ? "rgb(150 92 255)" : "#01b2d7"}}>Story<ArrowCircleRightIcon style={{"marginLeft": "0.2em"}}/></a>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}