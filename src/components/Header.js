import React from "react";
import { useDispatch } from "react-redux";

import { fetchNews } from "../Store/news-actions";
import styles from "./Header.module.css";
import Button from "./Button";

const Header = () => {
    const dispatch = useDispatch();

    const updateNews = () => {
        dispatch(fetchNews());
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>News</h1>
            <Button onClick={updateNews} text=" UPDATE " role={"link"} />
        </header>
    );
};

export default Header;
