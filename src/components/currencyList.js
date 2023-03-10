import React from "react";
import okIcon from "../assets/ok-icon.svg";

function CurrencyList() {
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
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/usd.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/usd.png"
                                            alt=""
                                        />
                                        &nbsp; USD
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
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/eur.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/eur.png"
                                            alt=""
                                        />
                                        &nbsp; EUR
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('eur')"
                                    >
                                        Euro
                                    </td>
                                    <td>
                                        <img
                                            src={okIcon}
                                            className="ok-icon"
                                            alt=""
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/gbp.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/gbp.png"
                                            alt=""
                                        />
                                        &nbsp; GBP
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('gbp')"
                                    >
                                        British Pound Sterling
                                    </td>
                                    <td>
                                        <img
                                            src={okIcon}
                                            className="ok-icon"
                                            alt=""
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        {" "}
                                        <img
                                            ng-src="../currencyConverter/images/flags/cad.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/cad.png"
                                            alt=""
                                        />
                                        &nbsp; CAD
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('cad')"
                                    >
                                        Canadian Dollar
                                    </td>
                                    <td>
                                        <img
                                            src={okIcon}
                                            className="ok-icon"
                                            alt=""
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/aud.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/aud.png"
                                            alt=""
                                        />
                                        &nbsp; AUD
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('aud')"
                                    >
                                        Australian Dollar
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkAUD"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/rub.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/rub.png"
                                            alt=""
                                        />
                                        &nbsp; RUB
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('rub')"
                                    >
                                        {" "}
                                        Russian Ruble{" "}
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkRUB"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/jpy.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/jpy.png"
                                            alt=""
                                        />
                                        &nbsp; JPY
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('jpy')"
                                    >
                                        {" "}
                                        Japanese Yen
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkJPY"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/inr.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/inr.png"
                                            alt=""
                                        />
                                        &nbsp; INR
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('inr')"
                                    >
                                        Indian Rupee
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkINR"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/bgn.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/bgn.png"
                                            alt=""
                                        />
                                        &nbsp; BGN
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('bgn')"
                                    >
                                        Bulgarian Lev
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkBGN"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/nzd.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/nzd.png"
                                            alt=""
                                        />
                                        &nbsp; NZD
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('nzd')"
                                    >
                                        New Zealand Dollar
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkNZD"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <img
                                            ng-src="../currencyConverter/images/flags/chf.png"
                                            width="20"
                                            src="../currencyConverter/images/flags/chf.png"
                                            alt=""
                                        />
                                        &nbsp; CHF
                                    </td>
                                    <td
                                        className="select"
                                        ng-click="addCurrencies('chf')"
                                    >
                                        Swiss Franc
                                    </td>
                                    <td>
                                        <span
                                            ng-show="checkCHF"
                                            className="glyphicon glyphicon-ok ng-hide"
                                        ></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <center>
                            <a href="#/">
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
                            </a>
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
