import React from "react";
import PropTypes from "prop-types";

import styles from "./CommentList.module.css";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    return (
        <React.Fragment>
            <ul className={styles.commentList}>
                {comments.map((item) => (
                    <li key={item.id} className={styles.comment}>
                        <Comment item={item} />
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array
};

export default CommentsList;
