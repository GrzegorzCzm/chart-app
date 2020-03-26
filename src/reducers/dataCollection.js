import { CONNECT_TO_WEBSOCKET, GET_PAYLOAD, RESET_DATA } from '../actions/dataCollection';

const statuses = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
};

const MIN_VALUE = -100;
const MAX_VALUE = 100;
const DIVIDER = 50;

const INITIAL_STATE = {
  measurements: [],
  rangesValues: [0, 0, 0, 0],
  rangesLabels: ['-100->-50', '-50-0', '0-50', '50-100'],

  status: statuses.OFFLINE,
};

const actionHandlers = {
  [CONNECT_TO_WEBSOCKET]: () => ({ status: statuses.ONLINE }),
  [GET_PAYLOAD]: (state, action) => {
    const tmpRangesValues = [...state.rangesValues];
    const { timestamp, value } = action.data;
    const slotToUpdate = Math.floor((value - MIN_VALUE) / DIVIDER);
    tmpRangesValues[slotToUpdate] += 1;
    return ({
      measurements: [...state.measurements, { x: timestamp, y: value }],
      rangesValues: tmpRangesValues,
    });
  },
  [RESET_DATA]: () => ({ measurements: [], rangesValues: INITIAL_STATE.rangesValues }),
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return ({
      ...state, ...actionHandler(state, action),
    });
  }
  return state;
};

export default reducer;
