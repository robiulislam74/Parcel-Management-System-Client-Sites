import React from 'react'

const Heading = ({title,subTitle}) => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryColor mb-4">
                {title}
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                {subTitle}
            </p>
        </div>
    )
}

export default Heading