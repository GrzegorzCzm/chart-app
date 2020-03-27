import React from 'react';
import PropTypes from 'prop-types';
import { Scatter } from 'react-chartjs-2';
import moment from 'moment';

const data = {
  datasets: [
    {
      label: 'Measurments',
      lineTension: 0,
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
          return moment(label).format('HH:mm:ss');
        },
        stepSize: 5000,
      },
    }],
  },

};

const getData = (dataValues) => {
  data.datasets[0].data = dataValues;
  return data;
};


const getOptions = (dataValues) => {
  if (dataValues.length > 0) {
    const newMax = Math.ceil(dataValues[dataValues.length - 1].x / 1000) * 1000;
    const newMin = newMax - 50000;
    options.scales.xAxes[0].ticks.min = newMin;
    options.scales.xAxes[0].ticks.max = newMax;
  }
  return options;
};


const LineChart = (props) => {
  const { dataValues } = props;

  return (
    <div>
      <Scatter data={getData(dataValues)} options={getOptions(dataValues)} />
    </div>
  );
};


LineChart.propTypes = {
  dataValues: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LineChart;
