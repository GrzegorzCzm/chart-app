import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      minBarLength: 2,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      }],
  },
};
const BarChart = (props) => {
  const { dataValues, labelsValues } = props;
  data.datasets[0].data = dataValues;
  data.labels = labelsValues;
  return (
    <div>
      <Bar
        data={data}
        width={400}
        height={300}
        options={options}
      />
    </div>
  );
};

export default BarChart;
