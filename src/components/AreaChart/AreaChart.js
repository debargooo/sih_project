import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Updated data with monthly electricity demand for different regions
const data = [
  { month: 'Jan', Residential: 5000, Commercial: 3000, Industrial: 8000 },
  { month: 'Feb', Residential: 5200, Commercial: 3100, Industrial: 8100 },
  { month: 'Mar', Residential: 5500, Commercial: 3300, Industrial: 8500 },
  { month: 'Apr', Residential: 5300, Commercial: 3200, Industrial: 8600 },
  { month: 'May', Residential: 5600, Commercial: 3400, Industrial: 8700 },
  { month: 'Jun', Residential: 5700, Commercial: 3500, Industrial: 8800 },
  { month: 'Jul', Residential: 5900, Commercial: 3700, Industrial: 9000 },
  { month: 'Aug', Residential: 6000, Commercial: 3800, Industrial: 9100 },
  { month: 'Sep', Residential: 5800, Commercial: 3600, Industrial: 8900 },
  { month: 'Oct', Residential: 5500, Commercial: 3400, Industrial: 8700 },
  { month: 'Nov', Residential: 5300, Commercial: 3200, Industrial: 8500 },
  { month: 'Dec', Residential: 5000, Commercial: 3000, Industrial: 8200 },
];

export default class DemandProjectionChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Residential" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Commercial" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Industrial" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
