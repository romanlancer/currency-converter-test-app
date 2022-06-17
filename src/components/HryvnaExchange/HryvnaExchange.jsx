import { BsCurrencyDollar, BsCurrencyEuro } from "react-icons/bs";
import { List, Item } from "./HryvnaExchange.styled";
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

export default HryvnaExchange;
