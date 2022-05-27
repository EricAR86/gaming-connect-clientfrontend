import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
const VideogameList = (props) => {
    const { language } = props
    const [posts, setPosts] = useState([])
    useEffect(() => {

        let url = `${process.env.REACT_APP_SERVER_URL}/posts`

        if (language !== "") {
            url += `?language=${language}&platform="xbox"`
        }

        axios.get(url)
            .then(datos => {
                setPosts(datos.data)
                console.log(datos.data)

            })
            .catch(console.log)
    }, [language])

    return (
        <div>

            {posts.length === 0 && "Selecciona de lado derecho"}

            {
                posts.map(post => {
                    return <Link key={posts._id} to={`/posts/${post._id}`} > <div>{post.title} - {post.language} </div></Link>
                })
            }
        </div >
    )
}

export default VideogameList