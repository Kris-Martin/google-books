import styles from "./App.module.scss";
import BooksContainer from "./containers/BooksContainer";

function App() {
    return (
        <div className={styles.App}>
            <BooksContainer />
        </div>
    );
}

export default App;
