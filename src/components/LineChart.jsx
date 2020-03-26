import React from 'react';
import { Scatter } from 'react-chartjs-2';
import moment from 'moment';

const data = {
  datasets: [
    {
      label: 'Measurments',
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      showLine: true,
      data: [],
    },

  ],
};

const options = {
  scales: {
    xAxes: [{
      ticks: {
        userCallback(label) {
          return moment(label).format('hh:mm:ss');
        },
      },
    }],
  },

};

const LineChart = (props) => {
  data.datasets[0].data = props.dataValues;
  return (
    <div>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default LineChart;
