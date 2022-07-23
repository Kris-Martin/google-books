import styles from "./BookCard.module.scss";

const BookCard = ({ title, authors, description }) => {
    return (
        <div className={styles.BookCard}>
            <h2 id="title">{title}</h2>
            <p id="author">
                <strong>Author:</strong> {authors}
            </p>
            <p id="description">
                <strong>Description:</strong> {description}
            </p>
        </div>
    );
};
export default BookCard;
