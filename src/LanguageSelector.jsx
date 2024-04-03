import { useLanguage } from "./LanguageContext";

const languageSelector = () => {
    const {language, changeLanguage} = useLanguage();

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value)
    }

    return (
        <>
        <label>Select Language:</label>
        {/* Va a traer langauge que esa en el contexto de ./languageContext */}
        <select value={language} onChange={handleChangeLanguage}> 
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
        </>
    )
}

export default languageSelector