import styles from "./App.module.scss";
import BooksContainer from "./containers/BooksContainer";

function App() {
    return (
        <div className={styles.App}>
            <h1>Find a Book</h1>
            <BooksContainer />
        </div>
    );
}

export default App;
