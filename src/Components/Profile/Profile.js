import React, { useContext } from 'react'
import { LoginContext } from '../../Contexts/LoginContext'

function Profile() {
    const { username } = useContext(LoginContext) 
    return (
        <>
           <h1>Hi {username}</h1> 
        </>
    )
}

export default Profile
