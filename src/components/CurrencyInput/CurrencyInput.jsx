import PropTypes from "prop-types";
import { Wrapper, Currency, Amount, Option } from "./CurrencyInput.styled";
const CurrencyInput = ({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  currencies,
}) => {
  return (
    <Wrapper>
      <Amount
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <Currency
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency, index) => (
          <Option key={index} value={currency}>
            {currency}
          </Option>
        ))}
      </Currency>
    </Wrapper>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
