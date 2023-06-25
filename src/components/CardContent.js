import React from "react";
import PropTypes from "prop-types";

import dateConverter from "../Helpers/dateConverter";
import styles from "./CardContent.module.css";

const CardContent = (props) => {
    const { title, score, by, time, descendants } = props;
    const date = dateConverter(time);

    const cssClasses = `${styles.details} ${styles.column}`;

    return (
        <>
            {title && <h2>{title}</h2>}
            {by && time && (
                <div className={cssClasses}>
                    <time>Date: {date}&nbsp; </time>
                    <span>| Author: {by}&nbsp;</span>
                </div>
            )}
            {score && descendants >= 0 && (
                <div className={styles.details}>
                    {<span>Rating: {score}&nbsp;|&nbsp;</span>}
                    {descendants ? (
                        <span>Comments: {descendants}</span>
                    ) : (
                        <span>No comments</span>
                    )}
                </div>
            )}
        </>
    );
};

CardContent.propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    by: PropTypes.string,
    time: PropTypes.number,
    descendants: PropTypes.number
};

export default CardContent;
