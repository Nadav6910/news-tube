import "../styles/scrollupbtn.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useContext } from "react"
import { AppContext } from "../App"

export default function ScrollUpBtn() {

    const { themeState } = useContext(AppContext)

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <button 
        className="scroll-up-btn" 
        style={{"backgroundColor": !themeState && "rgb(21 21 21 / 19%)", "color": !themeState && "white"}} 
        onClick={ScrollUp}
    >
        <KeyboardArrowUpIcon className="scroll-btn-icon"/>
    </button>
  )
}