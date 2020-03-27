import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


import DiscreteSlider from './DiscreteSlider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: '10px',
  },
});

const ChartsControls = (props) => {
  const { resetData } = props;
  const classes = useStyles();


  return (
    <Box className={classes.root}>
      <DiscreteSlider />
      <Button startIcon={<DeleteIcon />} size="small" variant="outlined" color="primary" onClick={resetData}>Reset data</Button>
    </Box>
  );
};

ChartsControls.propTypes = {
  resetData: PropTypes.func.isRequired,
};

export default ChartsControls;
