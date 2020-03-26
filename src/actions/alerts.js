export const SET_ALERT_THRESHOLD = 'SET_ALERT_THRESHOLD';
export const CANCEL_ALERT = 'CANCEL_ALERT';


export const setAlertThreshold = (threshold) => ({
  type: SET_ALERT_THRESHOLD,
  data: threshold,
});

export const cancelAlert = () => ({
  type: CANCEL_ALERT,
});
