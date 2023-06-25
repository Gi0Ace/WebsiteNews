import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Preloader from "./components/Preloader";
import { fetchNews } from "./Store/news-actions";

const MainPage = React.lazy(() => import("./page/MainPage"));
const ArticlePage = React.lazy(() => import("./page/ArticlePage"));
const NotFound = React.lazy(() => import("./page/NotFound"));

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInitial) {
            dispatch(fetchNews());
            isInitial = false;
        }
    }, [dispatch]);

    return (
        <React.Fragment>
            <Suspense fallback={<Preloader />}>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/article/:id">
                        <ArticlePage />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </React.Fragment>
    );
}

export default App;
