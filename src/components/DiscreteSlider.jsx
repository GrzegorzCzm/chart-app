import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { setAlertThreshold } from '../actions/alerts';
import { MIN_VALUE, MAX_VALUE } from '../utils/commonValues';

const useStyles = makeStyles({
  root: {
    width: '100%',
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
        defaultValue={MAX_VALUE}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={MIN_VALUE}
        max={MAX_VALUE}
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

DiscreteSlider.propTypes = {
  alertThreshold: PropTypes.number.isRequired,
  setAlertThresholdAction: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(DiscreteSlider);
