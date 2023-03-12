import React from "react";
import { Link } from "react-router-dom";
import okIcon from "../assets/ok-icon.svg";

function CurrencyList(props) {
    console.log("props", props);

    let { currencyRates } = props;

    return (
        <>
            <div className="container">
                <div ng-view="" className="ng-scope">
                    <div className="col-md-8 col-md-offset-2 ng-scope">
                        <h1 style={{ textAlign: "center" }}>
                            Select additional currencies
                        </h1>

                        <table id="currTable" className="table table-striped">
                            <thead>
                                <tr>
                                    <th className="shade">Code</th>
                                    <th className="shade">Name</th>
                                    <th className="shade">Select</th>
                                    <th className="shade"></th>
                                </tr>
                            </thead>

                            <tbody className="overflow">
                                {currencyRates.map((currency) => {
                                    const currencyShortName = currency
                                        .split(":")[0]
                                        .substring(3, 6);
                                    return (
                                        <tr key={currency}>
                                            <td className="left">
                                                <img
                                                    ng-src="../currencyConverter/images/flags/usd.png"
                                                    width="20"
                                                    src="../currencyConverter/images/flags/usd.png"
                                                    alt=""
                                                />
                                                &nbsp; {currencyShortName}
                                            </td>
                                            <td
                                                className="select"
                                                ng-click="addCurrencies('usd')"
                                            >
                                                United States Dollar
                                            </td>
                                            <td>
                                                <img
                                                    src={okIcon}
                                                    className="ok-icon"
                                                    alt=""
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <center>
                            <Link to="/">
                                <button
                                    id="add"
                                    style={{ cursor: "pointer" }}
                                    ng-click="addCurrencies()"
                                    type="button"
                                    className="btn btn-success"
                                >
                                    <span ng-click="myFunction1('usd')">
                                        Add selected currencies
                                    </span>
                                </button>
                            </Link>
                        </center>
                        <p
                            ng-show="listNumCheck"
                            className="fontsize ng-hide"
                            id="limit1"
                        >
                            10 currency max selected. Click on the button to
                            view the conversions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrencyList;
