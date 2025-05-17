import React from 'react'

const ReviewCard = ({review}) => {
     const { name, photoURL, date, rating, feedback } = review;

  return (
      <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-all">
      {/* User Image */}
      <div className="flex-shrink-0">
        <img
          src={photoURL}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border"
        />
      </div>

      {/* Review Info */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < rating ? "★" : "☆"}</span>
          ))}
          <span className="ml-2 text-gray-600 text-sm">({rating}/5)</span>
        </div>

        {/* Feedback */}
        <p className="mt-2 text-gray-700 text-sm">{feedback}</p>
      </div>
    </div>
  )
}

export default ReviewCard