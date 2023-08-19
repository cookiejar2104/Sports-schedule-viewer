import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';
import {MdCalendarMonth, MdBrowseGallery, MdAlarmOn} from 'react-icons/md';

const Card = (props) => {
    return (
        <>
            <div className='p-4 rounded-md w-full md:w-[900px] mx-auto mr-6 sm:mr-10 font-catamaran'>
                
                <div className='md:flex justify-evenly mt-4 shadow-md py-4 bg-slate-200 align-middle md:pr-[170px]'>
                    <div className='font-bold sm:text-2xl ml-4 md:ml-10'>Team1 <span className='text-blue-600 '>vs</span> Team2</div>
                    <div className='flex md:ml-[80px]'>
                    <div className='ml-4 md:ml-10 flex'>7:40pm <MdAlarmOn className='ml-1 mt-1'/></div>
                    <div className='ml-4 md:ml-10 flex'>07/09/2023 <MdCalendarMonth className='mt-1 ml-1'/></div>
                    <div className='ml-4 md:ml-10 mr-4 sm:mr-10 flex '>London <CiLocationOn className='mt-1 ml-1'/> </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Card