import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { cancelAlert } from '../actions/alerts';


const Alert = (props) => {
  const { isAlert, alertedValue, cancelAlertAction } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isAlert}
      onClose={cancelAlertAction}
      message={`Threshold crossed: ${alertedValue}`}
      action={(
        <IconButton size="small" aria-label="close" color="inherit" onClick={cancelAlertAction}>
          <CloseIcon fontSize="small" />
        </IconButton>
        )}
    />
  );
};

const mapStateToProps = (state) => ({
  isAlert: state.alerts.isAlert,
  alertedValue: state.alerts.alertedValue,
});

const mapDispatchToProps = (dispatch) => ({
  cancelAlertAction: () => {
    dispatch(cancelAlert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
