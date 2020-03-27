export const GET_PAYLOAD = 'GET_PAYLOAD';
export const RESET_DATA = 'RESET_DATA';
export const CONNECTION_STATUS_CHANGED = 'CONNECTION_STATUS_CHANGED';


export const websocketConnect = (socket) => (dispatch) => {
  socket.on('connect', () => {
    dispatch({
      type: CONNECTION_STATUS_CHANGED,
      data: 'Connected',
    });
  });

  socket.on('data', (payload) => {
    dispatch({
      type: GET_PAYLOAD,
      data: payload,
    });
  });

  socket.on('disconnect', () => {
    dispatch({
      type: CONNECTION_STATUS_CHANGED,
      data: 'Disconnected',
    });
  });
};


export const resetData = () => ({
  type: RESET_DATA,
});
