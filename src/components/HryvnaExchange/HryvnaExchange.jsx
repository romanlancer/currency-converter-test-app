import { BsCurrencyDollar, BsCurrencyEuro } from "react-icons/bs";
import { List, Item } from "./HryvnaExchange.styled";
import PropTypes from "prop-types";

const HryvnaExchange = ({ dollarExchange, euroExchange }) => {
  return (
    <List>
      <Item>
        <BsCurrencyDollar />
        <span>={dollarExchange()}UAH</span>
      </Item>
      <Item>
        <BsCurrencyEuro />
        <span>={euroExchange()}UAH</span>
      </Item>
    </List>
  );
};

HryvnaExchange.propTypes = {
  dollarExchange: PropTypes.func.isRequired,
  euroExchange: PropTypes.func.isRequired,
};

export default HryvnaExchange;
