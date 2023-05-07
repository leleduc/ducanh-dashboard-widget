import React, { PureComponent, useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     name: '2023/05/07',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '2023/05/06',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '2023/05/05',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2023/05/04',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2023/05/03',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2023/05/02',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023/05/01',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: '2023/04/30',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '2023/04/29',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '2023/04/28',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2023/04/27',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2023/04/26',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2023/04/25',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023/04/24',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: '2023/04/23',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '2023/04/22',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '2023/04/21',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2023/04/20',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2023/04/19',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2023/04/18',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023/04/17',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: '2023/04/16',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '2023/04/15',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2023/04/14',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2023/04/13',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2023/04/12',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023/04/11',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: '2023/04/10',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '2023/04/09',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '2023/04/08',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2023/04/07',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2023/04/06',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2023/04/05',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023/04/04',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: '2023/04/03',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2023/04/02',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: '2023/04/01',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const App = () => {
  const options = [
    { value: 'one-week', label: 'last 7 days' },
    { value: 'two-weeks', label: '15 days' },
    { value: 'one-month', label: '1 month' },
  ];

  const [dataTable, setDataTable] = useState([]);

  fetch('http://localhost/phukienoto/wp-json/ducanh/v1/chart-data')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDataTable(data);
    });

  console.log(dataTable);

  const [selected, setSelected] = useState(options[0].value);
  let [chartData, setChartData] = useState(dataTable.slice(0, 7));

  var handleChange = (event) => {
    setSelected(event.target.value);
    console.log(event.target.value);

    console.log(selected);
    if (event.target.value == 'one-week') {
      setChartData(dataTable.slice(0, 7));
      return;
    } else if (event.target.value == 'two-weeks') {
      setChartData(dataTable.slice(0, 14));
      return;
    } else if (event.target.value == 'one-month') {
      setChartData(dataTable.slice(0, 30));
      return;
    }
  };

  return (
    <div className="main-wrapper">
      <div className="title-wrapper">
        <h2 className="app-title"></h2>
        <select id="date-range-select" value={selected} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="chart-wrapper">
        <LineChart
          width={380}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data_date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="data_pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="data_uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;
