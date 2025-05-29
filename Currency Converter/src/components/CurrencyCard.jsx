import React, { useState, useEffect } from "react";
import useCurrency from "../Hooks/currency";

export default function CurrencyCard() {
  const listURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
  const [listCurr, setListCurr] = useState({});
  const [fromCurrency, setFromCurrency] = useState("inr");

  useEffect(() => {
    fetch(listURL)
      .then((response) => response.json())
      .then((data) => setListCurr(data))
      .catch((error) => console.error("Fetch error:", error))
  }, []);

  const data1 = useCurrency(fromCurrency);
  console.log(data1)

  return (
    <div className="flex justify-center align-middle">
      <div className="bg-blue-200 p-4 grid gap-4">
        <div>
          <label htmlFor="Amount">Amount</label>
          <input
            className="bg-gray-200 text-black rounded-xl"
            type="number"
            id="Amount"
          />
        </div>
        <div>
          <label htmlFor="from">From Currency</label>
          <select
            name="country"
            id="from"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-gray-200 text-black rounded-xl"
          >
            {listCurr &&
              Object.keys(listCurr).map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode.toUpperCase()}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
