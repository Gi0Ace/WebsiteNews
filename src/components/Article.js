import React from "react";
import PropTypes from "prop-types";

import CardContent from "../components/CardContent";
import cleanHtml from "../Helpers/sanitizeHtml";

const Article = (props) => {
    const htmlForParse = cleanHtml(props.text);
    return (
        <article>
            <CardContent {...props} />
            {props.text && (
                <p dangerouslySetInnerHTML={{ __html: htmlForParse }} />
            )}
            {props.url && (
                <p>
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read source
                    </a>
                </p>
            )}
        </article>
    );
};

Article.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
};

export default Article;
