
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    Stack,
    Flex,
    Box,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios'

import React, { useState, useEffect } from 'react'



const CreatePostForm = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [language, setLanguage] = useState("")
    const [players, setPlayers] = useState(3)
    const [communication, setCommunication] = useState("")
    const [category, setCategory] = useState("")

    const userRef = props.user?._id


    function handleSubmit(event) {

        axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/new`, { title, description, date, language, players, communication, category, userRef })
            .then(newPost => {
                console.log(newPost)
            })
            .catch(error => console.log(error))
    }

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
        <div>
            <FormControl isRequired>
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Create a Post</Heading>

                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <FormLabel>Videogames</FormLabel>
                                    <Select
                                        placeholder='Select a Videogame'
                                        id='title'
                                        type='text'
                                        value={title}
                                        onChange={(evento) => setTitle(evento.target.value)}
                                    >
                                        {
                                            allVideogames.map(videogame =>
                                                <option key={videogame._id}>{videogame.title}</option>)
                                        }
                                    </Select>
                                    {/* alternative selection */}
                                    {/* <FormLabel>VideoGame</FormLabel>
                                    <Input
                                        id='title'
                                        type='text'
                                        value={title}
                                        onChange={(evento) => setTitle(evento.target.value)}
                                    /> */}
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Description</FormLabel>
                                    <Input
                                        id='description'
                                        type='text'
                                        value={description}
                                        onChange={(evento) => setDescription(evento.target.value)}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='date'>Date</FormLabel>
                                    <Input
                                        id='date'
                                        type='datetime-local'
                                        value={date}
                                        onChange={(evento) => setDate(evento.target.value)}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='language'>Language</FormLabel>
                                    <Select
                                        id='Language'
                                        placeholder='Select a Language'
                                        value={language}
                                        onChange={(evento) => setLanguage(evento.target.value)}
                                    >
                                        <option>English</option>
                                        <option>Español</option>
                                        <option>Français</option>
                                        <option>Português</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
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
                                </FormControl>

                                <FormControl>
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
                                </FormControl>

                                <FormControl>
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
                                </FormControl>

                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>

                                    </Stack>
                                    <Button
                                        onClick={handleSubmit}
                                        bg={'green.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'green.500',
                                        }}>
                                        Create a Post
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
                <Stack direction='row' spacing={4} align='center'>
                </Stack>
            </FormControl>
        </div>
    )
}


export default CreatePostForm