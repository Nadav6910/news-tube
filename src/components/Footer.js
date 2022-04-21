import "../styles/footer.css";
import { useNavigate } from "react-router-dom";


export default function Footer() {

    const navigate = useNavigate()

    return (

        <footer className="footer-distributed">

            <div className="footer-right">

                
                <a href="https://linkedin.com/in/nadav-shor-268475216" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/Nadav6910" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>

            </div>

            <div className="footer-left">

                <p className="footer-links">
                    <button className="link-1" onClick={() => navigate("/")}>Home</button>
                    <span>●</span>
                    <button onClick={() => {navigate("/Business"); window.scrollTo({top: 0})}}>Business</button>
                    <span>●</span>
                    <button onClick={() => {navigate("/Entertainment"); window.scrollTo({top: 0})}}>Entertainment</button>
                    <span>●</span>
                    <button onClick={() => {navigate("/Technology"); window.scrollTo({top: 0})}}>Technology</button>
                    <span>●</span>
                    <button onClick={() => {navigate("/Science"); window.scrollTo({top: 0})}}>Science</button>
                    <span>●</span>
                    <button onClick={() => {navigate("/Sports"); window.scrollTo({top: 0})}}>Sports</button>
                </p>

                <p className="copy-rights">News Tube &copy; 2022</p>
            </div>

        </footer>
    )
}