import { Children, createContext, useContext, useState } from "react";

//creamos el contexto

const LanguageContext = createContext ()

//Cualquiera de los componentes que este dentro de este LanguageProvider le vas a pasar el contexto para que lo pueda utilizar.
export const LanguageProvider = ({children}) =>  {
    const[language, setLanguage] = useState("en")
    const changeLanguage = (newlanguage) => {
        setLanguage(newlanguage)
    };

//Creamos este contexto.
    return (
        //Proveedor useContext le va a pasar las propiedades del contexto para que pueda ser utilizado por los componentes que están dentro.
        <LanguageContext.Provider value={{language, changeLanguage}}>
{/* // Ponemos el children (está en export const languageProvider) para que todos los hijos que esten envueltos con estos LanguageContext van a funcionar  como export const languageProvider. */}
            {children}
        </LanguageContext.Provider >
    )
}

//creamos un hook y lo exportamos para poder usar el contexto que hemos creado.

export const useLanguage = () => useContext(LanguageContext)