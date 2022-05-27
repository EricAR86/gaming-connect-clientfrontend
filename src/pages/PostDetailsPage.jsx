
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import moment from 'moment';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';




const PostDetailsPage = (props) => {

  const [post, setPost] = useState({})

  const { id } = useParams()


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
      .then(infoPost => {
        setPost(infoPost.data)
      })
      .catch(err => console.log(err))
  }, [id])

  console.log(post)

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={270}
            width={282}
            objectFit={'cover'}
          // src={post.videogameRef.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>

          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {post.title}
          </Heading>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {post.description}
          </Heading>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {moment(post.date).format("dddd MMMM Do YYYY, h:mm a")}
          </Heading>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Language: {post.language}
          </Heading>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            How many Players: {post.players}
          </Heading>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Party Chat: {post.communication}
          </Heading>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {post.category}
          </Heading>

        </Stack>
      </Box>
    </Center>
  )
}

export default PostDetailsPage