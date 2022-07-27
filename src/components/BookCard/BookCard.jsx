import styles from "./BookCard.module.scss";
import googleImg from "../../shared/Google_Books_logo_2015.svg";

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
                src={thumbnail}
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
                <img src={googleImg} alt="Link to Google Books" />
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
