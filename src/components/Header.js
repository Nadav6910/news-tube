import AppLogo from "./AppLogo"
import ThemeToggle from "./ThemeToggle"

export default function Header(props) {

    //passing toggle state to app component
    const themeState = (state) => {
        props.themeState(state)
    }

    return (
        <>
            <div className="header-container">
                <AppLogo />
                <ThemeToggle themeState={themeState}/>
            </div>
        </>
    )
}