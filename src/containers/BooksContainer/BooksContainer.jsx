import styles from "./BooksContainer.module.scss";
import BookCard from "../../components/BookCard";
import { useState } from "react";
import Header from "../../components/Header/Header.jsx";

const BooksContainer = () => {
    const [books, setBooks] = useState([]);

    const clearAllResults = () => {
        setBooks([]);
    };

    const searchBooks = async (e) => {
        e.preventDefault();
        const input = document.getElementById("searchStr").value;
        if (input === "") return alert("Please enter something to search..");
        await fetchBooks(input, setBooks);
        document.getElementById("searchForm").reset();
    };

    return (
        <>
            <Header
                onClick={clearAllResults}
                searchBooks={searchBooks}
                books={books}
            />
            <div className={styles.BooksContainer}>
                {books.map((book, i) => {
                    const {
                        title,
                        authors,
                        canonicalVolumeLink,
                        description,
                        thumbnail,
                    } = book;
                    return (
                        <BookCard
                            title={title}
                            authors={authors}
                            canonicalVolumeLink={canonicalVolumeLink}
                            description={description}
                            thumbnail={thumbnail}
                            key={i}
                        />
                    );
                })}
            </div>
        </>
    );
};

async function fetchBooks(input, setBooks) {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&orderBy=relevance&maxResults=20`,
    );
    const data = await response.json();
    if (data.totalItems === 0)
        return alert(
            "Sorry, no results found. Please try using different search terms.",
        );
    const { items } = await data;
    const books = items.map(async ({ volumeInfo }) => {
        const { title, authors, canonicalVolumeLink, description, imageLinks } =
            await volumeInfo;
        const thumbnail = imageLinks === undefined ? "" : imageLinks.thumbnail;
        return { title, authors, canonicalVolumeLink, description, thumbnail };
    });
    const updated = Promise.all(books);
    setBooks(await updated);
}

export default BooksContainer;
