import HeaderCell from './HeaderCell';
import TextCell from './TextCell';
import UserCell from './UserCell';

function Cell() {
  return null;
}

Cell.User = UserCell;
Cell.Text = TextCell;
Cell.Header = HeaderCell;

export default Cell;
