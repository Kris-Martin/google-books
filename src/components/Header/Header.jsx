import styles from "./Header.module.scss";
import SearchForm from "../SearchForm/SearchForm.jsx";

const Header = ({ onClick, searchBooks, books }) => {
    return (
        <header className={styles.Header}>
            <div className={styles.Header__Title}>
                <h1>Find a Book</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height={45}
                    className={styles.Header__Logo}
                >
                    {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                    <path d="M144.3 32.04C106.9 31.29 63.7 41.44 18.6 61.29c-11.42 5.026-18.6 16.67-18.6 29.15l0 357.6c0 11.55 11.99 19.55 22.45 14.65c126.3-59.14 219.8 11 223.8 14.01C249.1 478.9 252.5 480 256 480c12.4 0 16-11.38 16-15.98V80.04c0-5.203-2.531-10.08-6.781-13.08C263.3 65.58 216.7 33.35 144.3 32.04zM557.4 61.29c-45.11-19.79-88.48-29.61-125.7-29.26c-72.44 1.312-118.1 33.55-120.9 34.92C306.5 69.96 304 74.83 304 80.04v383.1C304 468.4 307.5 480 320 480c3.484 0 6.938-1.125 9.781-3.328c3.925-3.018 97.44-73.16 223.8-14c10.46 4.896 22.45-3.105 22.45-14.65l.0001-357.6C575.1 77.97 568.8 66.31 557.4 61.29z" />
                </svg>
            </div>
            <div className={styles.BookCount}>
                <p>{books.length} books found...</p>
                <button
                    className={styles.BookCount__Clear_Button}
                    onClick={onClick}
                >
                    clear all
                </button>
            </div>
            <SearchForm searchBooks={searchBooks} />
        </header>
    );
};
export default Header;
