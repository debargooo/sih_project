import React, { useState, useEffect } from 'react';
import BarChart from '../components/BarChart/BarChart';
import LineChart from '../components/LineChart/LineChart';
import AreaChart from '../components/AreaChart/AreaChart';
import ScatterChart from '../components/ScatterChart/ScatterChart';

const monthNames = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October",
  "November", "December"
];

const getMonthName = (monthNumber) => monthNames[monthNumber - 1];

export const Home = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [delhiData, setDelhiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const formatDate = (value) => {
    const sanitizedValue = value.replace(/\D/g, '');
    if (sanitizedValue.length <= 4) {
      return sanitizedValue;
    } else if (sanitizedValue.length <= 6) {
      return `${sanitizedValue.slice(0, 4)}-${sanitizedValue.slice(4)}`;
    } else {
      return `${sanitizedValue.slice(0, 4)}-${sanitizedValue.slice(4, 6)}-${sanitizedValue.slice(6, 8)}`;
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(formatDate(e.target.value));
  };

  const handleEndDateChange = (e) => {
    setEndDate(formatDate(e.target.value));
  };

  const processMonthlyData = (data, startDate, endDate) => {
    const startMonth = new Date(startDate);
    const endMonth = new Date(endDate);

    const filteredData = data.filter((entry) => {
      const entryDate = new Date(entry.Month);
      return entryDate >= startMonth && entryDate <= endMonth;
    });

    // Format Month as "Month-Year"
    return filteredData.map((entry) => ({
      name: `${getMonthName(new Date(entry.Month).getMonth() + 1)}-${new Date(entry.Month).getFullYear()}`,
      PeakDemand: parseInt(entry.peak_demand, 10) || 0,
      PeakMet: parseInt(entry.peak_met, 10) || 0,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (startDate && endDate) {
      const filteredMonthlyData = processMonthlyData(delhiData, startDate, endDate);
      setFilteredData(filteredMonthlyData);
    } else {
      console.error('Invalid date range entered.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://cea.nic.in/api/psp_peak.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const allDelhiData = Object.entries(data).flatMap(([year, entries]) =>
        entries.filter((entry) => entry.State.trim() === 'Delhi')
      );
      setDelhiData(allDelhiData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-2 md:p-6 w-full md:w-[80%]">
      <h2 className="text-2xl font-bold mb-4">Select Date Range</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap md:gap-4 space-y-4 mb-6 m-2">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">From:</label>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={startDate}
              onChange={handleStartDateChange}
              className="mt-1 block w-full border px-2 md:px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">To:</label>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
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
      </form>
      <div className="p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-2 md:p-6 text-center">
          <p className="font-semibold text-xl mb-2">Yearly</p>
          <BarChart data={filteredData} />
        </div>
        <div className="p-2 md:p-6 text-center">
          <p className="font-semibold text-xl mb-2">Monthly</p>
          <AreaChart data={filteredData} />
        </div>
        <div className="p-2 md:p-6 text-center">
          <p className="font-semibold text-xl mb-2">Weekly</p>
          <LineChart data={filteredData} />
        </div>
        <div className="p-2 md:p-6 text-center">
          <p className="font-semibold text-xl mb-2">Daily</p>
          <ScatterChart data={filteredData} />
        </div>
      </div>
    </div>
  );
};
