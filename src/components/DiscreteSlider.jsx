import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { setAlertThreshold } from '../actions/alerts';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  text: {
    color: 'black',
  },
});

function valuetext(value) {
  return `Alert threshold: ${value}`;
}

const DiscreteSlider = (props) => {
  const { alertThreshold, setAlertThresholdAction } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text} id="discrete-slider" gutterBottom>
        Alert threshold:
      </Typography>
      <Slider
        onChange={((event, value) => setAlertThresholdAction(value))}
        value={alertThreshold}
        defaultValue={100}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={-100}
        max={100}
      />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DiscreteSlider);
