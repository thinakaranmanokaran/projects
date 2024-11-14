import React from 'react'
import HoverBox from './../../global/HoverBox'

const Footer = () => {
  return (
    <div className='w-full h-fit' >
      <HoverBox />
    <div className='bg-maxLight dark:bg-maxDark flex justify-between rounded-lg mt-4 py-4 px-4' data-hoverpopup="footer" >
        <div className='text-textDark ' >All credits goes on Thinakaran manokaran</div>
    </div>
  </div>
  )
}

export default Footer