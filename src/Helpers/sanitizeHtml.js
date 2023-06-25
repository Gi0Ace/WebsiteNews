import sanitizeHtml from "sanitize-html";

const rules = {
    allowedTags: ["b", "i", "em", "strong", "a", "pre", "div", "code"],
    transformTags: {
        pre: "p",
        a: sanitizeHtml.simpleTransform("a", {
            target: "_blank",
            rel: "noopener noreferrer"
        })
    }
};

const cleanHtml = (text) => {
    return sanitizeHtml(text, rules);
};

export default cleanHtml;
