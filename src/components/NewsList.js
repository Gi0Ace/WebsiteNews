import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import styles from "./NewsList.module.css";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";
import Pagination from "./Pagination";
import sortByDate from "../Helpers/sortByDate";

const NewsList = () => {
    const storiesAreLoading = useSelector(
        (state) => state.news.storiesAreLoading
    );
    const stories = useSelector((state) => state.news.stories);
    const cards = [...stories].sort(sortByDate);

    const currentPage = useSelector((state) => state.pagination.currentPage);
    const newsPerPage = useSelector((state) => state.pagination.dataLimit);

    const currentCardsSlice = useMemo(() => {
        const indexOfLastCard = currentPage * newsPerPage;
        const indexOfFirstCard = indexOfLastCard - newsPerPage;
        return cards.slice(indexOfFirstCard, indexOfLastCard);
    }, [currentPage, cards, newsPerPage]);

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: "0px" });
    }, [currentPage]);

    return (
        <React.Fragment>
            {storiesAreLoading && <Preloader />}
            {currentCardsSlice && (
                <>
                    <ul className={styles.cardList}>
                        {currentCardsSlice.map((story) => (
                            <NewsCard key={story.id} {...story} />
                        ))}
                    </ul>
                    <Pagination />
                </>
            )}
        </React.Fragment>
    );
};

export default NewsList;
