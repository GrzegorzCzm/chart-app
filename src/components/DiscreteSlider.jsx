import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';

import { setAlertThreshold } from '../actions/alerts';
import { MIN_VALUE, MAX_VALUE } from '../utils/commonValues';

const useStyles = makeStyles((theme) => ({
  rootSlider: {
    [theme.breakpoints.down('sm')]: {
      width: 100,
    },
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
  },
  text: {
    fontSize: theme.typography.pxToRem(10),
  },
}));

function valuetext(value) {
  return `Alert threshold: ${value}`;
}

const DiscreteSlider = (props) => {
  const { alertThreshold, setAlertThresholdAction } = props;
  const classes = useStyles();

  return (
    <Box className={classes.rootSlider}>
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
        marks
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
