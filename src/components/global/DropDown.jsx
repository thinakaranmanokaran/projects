import React, { Children, useState } from 'react'
import { CiSquareMore, CiSaveDown1, CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

const DropDown = ({Children, inList, key}) => {

    const [isDown, setIsDown ] = useState(false);
    const [selectList, setSelectList] = useState("");

    function downList(){
        setIsDown(!isDown);
    }

    function selectedList(){
        setSelectList(!selectList);
        console.log(inList)
    }

    const DownList = ({inList, key}) => {
        return(
            <div className='bg-maxLight space-y-1 w-full p-3 px-1 mt-2 text-[14px] rounded-lg' >
                <div key={key} className={`hover:bg-minGray p-1 px-2 transition-all w-full rounded-md ${selectList ? "bg-blue-300" : ""} `} onClick={selectedList} >{inList}</div>
                <div key={key} className={`hover:bg-minGray p-1 px-2 transition-all w-full rounded-md ${selectList ? "bg-blue-300" : ""} `} onClick={selectedList} >{inList}</div>
            </div>
        )
    }

  return (
    <div className='flex flex-col items-center w-fit ' >
        <div className='bg-maxGray p-2 px-3 w-full inline-flex items-center gap-6 rounded-xl' onClick={downList} >
            {Children}<IoIosArrowDown className={` transition-all duration-300 ${isDown ? "rotate-180" : "rotate-0"}`} />
        </div>
        { isDown && <DownList inList={inList} key={key}/> }
    </div>
  )
}

export default DropDown