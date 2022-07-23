import styles from "./BooksContainer.module.scss";
import BookCard from "../../components/BookCard";
import SearchForm from "../../components/SearchForm";
import { bookData } from "./bookData.js";
import { useEffect, useState } from "react";

const BooksContainer = () => {
    const [books, setBooks] = useState(bookData);
    const [searchStr, setSearchStr] = useState("");

    useEffect(() => {
        console.log("Now set to: ", searchStr);
        return () => {
            console.log("From: ", searchStr);
        };
    }, [searchStr]);

    const clearAllResults = () => {
        setBooks([]);
    };

    const searchBooks = (e) => {
        e.preventDefault();
        let input = document.getElementById("searchStr").value;
        console.log("Input: ", input);
        setSearchStr(input);
        document.getElementById("searchForm").reset();
    };

    const sortBooks = (books) => {
        let sorted = books.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sorted);
        return sorted;
    };

    return (
        <>
            <div className={styles.bookCount}>
                <p>Your search found {books.length} books...</p>
                <button onClick={clearAllResults}>clear all results</button>
            </div>
            <SearchForm searchBooks={searchBooks} />
            <div className={styles.BooksContainer}>
                {sortBooks(books).map((book, i) => {
                    return <BookCard book={book} key={i} books={books} />;
                })}
            </div>
        </>
    );
};

export default BooksContainer;
