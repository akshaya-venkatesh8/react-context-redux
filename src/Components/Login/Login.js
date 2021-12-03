import React, { useContext } from 'react'
import { useState } from 'react'
import { LoginContext } from '../../Contexts/LoginContext'

function Login() {
    // const [name, setName] = useState("")
    const {setUsername, setShowProfile} = useContext(LoginContext);
    const login = (e) => {
        // set user name
        // setUsername(name)
        setShowProfile((st) => !st)
    }
    return (
        <>
            <input type = "text" placeholder="Name" onKeyPress={(e) => {setUsername(e.target.value)}} />
            <button onClick={login}>Login</button>
        </>
    )
}

export default Login
