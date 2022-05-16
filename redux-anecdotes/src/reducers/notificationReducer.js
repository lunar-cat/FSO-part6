import { createSlice } from '@reduxjs/toolkit';

const initialState = { content: null, timeoutID: null };

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification(state, action) {
      return { ...state, content: action.payload };
    },
    removeNotification(state, action) {
      return { ...state, content: null };
    },
    addTimeoutID(state, action) {
      return { ...state, timeoutID: action.payload };
    },
    removeTimeoutID(state, action) {
      return { ...state, timeoutID: null };
    }
  }
});

export const { addNotification, removeNotification, addTimeoutID, removeTimeoutID } = notificationSlice.actions;
export const setNotification = (content, seconds) => {
  return (dispatch, getState) => {
    const lastTimeoutID = getState().notification.timeoutID;
    if (lastTimeoutID !== null) {
      clearTimeout(lastTimeoutID);
      dispatch(removeTimeoutID());
    }
    dispatch(addNotification(content));
    const timeoutID = setTimeout(() => {
      dispatch(removeNotification());
    }, seconds * 1000);
    dispatch(addTimeoutID(timeoutID));
  };
};
export default notificationSlice.reducer;