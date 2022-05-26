
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Radio,
    RadioGroup,
    HStack,
    Button,
    Flex,
    Heading,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios'

import React, { useState, useEffect } from 'react'

const CreatePostForm = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [language, setLanguage] = useState("")
    const [players, setPlayers] = useState(null)
    const [communication, setCommunication] = useState("")
    const [category, setCategory] = useState("")

    const userRef = props.user?._id
    console.log(userRef)


    function handleSubmit(event) {

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/posts/new`, { title, description, date, language, players, communication, category, userRef })
            .then(newPost => {
                console.log(newPost)
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <h1>Create a Post</h1>
            <FormControl isRequired>
                <FormLabel htmlFor='title'>VideoGame</FormLabel>
                <Input
                    id='title'
                    type='text'
                    value={title}
                    onChange={(evento) => setTitle(evento.target.value)}
                />

                <FormLabel htmlFor='description'>Description</FormLabel>
                <Input
                    id='description'
                    type='text'
                    value={description}
                    onChange={(evento) => setDescription(evento.target.value)}
                />

                <FormLabel htmlFor='date'>Date</FormLabel>
                <Input
                    id='date'
                    type='datetime-local'
                    value={date}
                    onChange={(evento) => setDate(evento.target.value)}
                />

                <FormLabel htmlFor='language'>Language</FormLabel>
                <Select
                    id='Language'
                    placeholder='Select a Language'
                    value={language}
                    onChange={(evento) => setLanguage(evento.target.value)}
                >
                    <option>English</option>
                    <option>Español</option>
                    <option>Francais</option>
                    <option>Portugues</option>
                </Select>

                <FormLabel htmlFor='players'>Players Needed</FormLabel>
                <NumberInput max={16} min={1}>
                    <NumberInputField
                        id='players'
                        value={players}
                        onChange={(evento) => setPlayers(evento.target.value)}
                    />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>


                <FormLabel htmlFor='communication'>Communication</FormLabel>
                <Select
                    id='communication'
                    placeholder='Need a Party?'
                    value={communication}
                    onChange={(evento) => setCommunication(evento.target.value)}
                >
                    <option>Yes</option>
                    <option>No</option>
                </Select>
                <FormHelperText>Select if a Party chat is needed.</FormHelperText>


                <FormLabel htmlFor='category'>Category</FormLabel>
                <Select
                    id='category'
                    placeholder='Select a Category'
                    value={category}
                    onChange={(evento) => setCategory(evento.target.value)}
                >
                    <option>Casual</option>
                    <option>Competitive</option>
                    <option>No Experience</option>
                    <option>With Experience</option>
                </Select>

                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='green' variant='solid'
                        onClick={handleSubmit}
                    >
                        Create
                    </Button>
                </Stack>

            </FormControl>
        </div>
    )
}




export default CreatePostForm