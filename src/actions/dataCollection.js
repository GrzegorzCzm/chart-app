
export const CONNECT_TO_WEBSOCKET = 'CONNECT_TO_WEBSOCKET';
export const GET_PAYLOAD = 'GET_PAYLOAD';
export const RESET_DATA = 'RESET_DATA';

export const websocketConnect = (socket) => (dispatch) => {
  dispatch({ type: CONNECT_TO_WEBSOCKET });
  socket.on('data', (payload) => {
    dispatch({
      type: GET_PAYLOAD,
      data: { x: payload.timestamp, y: payload.value },
    });
  });
};


export const resetData = () => ({
  type: RESET_DATA,
});
