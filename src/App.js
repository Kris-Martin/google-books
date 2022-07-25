import styles from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import BooksContainer from "./containers/BooksContainer";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <BooksContainer />
        </div>
    );
}

export default App;
