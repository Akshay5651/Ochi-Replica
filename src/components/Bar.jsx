import React from 'react'

function Bar() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='bar w-full h-[21vh] border-t-[0.1px] bg-zinc-900 items-center'>
        <div className='h-auto w-full px-4 py-3 flex item-center justify-between'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, id)=>(
              <div className={`text-[0.8rem] ${id === 1 && "ml-[6rem]"} font-["Neue_Montreal"]`}>{item}</div>
            ))}
        <button className='text-[11.5px] px-3 py-[0.15rem] border rounded-[1rem] uppercase'>Start the Project</button>
        </div>
      </div>
  )
}

export default Bar