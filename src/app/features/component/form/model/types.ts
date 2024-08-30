export enum FormStepType {
  Multiple = 'multiple',
  Single = 'single',
}

export interface SingleStepFormEntity {
  address: string;
  city: string;
  country: string;
  email: string;
  fullName: string;
  major: string;
  phoneNumber: string;
  state: string;
  zip: string;
}
