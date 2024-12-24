import React, { useState } from 'react'
import { FaNewspaper } from "react-icons/fa6";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Blog, BlogBottom, BlogTop } from '../../utils';

const HomeNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? blog.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === blog.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className='w-full relative -z-10 bg-News py-5 px-3 md:px-5'>
      <div className='flex flex-row gap-2 md:gap-5 items-center md:items-end font-medium '>
        <div className='text-[8vw] sm:text-[6vw] md:text-[4.5vw] text-[#222]'>
          <FaNewspaper />
        </div>
        <h1 className='text-[6vw] sm:text-[4.5vw] md:text-[3vw] font-heading text-[#222] border-b-2 border-[#222]'>
          Latest News and Updates
        </h1>
        <div className='hidden lg:block'>
          <img src={BlogTop} className='w-[100px]' alt="" />
        </div>
      </div>
      <div className='text-center py-5 font-para text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw]'>
      There’s always happening something in the Digital Samael. Check out the latest news, articles and updates.
      </div>
      <div className='w-full flex flex-row px-2 py-3 gap-[5%] flex-wrap justify-center md:justify-start gap-y-5 md:flex-nowrap overflow-x-hidden lg:px-10'>
        {Blog.map((elem, index)=> (
          <div className='hover:scale-[1.02] w-[45%] md:w-[30%]  bg-[#ffffff3c] shadow-how px-1 py-3 shrink-0 md:pb-5 transition-all duration-700'
          key={index}
          style={{ transform: `translateX(-${activeIndex * 115}%)` }}
          >
            <Link to='/blogs'>
              <div className=''>
                <div className='w-full md:h-[20vw] md:pb-3'>
                  <img src={elem.imgSrc} className='w-[90%] mx-[5%] aspect-square md:aspect-auto h-full md:object-cover  object-contain' alt="" />
                </div>
                <div className='w-full flex text-[1.8vw] md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1vw] justify-between px-3 font-medium font-heading'>
                  <div>
                    {elem.type}
                  </div>
                  <div>
                    {elem.date}
                  </div>
                </div>
                <div className='text-[3vw] md:text-[2.2vw] md:h-[10vw] lg:h-[8vw] lg:text-[2vw] flex items-center font-heading px-3 pt-2 hover:underline text-orange-500'>
                  {elem.title}
                </div>
                <div className='hidden lg:line-clamp-3 lg:text-[1.3vw] xl:text-[1.2vw] lg:px-3 font-para lg:mb-4'>
                  {elem.content}
                </div>
                <button className='hidden lg:block lg:ml-3 px-3 py-2 border-2 border-[#333] rounded-lg'>
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='w-full hidden md:flex flex-row justify-center items-center text-[4vw] pt-5 gap-2 text-[#222] lg:pb-10 relative'>
        <div className='bg-[#e78a9296] shadow-how p-1 rounded-full' onClick={handlePrev}>
          <BsArrowLeftShort/>
        </div>
        <div className='bg-[#e78a9296] shadow-how p-1 rounded-full' onClick={handleNext}>
          <BsArrowRightShort/>
        </div>
        <div className='hidden lg:block absolute w-[300px] bottom-0 right-0'>
          <img src={BlogBottom} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeNews