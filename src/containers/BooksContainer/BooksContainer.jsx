import styles from "./BooksContainer.module.scss";
import BookCard from "../../components/BookCard";
import { bookData } from "./bookData.js";
import { useState } from "react";
import Header from "../../components/Header/Header.jsx";

const BooksContainer = () => {
    const [books, setBooks] = useState(bookData);

    const clearAllResults = () => {
        setBooks([]);
    };

    const searchBooks = async (e) => {
        e.preventDefault();
        let input = document.getElementById("searchStr").value;
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
                    const { title, authors, description, thumbnail } = book;
                    return (
                        <BookCard
                            title={title}
                            authors={authors}
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
        `https://www.googleapis.com/books/v1/volumes?q=${input}&orderBy=relevance&maxResults=12`,
    );
    const data = await response.json();
    const { items } = await data;
    const books = items.map(async ({ volumeInfo }) => {
        const { title, authors, description, imageLinks } = await volumeInfo;
        const thumbnail = imageLinks === undefined ? "" : imageLinks.thumbnail;
        return { title, authors, description, thumbnail };
    });
    let updated = Promise.all(books);
    setBooks(await updated);
}

export default BooksContainer;
