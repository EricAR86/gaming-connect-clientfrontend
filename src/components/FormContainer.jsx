
import React, { useState } from 'react'
import FormSearch from './FormSearch'
import VideogameList from './VideogameList'


const FormContainer = () => {

    const [videogame, setVideogame] = useState("")
    const [platform, setPlatform] = useState("")
    const [language, setLanguage] = useState("")

    return (
        <div className='form-container'>
            <FormSearch
                videogame={videogame}
                platform={platform}
                language={language}
                setVideogame={setVideogame}
                setPlatform={setPlatform}
                setLanguage={setLanguage}
            />
            <VideogameList />
        </div>
    )
}

export default FormContainer


/*

1- Estado para guardar lo que selecciona usuario (videogame, platform, language)
2 - otro estado para guardar los resultados del backend (videogameList)

*/