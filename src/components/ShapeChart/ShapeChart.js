import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for monthly temperature and electricity consumption
const data = [
  { month: 'Jan', temperature: 24, consumption: 1200 },
  { month: 'Feb', temperature: 28, consumption: 1300 },
  { month: 'Mar', temperature: 30, consumption: 1500 },
  { month: 'Apr', temperature: 32, consumption: 1600 },
  { month: 'May', temperature: 35, consumption: 1800 },
  { month: 'Jun', temperature: 38, consumption: 2000 },
  { month: 'July', temperature: 37, consumption: 2100 },
  { month: 'Aug', temperature: 40, consumption: 2050 },
  { month: 'Sept', temperature: 28, consumption: 1900 },
  { month: 'Oct', temperature: 25, consumption: 1700 },
  { month: 'Nov', temperature: 22, consumption: 1500 },
  { month: 'Dec', temperature: 20, consumption: 1400 },
];

// Colors for the bars
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF9999', '#FFCC99'];

// Function to create the pyramid path
const getPyramidPath = (x, y, width, height) => {
  return `M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`;
};

// Custom pyramid bar component
const PyramidBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPyramidPath(x, y, width, height)} fill={fill} />;
};

const ShapeChart = () => {
  // Sort data by temperature in descending order
  const sortedData = [...data].sort((a, b) => b.temperature - a.temperature);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" shape={<PyramidBar />} label={{ position: 'top', fill: '#000' }}>
          {sortedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ShapeChart;
