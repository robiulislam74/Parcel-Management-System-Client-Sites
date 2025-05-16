import React from 'react'
import UseContext from '../Hooks/UseContext'
import { Navigate, useLocation } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = UseContext()

    if(loading){
        return <div className='min-h-[calc(100vh-88px)] flex justify-center items-center mx-auto'>
          <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
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