import React from 'react'
import { Flex, FormControl, FormHelperText, FormLabel, Select, Button, Wrap, WrapItem } from "@chakra-ui/react";

import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

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
        axios.get("http://localhost:5005/api/videogames")
            .then(videogames => {
                setAllVideogames(videogames.data)
                console.log(videogames.data)
            })
            .catch(error => console.log(error))
    }, [])


    const countries = [
        "nigeria",
        "japan",
        "india",
        "united states",
        "south korea",
    ];
    return (
        <div className='form-search'>
            <Wrap spacing={4}>
                {allVideogames.map(videogame => {
                    return <WrapItem key={videogame._id} onClick={() => setVideogame(videogame.title)}><Button colorScheme='green' variant='solid'>{videogame.title}</Button></WrapItem>
                })}
            </Wrap>

            <input value={videogame} disabled />

            <Select placeholder='Platform'>
                <option value='Xbox'>Xbox </option>
                <option value='PlayStation'>PlayStation</option>
                <option value='Nintendo'>Nintendo</option>
                <option value='PC'>PC</option>

            </Select>

            <input value={platform} disabled />


            <Select placeholder='Language'>
                <option value='Español'>Español</option>
                <option value='English'>English</option>
                <option value='Frances'>Frances</option>
            </Select>
        </div>
    )
}

export default FormSearch