import React from 'react'
import ProfilePic from './../assets/images/Profile.jpg'

const Profile = () => {
	return (
		<div>
			<div className=' py-6 space-x-6 flex justify-between '>
				<div className='w-full rounded-xl  bg-maxLight flex flex-col items-center p-4'>
					<div className='flex items-center' >
						<div>
							<img src={ProfilePic} alt="" srcset="" className='w-20 rounded-full' />
						</div>
						<div className='ml-2' >
							<h1 className="text-maxDark text-3xl font-titlefont " >Dheena</h1>
							<h6 className="text-minDark opacity-80 text-[14px] " >@dheenahere</h6>
						</div>
					</div>
					<div className='w-full mt-5 space-y-3 ' >
						<div className='bg-minLight w-full py-4 p-2 rounded-lg' >Address</div>
						<div className='bg-minLight w-full py-4 p-2 rounded-lg' >Address</div>
						{/* <div className='bg-minLight w-full ' >Phone No</div> */}
					</div>
				</div>
				<div>
					<div className='flex' >
						<div className='w-52 h-32 bg-maxLight m-1.5 rounded-lg ' ></div>
						<div className='w-52 h-32 bg-maxLight m-1.5 rounded-lg ' ></div>
					</div>
					<div className='flex' >
						<div className='w-52 h-32 bg-maxLight m-1.5 rounded-lg ' ></div>
						<div className='w-52 h-32 bg-maxLight m-1.5 rounded-lg ' ></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile