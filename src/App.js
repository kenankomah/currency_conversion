//began on 09/03/2023
// import "bootstrap/dist/css/bootstrap.css";
import CurrencyTable from "./components/currencyTable";
import CurrencyList from "./components/currencyList";
import "./bootstrap.min.css";
import "./App.css";
import "./home.css";
import "./table.css";

function App() {
    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header" href="/">
                            <a className="navbar-brand" href="/">
                                ReactJS Currency App
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            <CurrencyTable />
            {/* <CurrencyList /> */}
        </div>
    );
}

export default App;
