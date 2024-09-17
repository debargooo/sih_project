import React from 'react'
import ShapeChart from '../components/ShapeChart/ShapeChart'
import LineChart from '../components/LineChart/LineChart'

const Temperature = () => {
  return (
    
    <div className="p-2 md:p-6 w-full md:w-[80%]">
        <h1 className='font-semibold text-4xl'>Monthly Temperature & Electricity Consumption</h1>
        <div className='w-[70vw] flex mt-8'>
        <LineChart/>
        <ShapeChart/>
        </div>
   
    </div>
    

  )
}

export default Temperature