import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { cancelAlert } from '../../actions/alerts';


const Alert = (props) => {
  const { isAlert, alertText, cancelAlertAction } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isAlert}
      onClose={cancelAlertAction}
      message={alertText}
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
  alertText: state.alerts.alertText,
});

const mapDispatchToProps = (dispatch) => ({
  cancelAlertAction: () => {
    dispatch(cancelAlert());
  },
});

Alert.propTypes = {
  isAlert: PropTypes.bool.isRequired,
  alertText: PropTypes.string,
  cancelAlertAction: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  alertText: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
