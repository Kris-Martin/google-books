import styles from "./BookCard.module.scss";
import googleImg from "../../shared/Google_Books_logo_2015.svg";
// noCoverImg By Rugby471 (talk · contribs) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=3162595
import noCoverImg from "./book_placeholder.png";

const BookCard = ({
    title,
    authors,
    canonicalVolumeLink,
    description,
    thumbnail,
}) => {
    return (
        <div className={styles.BookCard}>
            <img
                className={styles.BookCard__Img}
                src={thumbnail ? thumbnail : noCoverImg}
                alt={
                    title && thumbnail !== ""
                        ? `${title} bookcover`
                        : "No image provided"
                }
            />
            <h2 id="title" className={styles.BookCard__Title}>
                {title !== undefined ? title : "No title listed."}
            </h2>
            <p id="author" className={styles.BookCard__Para}>
                <strong>Author:</strong>{" "}
                {authors !== undefined
                    ? authors.length > 1
                        ? authors.join(", ")
                        : authors
                    : "No author listed."}
            </p>
            <a
                className={styles.BookCard__Link}
                href={canonicalVolumeLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className={styles.BookCard__Link__Img}
                    src={googleImg}
                    alt="Link to Google Books"
                />
            </a>
            <p id="description" className={styles.BookCard__Para}>
                <strong>Description:</strong> {handleDescription(description)}
            </p>
        </div>
    );
};

function handleDescription(description) {
    if (description === undefined || description === "")
        return "No description listed.";
    const text = description.split(" ");
    return text.length > 50
        ? text.slice(0, 50).join(" ") + "..."
        : text.join(" ");
}

export default BookCard;
