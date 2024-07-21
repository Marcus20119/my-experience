import ExpandableValue from './ExpandableValue';
import PriceValue from './PriceValue';
import TruncateTextValue from './TruncateTextValue';

function Value() {
  return null;
}

Value.Price = PriceValue;
Value.TruncateText = TruncateTextValue;
Value.Expandable = ExpandableValue;

export { Value };
