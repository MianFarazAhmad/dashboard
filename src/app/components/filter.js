import React from 'react'

export default function Filter() {
  return (
    <div className='flex justify-between items-center pt-5 '>
    <div className='flex items-center'>
       <p className='mr-4 text-lg font-medium  '>Filter by Company: </p> 
       <button className='border-2 border-[#191D3182] text-[#191D3182] text-xs py-2 px-4 rounded'>All Companies </button>
    </div>

    <p className='text-xs'>Viewing Data for all Companies</p>
    </div>
  )
}
