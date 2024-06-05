import React from 'react'

const Section = () => {
  return (
    <>
    <div className="section h-[58vh] px-5 py-[4.5rem] w-full border-b-[0.5px] border-[#6f7c3e] bg-[#CDEA68]">
        <h1 className="text-black text-[2.9rem] leading-[3.1rem] tracking-loose font-['Neue_Montreal']">
          Ochi is a strategic partner for fast-growing tech<br/> businesses that need
          to <span className='text-black w-fit border-b-[3px] border-black'>raise funds</span>, <span className='text-black w-fit border-b-[3px] border-black'>sell products</span>,<br/> <span className='text-black w-fit border-b-[3px] border-black'>explain complex ideas</span>, and <span className='text-black w-fit border-b-[3px] border-black'>hire great
          people</span>.
        </h1>
      </div>
      <div className="h-[90vh] w-full flex px-5 py-1 bg-[#CDEA68] ">
        <div className="left w-1/2 font-['Neue_Montreal']">
          <div className="text-black text-[2.5rem] mb-2">Our approach:</div>
          <button className="flex items-center gap-[1.5rem] text-[0.7rem] px-[1.3rem] py-[0.78rem] border-none text-white bg-black rounded-full uppercase">Read More
            <div className="h-1.5 w-1.5 text-4xl rounded-xl bg-white"></div>
          </button>
        </div>
        <div className="right h-[90%] py-2 w-1/2">
          <img className="h-full w-full rounded-lg bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] ">
          </img>
        </div>
      </div>
    </>
  )
}

export default Section