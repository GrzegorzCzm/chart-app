import React from 'react';
import PropTypes from 'prop-types';
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

const getData = ({ dataValues, labelsValues }) => {
  data.datasets[0].data = dataValues;
  data.labels = labelsValues;
  return data;
};


const BarChart = (props) => {
  const { dataValues, labelsValues } = props;

  return (
    <div>
      <Bar
        data={getData({ dataValues, labelsValues })}
        options={options}
      />
    </div>
  );
};

BarChart.propTypes = {
  dataValues: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  labelsValues: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default BarChart;
