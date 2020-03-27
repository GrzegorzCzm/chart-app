import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  rootTimeSlot: {
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    marginRight: '10px',
  },
}));


const TimeSlot = (props) => {
  const { updateTimeWindow } = props;
  const classes = useStyles();

  return (
    <Box className={classes.rootTimeSlot}>
      <form noValidate>
        <TextField
          variant="outlined"
          onChange={updateTimeWindow}
          id="time"
          label="Time window: "
          type="time"
          defaultValue="00:00:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 500,
          }}
        />
      </form>
    </Box>
  );
};

TimeSlot.propTypes = {
  updateTimeWindow: PropTypes.func.isRequired,
};

export default TimeSlot;
