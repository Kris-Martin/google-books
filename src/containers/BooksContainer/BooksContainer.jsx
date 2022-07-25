import styles from "./BooksContainer.module.scss";
import BookCard from "../../components/BookCard";
import SearchForm from "../../components/SearchForm";
import { bookData } from "./bookData.js";
import { useEffect, useState } from "react";

const BooksContainer = () => {
    const [books, setBooks] = useState(bookData);

    // useEffect(() => {
    //     console.log("Now set to:", books);
    //     return () => {
    //         console.log("From: ", books);
    //     };
    // }, [books]);

    const clearAllResults = () => {
        setBooks([]);
    };

    const searchBooks = async (e) => {
        e.preventDefault();
        let input = document.getElementById("searchStr").value;
        // console.log("Input: ", input);
        await fetchBooks(input, setBooks);
        document.getElementById("searchForm").reset();
    };

    return (
        <>
            <div className={styles.BookCount}>
                <p>Your search found {books.length} books...</p>
                <button
                    className={styles.BookCount__Clear_Button}
                    onClick={clearAllResults}
                >
                    clear all results
                </button>
            </div>
            <SearchForm searchBooks={searchBooks} />
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
        // console.log(imageLinks === undefined ? "Missing" : "Good");
        return { title, authors, description, thumbnail };
    });
    let updated = Promise.all(books);
    setBooks(await updated);
}

export default BooksContainer;
