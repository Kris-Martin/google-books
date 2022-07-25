import styles from "./BookCard.module.scss";

const BookCard = ({ title, authors, description, thumbnail }) => {
    return (
        <div className={styles.BookCard}>
            <img
                src={thumbnail}
                alt={
                    title && thumbnail !== ""
                        ? `${title} bookcover`
                        : "No image provided"
                }
            />
            <h2 id="title">{title}</h2>
            <p id="author">
                <strong>Author:</strong>{" "}
                {authors !== undefined
                    ? authors.length > 1
                        ? authors.join(", ")
                        : authors
                    : ""}
            </p>
            <p id="description">
                <strong>Description:</strong> {handleDescription(description)}
            </p>
        </div>
    );
};

function handleDescription(description) {
    const text = description.split(" ");
    return text.length > 50
        ? text.slice(0, 50).join(" ") + "..."
        : text.join(" ");
}

export default BookCard;
