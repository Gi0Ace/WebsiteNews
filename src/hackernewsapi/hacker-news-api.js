const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}newstories.json?print=pretty`;

const response = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
};

export const getStoriesIds = async () => {
    return fetch(newStoriesUrl).then(response);
};

export const getData = (id) => {
    return fetch(`${baseUrl}/item/${id}.json`).then(response);
};
