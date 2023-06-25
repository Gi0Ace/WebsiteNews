import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news-slice";
import errorSlice from "./error-slice";
import paginationSlice from "./pagination-slice";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        error: errorSlice.reducer,
        pagination: paginationSlice.reducer
    }
});

export default store;
