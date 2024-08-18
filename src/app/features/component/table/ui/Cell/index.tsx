import { CustomizeTableCell } from './CustomizeTableCell';
import HeaderCell from './HeaderCell';
import TextCell from './TextCell';
import UserCell from './UserCell';

function Cell() {
  return null;
}

Cell.User = UserCell;
Cell.Text = TextCell;
Cell.Header = HeaderCell;
Cell.CustomizeTable = CustomizeTableCell;

export default Cell;
