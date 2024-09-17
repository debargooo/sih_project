import React from 'react'
import ShapeChart from '../components/ShapeChart/ShapeChart'
import LineChart2 from '../components/LineChart/LineChart2'

const Temperature = () => {
  return (
    
    <div className="p-2 md:p-6 mb-4 w-full md:w-[80%]">
        <h1 className='font-semibold text-4xl'>Monthly Temperature & Electricity Consumption</h1>
        
        <div className='w-[70vw] flex mt-8 items-center'>
          <div className='w-[60vw]'>
          <h2 className='font-semibold text-2xl my-2 text-center'>August</h2>
        <LineChart2/>
          </div>
        <ShapeChart/>
        </div>
   
    </div>
    

  )
}

export default Temperature