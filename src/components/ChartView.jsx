import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import LineChart from './LineChart';
import BarChart from './BarChart';


const useStyles = makeStyles((theme) => ({
  chartsViewRoot: {
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 600,
    },
    [theme.breakpoints.up('md')]: {
      width: 900,
    },
  },
}));

const ChartView = (props) => {
  const { lineChartData, barChartData } = props;
  const classes = useStyles();

  return (
    <Box className={classes.chartsViewRoot}>
      <LineChart dataValues={lineChartData} />
      <BarChart dataValues={barChartData} />
    </Box>
  );
};

ChartView.propTypes = {
  lineChartData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  barChartData: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default ChartView;
