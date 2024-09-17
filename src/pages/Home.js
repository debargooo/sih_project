import React, { useState } from 'react';
import Slidebar from '../components/Slidebar/Slidebar';
import BarChart from '../components/BarChart/BarChart';
import LineChart from '../components/LineChart/LineChart';
import AreaChart from '../components/AreaChart/AreaChart';
import ScatterChart from '../components/ScatterChart/ScatterChart';



export const Home = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { startDate, endDate });
  };

  return (
      <div className="p-2 md:p-6 w-full md:w-[80%]">
      <h2 className="text-2xl font-bold mb-4">Select Date Range</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap md:gap-4 space-y-4 mb-6 m-2">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="from" className="block text-sm font-medium text-gray-700">From:</label>
                <input
                  type="date"
                  id="from"
                  name="from"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="mt-1 block w-full border px-2 md:px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div> 
              <div className="flex-1">
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">To:</label>
                <input
                  type="date"
                  id="to"
                  name="to"
                  value={endDate}
                  onChange={handleEndDateChange}
                  className="mt-1 block w-full border px-2 md:px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Download Report
            </button>
          </form>
        <div className="bg-white p-2 md:p-6  grid grid-cols-1 md:grid-cols-2 gap-4">
         
          <div className="bg-white p-2 md:p-6 text-center">
           
            <p className='font-semibold text-xl mb-2'>Yearly</p>
           
            
        
            <BarChart />
          </div>
          <div className="bg-white p-2 md:p-6 text-center">
          <div className='flex justify-center items-center gap-4 mb-4'>
            <p className='font-semibold text-xl'>Monthly</p>
            
          </div>
            <AreaChart />
          </div>
          <div className="bg-white p-2 md:p-6 text-center">
          <div className='flex justify-center items-center gap-4 mb-4'>
            <p className='font-semibold text-xl'>Weekly</p>
            
            </div>
            <LineChart />
          </div>
          <div className="bg-white p-2 md:p-6 text-center">
          <div className='flex justify-center items-center gap-4 mb-4'>
            <p className='font-semibold text-xl'>Daily</p>
            
            </div>
            <ScatterChart />
          </div>
        </div>
      </div>
    
  );
};
