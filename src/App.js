//began on 09/03/2023
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React, useEffect, useState } from "react";
import CurrencyConversionTable from "./components/currencyConversionTable";
import CurrencyList from "./components/currencyList";
import "./bootstrap.min.css";
import "./App.css";
import "./home.css";
import "./table.css";
import apiData from "./apiData.json";

const App = () => {
    const [currencyRates, setCurrencyRates] = useState([]);
    useEffect(() => {
        async function fetchData() {
            //  const response = await fetch(
            //     "http://www.apilayer.net/api/live?access_key=268e302bc6f31b42898248709bc63efd&format=1"
            // );
            // const data = await response.json();

            const data = apiData;
            let currencyArray = [];

            console.log("data", data);
            for (const [key, value] of Object.entries(data.quotes)) {
                currencyArray.push(`${key}: ${value}`);
            }
            console.log("arr", currencyArray);
            setCurrencyRates(currencyArray);
        }
        fetchData();
    }, []);

    return (
        <>
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand">ReactJS Currency App</a>
                        </div>
                    </div>
                </nav>
            </header>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <CurrencyConversionTable
                                currencyRates={currencyRates}
                            />
                        }
                    />
                    <Route
                        path="/currencies-list"
                        element={<CurrencyList currencyRates={currencyRates} />}
                    />
                </Routes>
            </Router>
        </>
    );
};

export default App;
