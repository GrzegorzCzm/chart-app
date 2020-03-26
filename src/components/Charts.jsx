import React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import Button from '@material-ui/core/Button';

import { websocketConnect, resetData } from '../actions/dataCollection';

import LineChart from './LineChart';
import BarChart from './BarChart';
import DiscreteSlider from './DiscreteSlider';

const socket = socketIOClient('http://localhost:4000');

class Charts extends React.Component {
  componentDidMount() {
    this.props.websocketConnectAction(socket);
  }

  render() {
    const {
      measurements, rangesValues, rangesLabels, resetDataAction,
    } = this.props;

    return (
      <div>
        <Button variant="contained" color="primary" onClick={resetDataAction}>Reset data</Button>
        <DiscreteSlider />
        <LineChart dataValues={measurements} />
        <BarChart dataValues={rangesValues} labelsValues={rangesLabels} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  measurements: state.dataCollection.measurements,
  rangesValues: state.dataCollection.rangesValues,
  rangesLabels: state.dataCollection.rangesLabels,
});

const mapDispatchToProps = (dispatch) => ({
  websocketConnectAction: (definedSocket) => {
    dispatch(websocketConnect(definedSocket));
  },
  resetDataAction: () => {
    dispatch(resetData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
