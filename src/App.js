import HryvnaExchange from "components/HryvnaExchange";
import CurrencyInput from "components/CurrencyInput";

import PuffLoader from "react-spinners/PuffLoader";
import { Circle, Container, Title, Main, Loader } from "App.styled";
import { TbExchange } from "react-icons/tb";
import { useState, useEffect } from "react";

const App = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currencyEUR, setCurrencyEUR] = useState("EUR");
  const [currencyUSD, setCurrencyUSD] = useState("USD");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");

  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState([]);
  const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest";
  const API_KEY = "EjSq0HOafXUWfGgQXFRoXkBxCns4FP8V";

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", `${API_KEY}`);
    const requestOptions = {
      headers: myHeaders,
    };
    setLoading(true);

    fetch(`${BASE_URL}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);

        setRates(result.rates);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    const init = () => handleAmount1Change(1);
    rates && init();
    // eslint-disable-next-line
  }, [rates]);

  const format = (number) => {
    return number.toFixed(4);
  };

  const setUsdToUahExchange = () => {
    setCurrencyUSD(format(rates["UAH"] / rates["USD"]));
    return currencyUSD;
  };

  const setEurToUahExchange = () => {
    setCurrencyEUR(format(rates["UAH"] / rates["EUR"]));
    return currencyEUR;
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <Container>
      <header>
        <Title>Currency Converter</Title>
        <HryvnaExchange
          dollarExchange={setUsdToUahExchange}
          euroExchange={setEurToUahExchange}
        />
      </header>

      <Main>
        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={+amount1}
          currency={currency1}
        />
        <Circle>
          <TbExchange color={"#ddd"} size={45} />
        </Circle>
        {!isNaN(amount2) && (
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={+amount2}
            currency={currency2}
          />
        )}
        <Loader>
          <PuffLoader loading={loading} size={150} speedMultiplier={2} />
        </Loader>
      </Main>
    </Container>
  );
};

export default App;
