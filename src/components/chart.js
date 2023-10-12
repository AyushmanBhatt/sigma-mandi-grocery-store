import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';
import "../css/chart.css";
import csvData from "./data"; // Import csvData from the new file



export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedDate: '',
    };
  }

  componentDidMount() {
    // Parse the embedded CSV data
    Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const rawData = result.data;
        const vegetableNames = Object.keys(rawData[0]).filter((key) => key !== 'Date');
        const processedData = [];

        rawData.forEach((row) => {
          const date = row['Date'];
          vegetableNames.forEach((vegetableName) => {
            const price = parseInt(row[vegetableName], 10);
            if (!isNaN(price)) {
              processedData.push({
                date,
                vegetable: vegetableName,
                price,
              });
            }
          });
        });

        const uniqueDates = [...new Set(rawData.map((row) => row['Date']))];
        this.setState({ data: processedData, uniqueDates, selectedDate: uniqueDates[0] });
      },
    });
  }

  handleDateChange = (event) => {
    this.setState({ selectedDate: event.target.value });
  };

  render() {
    const { data, uniqueDates, selectedDate } = this.state;
  
    // Check if uniqueDates is empty or undefined
    if (!uniqueDates || uniqueDates.length === 0) {
      return <div>Loading...</div>;
    }
  
    const filteredData = data.filter((item) => item.date === selectedDate);
  
    return (
      <div className='chart'>
        <div className='charttitle'>Vegetable Prices for Selected Date: {selectedDate}</div>
        <div className='date-selector'>
          <label htmlFor="dateSelect">Select Date: </label>
          <select id="dateSelect" onChange={this.handleDateChange} value={selectedDate}>
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" aspect={2 / 1.2}>
          <BarChart
            width={500}
            height={200}
            data={filteredData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 90, // Increased bottom margin to accommodate X-axis labels
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="vegetable" angle={-45} textAnchor="end" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
};  