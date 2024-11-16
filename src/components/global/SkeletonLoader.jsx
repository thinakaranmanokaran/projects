import React from 'react'

const SkeletonLoader = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  )
}

export default SkeletonLoader