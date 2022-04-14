import "../styles/footer.css";

export default function Footer() {
    return (

        <footer className="footer-distributed">

            <div className="footer-right">

                
                <a href="https://linkedin.com/in/nadav-shor-268475216" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/Nadav6910" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>

            </div>

            <div className="footer-left">

                <p className="footer-links">
                    <a className="link-1" href="/">Home</a>

                    <a href="/Business">Business</a>

                    <a href="/Entertainment">Entertainment</a>

                    <a href="/Technology">Technology</a>

                    <a href="/Science">Science</a>

                    <a href="/Sports">Sports</a>
                </p>

                <p>News Tube &copy; 2022</p>
            </div>

        </footer>
    )
}