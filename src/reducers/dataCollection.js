import { GET_PAYLOAD, RESET_DATA } from '../actions/dataCollection';
import { MIN_VALUE } from '../utils/commonValues';

const BUFFER_SIZE = 100000000;
const DIVIDER = 50;

const INITIAL_STATE = {
  measurements: [],
  rangesValues: [0, 0, 0, 0],
};

const actionHandlers = {
  [GET_PAYLOAD]: (state, action) => {
    const tmpRangesValues = [...state.rangesValues];
    const { timestamp, value } = action.data;
    const slotToUpdate = Math.floor((value - MIN_VALUE) / DIVIDER);
    tmpRangesValues[slotToUpdate] += 1;
    let tmpMeasurements = [...state.measurements, { x: timestamp, y: value }];
    const currentLength = tmpMeasurements.length;
    tmpMeasurements = currentLength > BUFFER_SIZE
      ? tmpMeasurements.slice(BUFFER_SIZE / 10)
      : tmpMeasurements;
    return ({
      measurements: tmpMeasurements,
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
