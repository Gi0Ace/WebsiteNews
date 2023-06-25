import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../Store/pagination-slice";

import styles from "./Pagination.module.css";
import ArrowIcon from "./ArrowIcon";
import { usePagination, DOTS } from "../Helpers/usePagination";

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const pageSize = useSelector((state) => state.pagination.dataLimit);
    const totalCount = useSelector((state) => state.pagination.totalCount);
    const siblingCount = useSelector((state) => state.pagination.siblingCount);

    const paginationRange = usePagination({
        totalCount,
        pageSize,
        siblingCount,
        currentPage
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    function goToNextPage() {
        dispatch(paginationActions.setPage(currentPage + 1));
    }

    function goToPreviousPage() {
        dispatch(paginationActions.setPage(currentPage - 1));
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        dispatch(paginationActions.setPage(pageNumber));
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {currentPage !== 1 ? (
                    <li className={styles.listItem}>
                        <button
                            className={styles.button}
                            onClick={goToPreviousPage}
                            aria-label="Previous Page"
                        >
                            <ArrowIcon className={styles.backArrow} />
                        </button>
                    </li>
                ) : null}

                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <li key={index} className={styles.listItem}>
                                &#8230;
                            </li>
                        );
                    }

                    return (
                        <li key={index} className={styles.listItem}>
                            <button
                                className={styles.button}
                                onClick={changePage}
                                disabled={pageNumber === currentPage}
                            >
                                {pageNumber.toString()}
                            </button>
                        </li>
                    );
                })}

                {currentPage === lastPage ? null : (
                    <li className={styles.listItem}>
                        <button
                            className={styles.button}
                            onClick={goToNextPage}
                            aria-label="Next Page"
                        >
                            <ArrowIcon className={styles.nextArrow} />
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
