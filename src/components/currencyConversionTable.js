import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import closeButton from "../assets/remove-circle.svg";

function CurrencyConversionTable(props) {
    let { currencyRates } = props;

    currencyRates = currencyRates.filter((currency) => {
        return currency.split(":")[0] === "USDMUR";
    });

    return (
        <>
            <center className="ng-scope">
                <p id="base">Select the base currency</p>

                <button
                    ng-click="baseSwitch('usd')"
                    type="button"
                    className="btn btn-info btn-xs"
                >
                    USD
                </button>
                <button
                    ng-click="baseSwitch('gbp')"
                    type="button"
                    className="btn btn-info btn-xs"
                >
                    GBP
                </button>
                <button
                    ng-click="baseSwitch('eur')"
                    type="button"
                    className="btn btn-info btn-xs"
                >
                    EUR
                </button>
                <button
                    ng-click="baseSwitch('cad')"
                    type="button"
                    className="btn btn-info btn-xs"
                >
                    CAD
                </button>
            </center>

            <div className="container">
                <div
                    id="container"
                    className="col-md-6 col-md-offset-3 ng-scope"
                >
                    <p id="time">
                        <b>Data last updated at:</b>{" "}
                        <i className="ng-binding">Mar 9, 2023 10:29:03 PM</i>
                    </p>
                    <p ng-hide="validity" id="valCheck" className="ng-hide">
                        Please enter a valid number
                    </p>
                    <p className="txt">
                        Base currency is: <b className="ng-binding">USD</b>
                    </p>

                    <input
                        id="baseNumber"
                        ng-model="baseAmount"
                        type="text"
                        ng-init="baseAmount='1'"
                        placeholder="Enter a number"
                        className="ng-pristine ng-untouched ng-valid ng-not-empty"
                    />

                    <table className="table table-striped">
                        <thead className="thead-default">
                            <tr>
                                <th id="head">Currency</th>
                                <th id="head1"></th>
                                <th id="head2">Conversion</th>
                            </tr>
                        </thead>

                        <tbody id="repeat">
                            {currencyRates.map((currency) => {
                                return (
                                    <tr key={currency}>
                                        <td id="size">
                                            <img
                                                width="20"
                                                src="../currencyConverter/images/flags/usd.png"
                                                alt=""
                                            />
                                            &nbsp;
                                            <span
                                                id="currency"
                                                className="ng-binding"
                                            >
                                                {currency.split(":")[0]}
                                            </span>
                                        </td>
                                        <td
                                            id="size1"
                                            className="symbol ng-binding"
                                        >
                                            <img height="15" alt="" />$
                                        </td>
                                        <td id="size2" className="ng-binding">
                                            {currency.split(":")[1]}
                                        </td>
                                        <td
                                            style={{ cursor: "pointer" }}
                                            id="last"
                                        >
                                            <img
                                                className="close-button"
                                                src={closeButton}
                                                alt=""
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <p ng-show="listNumCheck" id="limit" className="ng-hide">
                        10 currency max selected
                    </p>

                    <div id="container1" className="col-md-6 col-md-offset-3">
                        <center>
                            <Link to="/currencies-list">
                                <button
                                    ng-click="checkList()"
                                    id="more"
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Add more currencies
                                </button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrencyConversionTable;
