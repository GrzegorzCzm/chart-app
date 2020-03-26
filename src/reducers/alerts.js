import { SET_ALERT_THRESHOLD, CANCEL_ALERT } from '../actions/alerts';
import { GET_PAYLOAD } from '../actions/dataCollection';


const INITIAL_STATE = {
  alertThreshold: 100,
  isAlert: false,
  alertedValue: null,
};

const actionHandlers = {
  [SET_ALERT_THRESHOLD]: (state, action) => ({ alertThreshold: action.data }),
  [GET_PAYLOAD]: (state, action) => {
    const { value } = action.data;
    const isAlert = value > state.alertThreshold;
    if (isAlert) {
      return ({
        isAlert: action.data.value > state.alertThreshold,
        alertedValue: value,
      });
    }
    return null;
  },
  [CANCEL_ALERT]: () => ({ isAlert: false }),
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
