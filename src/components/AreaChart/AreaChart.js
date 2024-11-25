// In ../components/AreaChart/AreaChart.js (or .jsx)
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AreaChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={450}>
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="PeakDemand"
        stackId="1"
        stroke="#1E3A8A"
        fill="#1E3A8A"
      />
      <Area
        type="monotone"
        dataKey="PeakMet"
        stackId="1"
        stroke="#63C7B2"
        fill="#63C7B2"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default AreaChartComponent;