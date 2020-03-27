import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Scatter } from 'react-chartjs-2';
import moment from 'moment';
import Box from '@material-ui/core/Box';

import TimeSlot from './controls/TimeSlot';

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
  legend: {
    display: false,
  },
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


const getOptions = ({ dataValues, timeWindow }) => {
  if (dataValues.length > 0) {
    const newMax = Math.ceil(dataValues[dataValues.length - 1].x / 1000) * 1000;
    const newMin = newMax - timeWindow;
    options.scales.xAxes[0].ticks.min = newMin;
    options.scales.xAxes[0].ticks.max = newMax;
  }
  options.scales.xAxes[0].ticks.stepSize = timeWindow / 10;
  return options;
};


const LineChart = (props) => {
  const { dataValues } = props;

  const [timeWindow, setTimeWindow] = useState(30000);

  const updateTimeWindow = (event) => {
    const { value } = event.target;
    const splittedTime = value.split(':');
    const newTimeWindow = parseInt(splittedTime[2], 10) * 1000
    + parseInt(splittedTime[1], 10) * 1000 * 60
    + parseInt(splittedTime[0], 10) * 1000 * 60 * 60;
    setTimeWindow(newTimeWindow);
  };
  return (
    <Box>
      <TimeSlot updateTimeWindow={updateTimeWindow} />
      <Scatter
        height={80}
        data={getData(dataValues)}
        options={getOptions({ dataValues, timeWindow })}
      />
    </Box>
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
