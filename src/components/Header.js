import AppLogo from "./AppLogo"

import ThemeToggle from "./ThemeToggle"

export default function Header() {
    return (
        <>
            <div className="header-container">
                <AppLogo />
                <ThemeToggle />
            </div>
        </>
    )
}