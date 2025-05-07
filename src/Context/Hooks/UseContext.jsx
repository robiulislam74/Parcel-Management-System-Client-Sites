import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const UseContext = () => {
    return useContext(AuthContext)
}

export default UseContext