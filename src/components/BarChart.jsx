import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';

const data = {
  labels: ['-100 - -50', '-50 - 0', '0 - 50', '50 - 100'],
  datasets: [
    {
      label: 'Ranges',
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
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      }],
  },
};

const getData = (dataValues) => {
  data.datasets[0].data = dataValues;
  return data;
};


const BarChart = (props) => {
  const { dataValues } = props;

  return (
    <Box>
      <Bar
        data={getData(dataValues)}
        options={options}
      />
    </Box>
  );
};

BarChart.propTypes = {
  dataValues: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default BarChart;
