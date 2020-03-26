import { CONNECT_TO_WEBSOCKET, GET_PAYLOAD, RESET_DATA } from '../actions/dataCollection';

const statuses = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
};

export default function (state = { measurements: [], status: statuses.OFFLINE }, action) {
  switch (action.type) {
    case CONNECT_TO_WEBSOCKET:
      return { ...state, status: statuses.ONLINE };
    case GET_PAYLOAD:
      return { ...state, measurements: [...state.measurements, action.data] };
    case RESET_DATA:
      return { ...state, measurements: [] };
    default:
      return state;
  }
}
