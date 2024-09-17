import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 1',
    PeekDemand: 4000,
    PeekMet: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    PeekDemand: 3000,
    PeekMet: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    PeekDemand: 2000,
    PeekMet: 980,
    amt: 2290,
  },
  {
    name: 'Week 4',
    PeekDemand: 2780,
    PeekMet: 3908,
    amt: 2000,
  },

];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
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
          <Line type="monotone" dataKey="PeekDemand" stroke="#8884d8" activeDot={{ r: 8 }} name="Peak Demand" />
          <Line type="monotone" dataKey="PeekMet" stroke="#82ca9d" name="Peak Met" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
