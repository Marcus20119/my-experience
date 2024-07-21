import EmailField from './EmailField';
import FullNameField from './FullNameField';
import PhoneNumberField from './PhoneNumberField';

function Field() {
  return null;
}

Field.Email = EmailField;
Field.FullName = FullNameField;
Field.PhoneNumber = PhoneNumberField;

export { Field };
