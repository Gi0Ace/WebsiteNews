const dateConverter = (time) => {
    const newDate = new Date(time * 1000);
    return newDate.toLocaleString();
};

export default dateConverter;
