import styles from "./SearchForm.module.scss";

const SearchForm = ({ searchBooks }) => {
    return (
        <form id="searchForm" className={styles.SearchForm}>
            <input
                id="searchStr"
                className={styles.SearchForm__Input}
                type="text"
                placeholder="Enter a book..."
            />
            <button className={styles.SearchForm__Button} onClick={searchBooks}>
                Search
            </button>
        </form>
    );
};
export default SearchForm;
