import React from 'react'
import { textwhite } from '../../styles/styles'

const TeamRating = () => {
  return (
    <>
    
    <div className="grid grid-cols-12 mt-48 gap-5">
    <div className="col-span-12 sm:col-span-3 ">
        <div className="team-achievement-box w-[full] sm:w-[80%] background-glass py-1 border-2 overflow-hidden relative  border-[#703b34]  rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative `}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[full] sm:w-[80%]  py-1 border-2 overflow-hidden relative border-[#703b34]  rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite}  z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Happy Customer</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[full] sm:w-[80%]  py-1 border-2 overflow-hidden relative border-[#703b34] rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>10+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Years of Experience</h1>
        </div>
    </div>
    <div className="col-span-12 sm:col-span-3">
        <div className="team-achievement-box w-[full] sm:w-[80%]  py-1 border-2 overflow-hidden relative border-[#703b34] rounded-full text-center">
    <div className="team-achievement-circle"></div>
            <h1 className={`text-2xl ${textwhite} z-50 relative hover:text-black`}>25k+</h1>
            <h1 className={` ${textwhite} z-50 relative pb-2`}>Projects Completed</h1>
        </div>
    </div>
</div>
    
    </>
  )
}

export default TeamRating