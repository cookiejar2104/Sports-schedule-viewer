import React from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';
import {MdCalendarMonth, MdBrowseGallery, MdAlarmOn} from 'react-icons/md';

const Card = (props) => {
    return (
        <>
            <div className='p-1 rounded-md w-full md:w-[900px] mx-auto mr-6 sm:mr-10 font-catamaran my-0'>
                
                <div className='md:flex justify-evenly mt-4 shadow-md py-4 bg-slate-200 align-middle md:pr-[170px]'>
                    <div className='font-bold sm:text-2xl ml-4 md:ml-10'>{props.team1} <span className='text-blue-600 '>vs</span> {props.team2}</div>
                    <div className='flex md:ml-[50px]'>
                    <div className='ml-4 md:ml-10 flex'>{props.time}<MdAlarmOn className='ml-1 mt-1'/></div>
                    <div className='ml-4 md:ml-10 flex'>{props.date} <MdCalendarMonth className='mt-1 ml-1'/></div>
                    <div className='ml-4 md:ml-10 mr-4 sm:mr-10 flex '>{props.place} <CiLocationOn className='mt-1 ml-1'/> </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Card