import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for hourly electrical consumption (hour of the day, consumption in kWh)
const data = [
  { hour: '12 AM', consumption: 150 },
  { hour: '1 AM', consumption: 120 },
  { hour: '2 AM', consumption: 100 },
  { hour: '3 AM', consumption: 80 },
  { hour: '4 AM', consumption: 70 },
  { hour: '5 AM', consumption: 90 },
  { hour: '6 AM', consumption: 120 },
  { hour: '7 AM', consumption: 200 },
  { hour: '8 AM', consumption: 300 },
  { hour: '9 AM', consumption: 450 },
  { hour: '10 AM', consumption: 600 },
  { hour: '11 AM', consumption: 700 },
  { hour: '12 PM', consumption: 800 },
  { hour: '1 PM', consumption: 850 },
  { hour: '2 PM', consumption: 900 },
  { hour: '3 PM', consumption: 1000 },
  { hour: '4 PM', consumption: 1100 },
  { hour: '5 PM', consumption: 1200 },
  { hour: '6 PM', consumption: 1400 },
  { hour: '7 PM', consumption: 1600 },
  { hour: '8 PM', consumption: 1700 },
  { hour: '9 PM', consumption: 1500 },
  { hour: '10 PM', consumption: 1300 },
  { hour: '11 PM', consumption: 1000 },
];

export default class HourlyConsumptionScatterChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="hour" name="Hour of the Day" />
          <YAxis type="number" dataKey="consumption" name="Electricity Consumption" unit="kWh" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Hourly Consumption" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
