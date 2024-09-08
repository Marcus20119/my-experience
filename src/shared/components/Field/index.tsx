import {
  NationalityOfflineField,
  NationalityOnlineField,
} from './NationalityField';
import {
  PhoneNumberOfflineField,
  PhoneNumberOnlineField,
} from './PhoneNumberField';
import SearchField from './SearchField';

function Field() {
  return null;
}

Field.search = SearchField;
Field.PhoneNumberOnline = PhoneNumberOnlineField;
Field.PhoneNumberOffline = PhoneNumberOfflineField;
Field.NationalityOnline = NationalityOnlineField;
Field.NationalityOffline = NationalityOfflineField;

export { Field };
