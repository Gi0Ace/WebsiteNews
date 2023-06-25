import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ArticlePage.module.css";
import Article from "../components/Article";
import CommentsList from "../components/CommentsList";
import Preloader from "../components/Preloader";
import Button from "../components/Button";
import ErrorNotification from "../components/ErrorNotification";
import { newsActions } from "../Store/news-slice";
import { fetchStory, fetchComments } from "../Store/news-actions";

const ArticlePage = () => {
    const history = useHistory();
    const { id } = useParams();

    const dispatch = useDispatch();
    const articleIsLoading = useSelector(
        (state) => state.news.articleIsLoading
    );
    const stories = useSelector((state) => state.news.stories);
    const findStory = stories.find((item) => item.id === Number(id));

    const article = useSelector((state) => state.news.article);
    const comments = useSelector((state) => state.news.comments);
    const notification = useSelector((state) => state.error.notification);

    const commentsAreLoading = useSelector(
        (state) => state.news.commentsAreLoading
    );

    const loadComments = useCallback(() => {
        if (article !== null && article.kids) {
            dispatch(fetchComments());
        }
    }, [dispatch, article]);

    useEffect(() => {
        if (findStory) {
            dispatch(newsActions.loadArticle(findStory));
        } else {
            dispatch(fetchStory(id));
        }
    }, [findStory, dispatch, id]);

    useEffect(() => {
        loadComments();
    }, [loadComments]);

    return (
        <React.Fragment>
            <header className={styles.header}>
                <Button onClick={() => history.push("/")} text={"Back"} />
            </header>

            <main>
                {notification && (
                    <ErrorNotification
                        title={notification.title}
                        message={notification.message}
                    />
                )}

                {article !== null && (
                    <section className={styles["content-padding"]}>
                        {articleIsLoading ? (
                            <Preloader />
                        ) : (
                            <Article {...article} />
                        )}
                    </section>
                )}

                {article !== null && article.kids && (
                    <>
                        <Button
                            onClick={loadComments}
                            text={"Update comments"}
                        />

                        <section className={styles["content-padding"]}>
                            {commentsAreLoading ? (
                                <Preloader />
                            ) : (
                                <CommentsList comments={comments} />
                            )}
                        </section>
                    </>
                )}
            </main>
        </React.Fragment>
    );
};

export default ArticlePage;
