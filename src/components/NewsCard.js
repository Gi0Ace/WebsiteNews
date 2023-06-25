import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./NewsCard.module.css";
import CardContent from "./CardContent";

const NewsCard = (props) => {
    return (
        <li className={styles.card}>
            <Link to={`/article/${props.id}`}>
                <article>
                    <CardContent {...props} />
                </article>
            </Link>
        </li>
    );
};

NewsCard.propTypes = {
    id: PropTypes.number
};

export default NewsCard;
