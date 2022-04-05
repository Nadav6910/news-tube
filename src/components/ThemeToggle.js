export default function ThemeToggle(props) {

    //changing document body background color and passing theme toggle state to header component 
    const toggleTheme = () => {

        const toggle = document.getElementById('toggle')

        if (toggle.checked) {
            document.body.style.backgroundColor = '#1b1919'
        } else {
            document.body.style.backgroundColor = 'white'
        }

        props.themeState(toggle.checked)
    }

    return (
        <div className="toggle-container">
            <input onChange={toggleTheme} type="checkbox" id="toggle" className="toggle--checkbox"></input>
            <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}