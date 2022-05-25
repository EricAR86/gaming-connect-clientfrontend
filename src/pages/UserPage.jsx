import React from 'react'
import UserCard from "../components/UserCard"

const UserPage = (props) => {
    return (
        <div>
            <UserCard {...props} />
        </div>
    )
}

export default UserPage