import React from 'react'

const PopUP = () => {
  return (
    <>
        <div className='absolute h-screen w-screen top-0 z-50 left-0 flex justify-center items-center backdrop-blur-md ' >
            <div className='bg-maxLight p-5 w-fit max-w-[35vw] rounded-xl h-fit shadow-xl ' >
                <h3 className='text-2xl font-extrabold' >Alert</h3>
                <div className='m-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nesciunt at! Magnam!t</div>
                <div className='flex justify-around mt-4' >
                    <button className='px-6 py-2 text-[14px] bg-maxDark rounded-xl text-minGray scal-100 transition-all hover:scale-110 ' >Clear</button>
                    <button className='px-6 py-2 text-[14px] bg-red-500 rounded-xl text-minGray scal-100 transition-all hover:scale-110 ' >Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopUP