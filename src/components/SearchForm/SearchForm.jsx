import styles from "./SearchForm.module.scss";

const SearchForm = ({ searchBooks }) => {
    return (
        <form id="searchForm" className={styles.SearchForm}>
            <input id="searchStr" type="text" placeholder="Enter a book..." />
            <button onClick={searchBooks}>Search</button>
        </form>
    );
};
export default SearchForm;
