import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2020',
    PeakDemand: 4000,
    PeakMet: 2400,
    amt: 2400,
  },
  {
    name: '2021',
    PeakDemand: 3000,
    PeakMet: 1398,
    amt: 2210,
  },
  {
    name: '2022',
    PeakDemand: 2000,
    PeakMet: 1100,
    amt: 2290,
  },
  {
    name: '2023',
    PeakDemand: 2780,
    PeakMet: 3908,
    amt: 2000,
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="PeakDemand" fill="#1E3A8A" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="PeakMet" fill="#63C7B2" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
