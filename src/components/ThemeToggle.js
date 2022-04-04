export default function ThemeToggle() {
    return (
        <div className="toggle-container">
            <input type="checkbox" id="toggle" className="toggle--checkbox"></input>
            <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}