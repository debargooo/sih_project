import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Example = ({ data }) => {
  console.log('Data for Bar Chart:', data); // Log data passed to the chart
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="PeakDemand" fill="#1E3A8A" />
        <Bar dataKey="PeakMet" fill="#63C7B2" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;