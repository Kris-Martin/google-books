import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    return (
        <div className={styles.BookCard}>
            <h2 id="title">{book.title}</h2>
            <p id="author">Author: {book.author}</p>
            <p id="description">Description: {book.description}</p>
        </div>
    );
};
export default BookCard;
