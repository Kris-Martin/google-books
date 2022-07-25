import styles from "./BookCard.module.scss";

const BookCard = ({ title, authors, description, thumbnail }) => {
    return (
        <div className={styles.BookCard}>
            <img
                className={styles.BookCard__Img}
                src={thumbnail}
                alt={
                    title && thumbnail !== ""
                        ? `${title} bookcover`
                        : "No image provided"
                }
            />
            <div className={styles.BookCard__Details}>
                <h2 id="title" className={styles.BookCard__Title}>
                    {title}
                </h2>
                <p id="author" className={styles.BookCard__Para}>
                    <strong>Author:</strong>{" "}
                    {authors !== undefined
                        ? authors.length > 1
                            ? authors.join(", ")
                            : authors
                        : ""}
                </p>
                <p id="description" className={styles.BookCard__Para}>
                    <strong>Description:</strong>{" "}
                    {handleDescription(description)}
                </p>
            </div>
        </div>
    );
};

function handleDescription(description) {
    if (description === undefined) return description;
    const text = description.split(" ");
    return text.length > 50
        ? text.slice(0, 50).join(" ") + "..."
        : text.join(" ");
}

export default BookCard;
