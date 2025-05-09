import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider/AuthProvider'

const UseContext = () => {
    return useContext(AuthContext)
}

export default UseContext