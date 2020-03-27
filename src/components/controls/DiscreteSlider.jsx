import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';

import { setAlertThreshold } from '../../actions/alerts';
import { MIN_VALUE, MAX_VALUE } from '../../utils/commonValues';

const useStyles = makeStyles((theme) => ({
  rootSlider: {
    [theme.breakpoints.down('sm')]: {
      width: 100,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 300,
    },
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    padding: '0px 20px',
  },
  text: {
    fontSize: theme.typography.pxToRem(12),
    color: 'gray',
  },
  slider: {
    color: 'gray',
  },
}));

const marks = [
  {
    value: -100,
    label: '-100',
  },
  {
    value: -50,
    label: '-50',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `Alert threshold: ${value}`;
}

const DiscreteSlider = (props) => {
  const { alertThreshold, setAlertThresholdAction } = props;
  const classes = useStyles();

  return (
    <Box className={classes.rootSlider} borderRadius="borderRadius" border={1} borderColor="gray">
      <Typography className={classes.text} id="discrete-slider">
        Alert threshold:
      </Typography>
      <Slider
        className={classes.slider}
        onChange={((event, value) => setAlertThresholdAction(value))}
        value={alertThreshold}
        defaultValue={MAX_VALUE}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks={marks}
        min={MIN_VALUE}
        max={MAX_VALUE}
      />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  alertThreshold: state.alerts.alertThreshold,
});


const mapDispatchToProps = (dispatch) => ({
  setAlertThresholdAction: (threshold) => {
    dispatch(setAlertThreshold(threshold));
  },
});

DiscreteSlider.propTypes = {
  alertThreshold: PropTypes.number.isRequired,
  setAlertThresholdAction: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(DiscreteSlider);
