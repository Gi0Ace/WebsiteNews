import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: { notification: null },
    reducers: {
        showError(state, action) {
            state.notification = {
                title: action.payload.title,
                message: action.payload.message
            };
        },
        resetNotification(state) {
            state.notification = null;
        }
    }
});

export const errorActions = errorSlice.actions;

export default errorSlice;
