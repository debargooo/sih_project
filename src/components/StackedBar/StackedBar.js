import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for Delhi area-wise electricity consumption (in kWh)
const data = [
  {
    name: 'North Delhi',
    consumptionDay: 5000,
    consumptionNight: 3500,
  },
  {
    name: 'South Delhi',
    consumptionDay: 6000,
    consumptionNight: 4000,
  },
  {
    name: 'East Delhi',
    consumptionDay: 4500,
    consumptionNight: 3000,
  },
  {
    name: 'West Delhi',
    consumptionDay: 7000,
    consumptionNight: 5000,
  },
  {
    name: 'Central Delhi',
    consumptionDay: 5500,
    consumptionNight: 3500,
  },
  {
    name: 'New Delhi',
    consumptionDay: 6200,
    consumptionNight: 4800,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

  render() {
    return (
      <ResponsiveContainer width="40%" height={600}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Delhi Areas', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Electricity Consumption (kWh)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="consumptionDay" stackId="a" fill="#8884d8" name="Day Consumption" />
          <Bar dataKey="consumptionNight" stackId="a" fill="#82ca9d" name="Night Consumption" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
