import GoogleAddressField from './GoogleAddressField';
import {
  NationalityOfflineField,
  NationalityOnlineField,
} from './NationalityField';
import {
  PhoneNumberOfflineField,
  PhoneNumberOnlineField,
} from './PhoneNumberField';
import SearchField from './SearchField';
import { UploadFileField } from './UploadField';

function Field() {
  return null;
}

Field.search = SearchField;
Field.PhoneNumberOnline = PhoneNumberOnlineField;
Field.PhoneNumberOffline = PhoneNumberOfflineField;
Field.NationalityOnline = NationalityOnlineField;
Field.NationalityOffline = NationalityOfflineField;
Field.GoogleAddressField = GoogleAddressField;
Field.UploadFile = UploadFileField;

export { Field };
