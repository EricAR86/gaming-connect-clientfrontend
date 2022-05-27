import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import moment from 'moment';
import { Stack, Center, Heading, Grid } from '@chakra-ui/react'
const VideogameList = (props) => {
    const { videogame, language } = props
    const [posts, setPosts] = useState([])
    useEffect(() => {

        let url = `${process.env.REACT_APP_SERVER_URL}/posts`

        if (videogame !== "") {
            url += `?videogame=${videogame}`
        }

        if (videogame !== "" && language !== "") {
            url += `&language=${language}`
        }
        console.log(url)
        axios.get(url)
            .then(datos => {
                setPosts(datos.data)
                console.log(datos.data)

            })
            .catch(console.log)
    }, [videogame, language])

    return (
        <div>

            {posts.length === 0 && "There is no results"}

            {
                posts.map(post => {
                    return (
                        <Link key={posts._id} to={`/posts/${post._id}`}>
                            <div>
                                <Grid row>

                                    <Center py={12}>
                                        <Stack pt={10} align={'center'}>
                                            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                                                {post.title}
                                            </Heading>
                                            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                                                {post.language}
                                            </Heading>
                                            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                                                {moment(post.date).format("dddd MMMM Do YYYY, h:mm a")}
                                            </Heading>
                                        </Stack>
                                    </Center>
                                </Grid>
                            </div>
                        </Link>
                    )
                })
            }
        </div >
    )
}

export default VideogameList