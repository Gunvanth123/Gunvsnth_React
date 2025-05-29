import { useEffect, useState } from "react";
import moment from 'moment';

function useCurrency(fromCurrency) {
    const [currencyData, setCurrencyData] = useState({});
    const currentDate = moment().format('YYYY-MM-DD');
    const api = `https://${currentDate}.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`;

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setCurrencyData(data[fromCurrency]))
            .catch(error => console.error("Fetch error:", error));
    }, [fromCurrency]);

    return currencyData;
}

export default useCurrency;
