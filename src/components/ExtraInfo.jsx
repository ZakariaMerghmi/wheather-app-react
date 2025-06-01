import React from 'react'

const ExtraInfo = ({wheather , error}) => {
  if (error) {
    return (
      <></>
    );}

  if (!wheather || !wheather.current || !wheather.location) {
    return <p className="text-white"></p>;
  } 
  return (
   
    <div className='w-[80%] h-[40%] flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-20 md:gap-20 gap-10'>
        
            <div className="flex flex-row items-center justify-center text-amber-50 font-light gap-3 w-[80%] h-[40%] ">
            <i className="fa-solid fa-water text-base sm:text-lg lg:text-5xl" ></i>
            <div className='flex flex-col  items-center justify-center font-bold '>
            <span>{wheather.current.humidity}%</span>
            <p className='hidden md:block lg:block'>humidity</p>
            </div>
                
            </div>
            <div className="flex flex-row items-center justify-center text-amber-50 font-light gap-3 w-[80%] h-[40%] ">
                <i className="fa-solid fa-wind text-base sm:text-lg lg:text-5xl" ></i>
                <div className='flex flex-col items-center justify-center font-bold'>
                <span>{wheather.current.wind_speed}km\h</span>
                <p className='hidden md:block lg:block'>wind</p>
                </div>
                   
            </div>
        </div>
  )
}

export default ExtraInfo;
