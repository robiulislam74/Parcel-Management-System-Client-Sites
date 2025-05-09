import React from 'react'
import UseContext from '../Hooks/UseContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = UseContext()

    if(loading){
        return <h1 className='text-2xl'>Loading...</h1>
    }

      if(user){
        return children
    }

  return (
    <>
  <Navigate to={'/login'} state={location.pathname}></Navigate>
    </>
  )
}

export default PrivateRoutes