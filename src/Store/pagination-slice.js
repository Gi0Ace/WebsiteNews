import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        currentPage: 1,
        dataLimit: 10,
        totalCount: 0,
        siblingCount: 1
    },
    reducers: {
        setCount(state, action) {
            state.totalCount = action.payload;
        },
        setPage(state, action) {
            state.currentPage = action.payload;
        },
        resetState(state) {
            state.currentPage = 1;
            state.totalCount = 0;
        }
    }
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice;
