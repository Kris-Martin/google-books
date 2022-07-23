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

    async function fetchBooks(input, setBooks) {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${input}=search+terms`,
        );
        const data = await response.json();
        const { items } = await data;
        const books = items.map(async ({ volumeInfo }) => {
            const { title, authors, description } = await volumeInfo;
            console.log(volumeInfo);
            return { title, authors, description };
        });
        let updated = Promise.all(books);
        setBooks(await updated);
    }

    // const sortBooks = (books) => {
    //     let sorted = books.sort((a, b) => a.title.localeCompare(b.title));
    //     return sorted;
    // };

    return (
        <>
            <div className={styles.bookCount}>
                <p>Your search found {books.length} books...</p>
                <button onClick={clearAllResults}>clear all results</button>
            </div>
            <SearchForm searchBooks={searchBooks} />
            <div className={styles.BooksContainer}>
                {books.map((book, i) => {
                    const { title, authors, description } = book;
                    return (
                        <BookCard
                            title={title}
                            authors={
                                authors.length > 1
                                    ? authors.join(", ")
                                    : authors
                            }
                            description={description}
                            key={i}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default BooksContainer;
