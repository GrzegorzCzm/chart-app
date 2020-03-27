import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import Box from '@material-ui/core/Box';

import { websocketConnect, resetData } from '../actions/dataCollection';

import ChartsControls from './ChartsControls';
import ChartView from './ChartView';

const SOCKET_URL = socketIOClient('http://localhost:4000');

class Charts extends React.Component {
  componentDidMount() {
    const { websocketConnectAction } = this.props;
    websocketConnectAction(SOCKET_URL);
  }

  render() {
    const {
      measurements, rangesValues, resetDataAction,
    } = this.props;

    return (
      <Box>
        <ChartsControls resetData={resetDataAction} />
        <ChartView lineChartData={measurements} barChartData={rangesValues} />
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  measurements: state.dataCollection.measurements,
  rangesValues: state.dataCollection.rangesValues,
});

const mapDispatchToProps = (dispatch) => ({
  websocketConnectAction: (definedSocket) => {
    dispatch(websocketConnect(definedSocket));
  },
  resetDataAction: () => {
    dispatch(resetData());
  },
});

Charts.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  rangesValues: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  resetDataAction: PropTypes.func.isRequired,
  websocketConnectAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
