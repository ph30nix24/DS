import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ServicesIllust, WorkData } from '../../utils';


const HomeServices = () => {
    const [Display, setDisplay] = useState(0)
    
  return (
    <div className='w-full bg-HomeServicesBg py-5 px-3 relative -z-10'>
        <div className='w-full md:flex md:items-end md:justify-center'>
            <h1 className='underline font-heading text-[5vw] text-center font-semibold md:font-medium md:text-[3vw] md:no-underline w-fit md:border-b-2 border-[#222] mb-5 '>What We do
            </h1>
            <div className='hidden md:block'>
                <img src={ServicesIllust} className='w-[100px] h-[100px]' alt="" />
            </div>

        </div>
        <div className='bg-[#fea8af] w-full rounded-md flex flex-col md:flex-row py-10 px-5 lg:w-4/5 lg:mx-[10%]'>
            <div className='w-full md:w-1/2 flex justify-end'>
                <img src={WorkData[Display].image} className='w-3/5 mx-[20%] md:w-4/5 md:mx-[10%]' alt="" />
            </div>
            <div className='w-full md:w-1/2 lg:px-[2.5%] flex flex-col pt-5 md:flex md:flex-row'>
                <div className='flex w-full md:w-[15%] order-1 md:order-2 md:flex-col'>
                    {WorkData.map((elem, index)=> (
                        <div className={`text-[5vw] md:text-[3vw] md:mb-[5%] md:h-[15%] w-[15%] md:w-full mx-[2.5%] md:mx-0 py-3 px-3 backdrop-blur-xl rounded-t-md md:rounded-t-none md:rounded-r-md flex justify-center items-center text-[#222] z-0 ${Display === index ? 'bg-[#ffffff21] shadow-2xl backdrop-blur-lg filter': 'bg-[#fffffHome/ServiceImg'}`} onClick={() => setDisplay(index)} key={index}>
                            <elem.logo/>
                        </div>
                    ))}
                </div>
                <div className='w-[95%] md:w-[85%] mx-[2.5%] md:mx-0 bg-[#ffffff21] shadow-2xl backdrop-blur-lg filter px-3 md:px-5 lg:px-8 py-5 rounded-b-lg rounded-tr-lg md:rounded-tr-none md:rounded-tl-md md:order-1 order-2'>
                    <h1 className='font-heading text-[6vw] md:text-[3vw] text-center text-[#222] font-medium pb-3'>
                        {WorkData[Display].title}
                    </h1>
                    <p className='line-clamp-[14] sm:line-clamp-none font-para text-justify text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.1vw]'>
                        {WorkData[Display].description}
                    </p>
                    <button className='px-2 py-2 font-heading font-medium border-2 mt-5 border-[#222] text-[#222] rounded-md hover:bg-[#222] hover:text-slate-100 text-[3.5vw] sm:text-[2vw] md:text-[1.4vw] lg:text-[1.1vw] transition-all duration-700'>
                        <Link to='/services'>Read More</Link>
                    </button>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default HomeServices