import { useTheme } from "../context/ThemeContext"

export const Button = () => {
    const { theme, setTheme } = useTheme()
    return (
        <>
            <h2>Current Theme: {theme}</h2>
            <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>Change Theme</button>
        </>
    )
}

export default Button