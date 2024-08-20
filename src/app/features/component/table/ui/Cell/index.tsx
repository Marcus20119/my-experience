import { CustomizeTableCell } from './CustomizeTableCell';
import EditableCell from './EditableCell';
import HeaderCell from './HeaderCell';
import InputTextAreaCell from './InputTextAreaCell';
import TextCell from './TextCell';
import UserCell from './UserCell';

function Cell() {
  return null;
}

Cell.User = UserCell;
Cell.Text = TextCell;
Cell.Header = HeaderCell;
Cell.CustomizeTable = CustomizeTableCell;
Cell.Editable = EditableCell;
Cell.TextArea = InputTextAreaCell;

export default Cell;
