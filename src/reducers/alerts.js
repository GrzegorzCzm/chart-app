import { SET_ALERT_THRESHOLD, CANCEL_ALERT } from '../actions/alerts';
import { GET_PAYLOAD, CONNECTION_STATUS_CHANGED } from '../actions/dataCollection';

const CROSSED_THRESHOLD_TEXT = 'Threshold crossed: ';

const INITIAL_STATE = {
  alertThreshold: 100,
  isAlert: false,
  alertText: '',
};

const actionHandlers = {
  [SET_ALERT_THRESHOLD]: (state, action) => ({ alertThreshold: action.data }),
  [GET_PAYLOAD]: (state, action) => {
    const { value } = action.data;
    const isAlert = value > state.alertThreshold;
    if (isAlert) {
      return ({
        isAlert: action.data.value > state.alertThreshold,
        alertText: CROSSED_THRESHOLD_TEXT + value,
      });
    }
    return null;
  },
  [CANCEL_ALERT]: () => ({ isAlert: false }),
  [CONNECTION_STATUS_CHANGED]: (state, action) => ({ isAlert: true, alertText: action.data }),
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
