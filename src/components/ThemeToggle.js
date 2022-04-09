import Tooltip from '@mui/material/Tooltip';

export default function ThemeToggle(props) {

    //changing document body background color and passing theme toggle state to header component 
    const toggleTheme = () => {

        const toggle = document.getElementById('toggle')

        if (toggle.checked) {
            document.body.style.backgroundColor = 'rgb(33 32 32)'
        } else {
            document.body.style.backgroundColor = 'white'
        }

        props.themeState(toggle.checked)
    }

    return (
        <Tooltip title="Switch Theme" style={{"right": "5px"}}>
            <div className="toggle-container">
                <input onChange={toggleTheme} type="checkbox" id="toggle" className="toggle--checkbox"></input>
                <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
                </label>
            </div>
        </Tooltip>
    )
}