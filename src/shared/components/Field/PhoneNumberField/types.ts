import type {
  CountryCode,
  CountryName,
} from '@/shared/tanstack/api/rest_countries';
import type { DefaultOptionType } from 'antd/es/select';

export interface PhoneNumberValue {
  countryCode: CountryCode;
  phoneCode?: string;
  phoneNumber: string;
}

export interface PhoneNumberOptionType extends DefaultOptionType {
  countryCode: CountryCode;
  countryName: CountryName;
  phoneCode: string;
}

export interface PhoneNumberFieldProps {
  defaultCountryCode?: CountryCode;
  onChange?: (value: PhoneNumberValue) => void;
  value?: PhoneNumberValue;
}

export interface OfflineCountry {
  countryCode: CountryCode;
  countryName: CountryName;
  flagSrc: string;
  phoneCode: string;
}
