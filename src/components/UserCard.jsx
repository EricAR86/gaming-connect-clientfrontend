
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react'
import axios from "axios"

import { useParams } from 'react-router-dom'

const UserCard = (props) => {
    //console.log("las props", props)
    const { id } = useParams()

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5005/api/users/${props.user?._id}`)
            .then(infoUser => {
                console.log(infoUser)
                setUsuario(infoUser.data)
            })
            .catch(console.log)
    }, [id])

    console.log(usuario)



    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="green.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={usuario.avatar} alt={"image_avatar"}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        UserName: {usuario.username}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        {usuario.email}
                    </Text>

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            Country: {usuario.country}
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            Preferred Platform: {usuario.platform}
                        </Badge>
                    </Stack>

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>

                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'green.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Edit
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}

export default UserCard