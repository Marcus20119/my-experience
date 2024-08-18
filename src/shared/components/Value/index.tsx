import ExpandableValue from './ExpandableValue';
import ListValue from './ListValue';
import PriceValue from './PriceValue';
import TruncateTextValue from './TruncateTextValue';

function Value() {
  return null;
}

Value.Price = PriceValue;
Value.TruncateText = TruncateTextValue;
Value.Expandable = ExpandableValue;
Value.List = ListValue;

export { Value };
