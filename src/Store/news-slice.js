import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        stories: [],
        article: null,
        comments: [],
        subComments: [],
        storiesAreLoading: true,
        articleIsLoading: true,
        commentsAreLoading: true
    },
    reducers: {
        loadStories(state, action) {
            const storiesData = action.payload;
            const filteredStories = storiesData.filter((item) => item !== null);
            state.stories = filteredStories;
            state.storiesAreLoading = false;
        },
        loadArticle(state, action) {
            state.article = action.payload;
            state.articleIsLoading = false;
        },
        loadComments(state, action) {
            state.comments = action.payload;
            state.commentsAreLoading = false;
        },
        loadSubComments(state, action) {
            state.subComments = [...state.subComments, action.payload];
        },
        resetNews(state) {
            state.stories = [];
            state.storiesAreLoading = true;
        },
        resetArticle(state) {
            state.article = null;
            state.comments = [];
            state.subComments = [];
            state.articleIsLoading = true;
            state.commentsAreLoading = true;
        },
        resetComments(state) {
            state.comments = [];
            state.subComments = [];
            state.commentsAreLoading = true;
        },
        resetLoadingState(state, action) {
            if (action.payload === "STORIES_LOADING_FAIL") {
                state.storiesAreLoading = false;
            }
            if (action.payload === "ARTICLE_LOADING_FAIL") {
                state.articleIsLoading = false;
            }
            if (action.payload === "COMMENTS_LOADING_FAIL") {
                state.commentsAreLoading = false;
            }
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;
