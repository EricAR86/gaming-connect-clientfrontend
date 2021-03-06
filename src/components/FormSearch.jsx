import React from 'react'
import { Select, Button, Wrap, WrapItem } from "@chakra-ui/react";



import { useState, useEffect } from 'react'
import axios from 'axios';


const FormSearch = (props) => {

    const {
        videogame,
        platform,
        language,
        setVideogame,
        setPlatform,
        setLanguage
    } = props

    //lista de videojuegos usando axios y useEffect
    // usar useState (allvideogames) para mapear lista 

    const [allVideogames, setAllVideogames] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/videogames`)
            .then(videogames => {
                setAllVideogames(videogames.data)
                console.log(videogames.data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div className='form-search'>

            {/* alternatetive button selection */}

            {/* <Wrap spacing={4}>
                {allVideogames.map(videogame => {
                    return (
                        <WrapItem key={videogame._id} onClick={() => setVideogame(videogame.title)}><Button colorScheme='green' variant='solid'>{videogame.title}</Button></WrapItem>
                    )
                })}
            </Wrap> */}

            <Select placeholder='Select a Videogame' onChange={(evento) => setVideogame(evento.target.value)}>
                {
                    allVideogames.map(videogame =>
                        <option key={videogame._id}>{videogame.title}</option>)
                }
            </Select>

            {/* <input value={videogame} disabled /> */}

            {/* <Select placeholder='Platform' onChange={(evento) => setPlatform(evento.target.value)}>
                <option value='Xbox'>Xbox </option>
                <option value='PlayStation'>PlayStation</option>
                <option value='Nintendo'>Nintendo</option>
                <option value='PC'>PC</option>

            </Select>
            <input value={platform} disabled /> */}

            <Select placeholder='Language' onChange={(evento) => setLanguage(evento.target.value)}>
                <option value='Espa??ol'>Espa??ol</option>
                <option value='English'>English</option>
                <option value='Fran??ais'>Fran??ais</option>
                <option value='Portugu??s'>Portugu??s</option>
            </Select>

            {/* <input value={language} disabled /> */}


        </div>
    )
}

export default FormSearch