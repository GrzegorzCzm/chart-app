import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Charts from './components/Charts';
import Alert from './components/Alert';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Charts />
      <Alert />
    </Box>
  );
};

export default App;
