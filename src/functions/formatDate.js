const mongoDate = new Date();
// Customize the date format
const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    mongoDate
);

export default formattedDate;