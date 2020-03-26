import React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { websocketConnect, resetData } from '../actions/dataCollection';

import LineChart from './LineChart';

const socket = socketIOClient('http://localhost:4000');

class Charts extends React.Component {
  componentDidMount() {
    this.props.websocketConnectAction(socket);
  }

  render() {
    const { measurements, resetDataAction } = this.props;

    return (
      <div>
        <button onClick={resetDataAction}>Reset data</button>
        <LineChart data={measurements} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  measurements: state.dataCollection.measurements,
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
