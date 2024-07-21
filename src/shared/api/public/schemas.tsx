/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export type MakeOptional<T, K extends keyof T> = {
  [SubKey in K]?: Maybe<T[SubKey]>;
} & Omit<T, K>;

export type MakeMaybe<T, K extends keyof T> = {
  [SubKey in K]: Maybe<T[SubKey]>;
} & Omit<T, K>;

export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };

export type Incremental<T> =
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    }
  | T;

const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  Boolean: { input: boolean; output: boolean };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
  Float: { input: number; output: number };
  ID: { input: string; output: string };
  Int: { input: number; output: number };
  JSON: { input: Record<string, unknown>; output: Record<string, unknown> };
  JSONObject: {
    input: Record<string, unknown>;
    output: Record<string, unknown>;
  };
  String: { input: string; output: string };
  TimeDate: { input: string; output: string };
}

export interface AdditionalInformation {
  NEQ: Scalars['String']['output'];
  businessName: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  howDoYouHearOurBusiness?: Maybe<HowDoYouHearOurBusiness>;
  references?: Maybe<ReferenceInformation[]>;
}

export interface Amenity {
  amenityType?: Maybe<ReferenceData>;
  amenityTypeId: Scalars['ID']['output'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAppFilter: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export enum AppendixType {
  Additional = 'Additional',
  Amended = 'Amended',
  Extended = 'Extended',
}

export enum BookingRequestStatus {
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export interface BankAccount {
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  bankBranch?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
}

export interface BankTransferInformation {
  accountName: Scalars['String']['output'];
  accountNumber: Scalars['String']['output'];
  bankBranch?: Maybe<Scalars['String']['output']>;
  bankName: Scalars['String']['output'];
  isDisplayedInvoice?: Maybe<Scalars['Boolean']['output']>;
  qrCode?: Maybe<QrCodeImage>;
}

export interface Booking {
  actualAmount?: Maybe<Scalars['Float']['output']>;
  bookingCredit?: Maybe<Scalars['Float']['output']>;
  bookingStats?: Maybe<BookingStats>;
  breakdownBookings?: Maybe<BreakdownBooking[]>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  capacityNumber?: Maybe<Scalars['Float']['output']>;
  changelogs?: Maybe<BookingChangelog[]>;
  checkins?: Maybe<Checkin[]>;
  code?: Maybe<Scalars['String']['output']>;
  /** This field is only used in longterm-living business and API get one booking */
  contract?: Maybe<Contract>;
  contracts?: Maybe<Contract[]>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  creator?: Maybe<BusinessUser>;
  creatorId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerGender?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  customerInfo?: Maybe<Scalars['JSON']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  customerPhone?: Maybe<Scalars['String']['output']>;
  customers?: Maybe<Customer[]>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Should use bookingStats instead */
  deposit?: Maybe<Scalars['Float']['output']>;
  discountUnit?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  endTime: Scalars['DateTime']['output'];
  estimatedAmount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Should use bookingStats instead */
  extraServiceFee?: Maybe<Scalars['Float']['output']>;
  extraServiceOrderId?: Maybe<Scalars['ID']['output']>;
  extraServiceOrders?: Maybe<ExtraServiceOrder[]>;
  extraServices?: Maybe<ExtraService[]>;
  files?: Maybe<Scalars['String']['output'][]>;
  firstBookingId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  invoices?: Maybe<Invoice[]>;
  isGroup?: Maybe<Scalars['Boolean']['output']>;
  isOnlineBooking?: Maybe<Scalars['Boolean']['output']>;
  /** Field for room, not for booking */
  isReserved?: Maybe<Scalars['Boolean']['output']>;
  isSpecialOffer?: Maybe<Scalars['Boolean']['output']>;
  isTaxIncluded?: Maybe<Scalars['Boolean']['output']>;
  isTeam?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  numberOfPeople?: Maybe<Scalars['Float']['output']>;
  package?: Maybe<Package>;
  packageData?: Maybe<Scalars['JSON']['output']>;
  packageFee?: Maybe<Scalars['Float']['output']>;
  packageId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Should use bookingStats instead */
  paidAmount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Should use bookingStats instead */
  paidBreakDownBooking?: Maybe<Scalars['Boolean']['output']>;
  paidDeposit?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Should use bookingStats instead */
  paidExtraServices?: Maybe<Scalars['Boolean']['output']>;
  payType?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['ID']['output']>;
  paymentPeriod?: Maybe<Scalars['JSON']['output']>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  promotionCode?: Maybe<Scalars['String']['output']>;
  promotionValue?: Maybe<Scalars['Float']['output']>;
  recurringInfo?: Maybe<RecurringInfo>;
  requestedDeletionAt?: Maybe<Scalars['DateTime']['output']>;
  requestedDeletionBy?: Maybe<BusinessUser>;
  requestedDeletionById?: Maybe<Scalars['ID']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  /** Field for room, not for booking */
  roomPaymentStatus?: Maybe<RoomPaymentStatus>;
  /** Used in longterm-living business */
  roomServices?: Maybe<RoomServiceItem[]>;
  serviceReference?: Maybe<Scalars['JSON']['output']>;
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Should use bookingStats instead */
  totalAmount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Should use bookingStats instead */
  totalBookingAmount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Should use bookingStats instead */
  totalBookingDiscount?: Maybe<Scalars['Float']['output']>;
  totalDeposit?: Maybe<Scalars['Float']['output']>;
  transactions?: Maybe<Transaction[]>;
  /** @deprecated Should use bookingStats instead */
  unpaidAmount?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  usageBookingCredit?: Maybe<Scalars['Float']['output']>;
  utilities?: Maybe<Utility[]>;
  utilityOrders?: Maybe<UtilityOrder[]>;
  utilityTypeIndexes?: Maybe<UtilityTypeIndex[]>;
}

export interface BookingChangelog {
  applyFrom: Scalars['DateTime']['output'];
  booking?: Maybe<Booking>;
  bookingId: Scalars['ID']['output'];
  businessId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entries: BookingChangelogEntry[];
  id: Scalars['ID']['output'];
  linkedToContract?: Maybe<Contract>;
  linkedToContractId?: Maybe<Scalars['ID']['output']>;
  timestamp: Scalars['DateTime']['output'];
  updatedBy?: Maybe<BusinessUser>;
  updatedByBusinessUserId: Scalars['ID']['output'];
}

export interface BookingChangelogEntry {
  extraInfo?: Maybe<Scalars['JSON']['output']>;
  fieldName: BookingChangelogFieldName;
  newValue?: Maybe<Scalars['JSON']['output']>;
  oldValue?: Maybe<Scalars['JSON']['output']>;
}

export enum BookingChangelogFieldName {
  Checkin = 'checkin',
  Checkout = 'checkout',
  Customers = 'customers',
  EndTime = 'endTime',
  Files = 'files',
  Note = 'note',
  NumberOfPeople = 'numberOfPeople',
  PackageFee = 'packageFee',
  RoomServices = 'roomServices',
  StartTime = 'startTime',
  TotalDeposit = 'totalDeposit',
}

export interface BookingInfoConfig {
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAutoSend?: Maybe<Scalars['Boolean']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
}

export interface BookingInfoInterface {
  bookingId: Scalars['ID']['output'];
  code: Scalars['String']['output'];
  endTime?: Maybe<Scalars['Date']['output']>;
  locationInfo?: Maybe<LocationInfoInterface>;
  package?: Maybe<Scalars['JSONObject']['output']>;
  startTime?: Maybe<Scalars['Date']['output']>;
}

export interface BookingRequest {
  approvedBy?: Maybe<BusinessUser>;
  approvedByBusinessUserId?: Maybe<Scalars['ID']['output']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  depositInfo?: Maybe<DepositInfoObject>;
  endTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  numberOfPeople?: Maybe<Scalars['Float']['output']>;
  rejectReason?: Maybe<Scalars['String']['output']>;
  rejectedBy?: Maybe<BusinessUser>;
  rejectedByBusinessUserId?: Maybe<Scalars['ID']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<BookingRequestStatus>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  visitTour?: Maybe<VisitTour>;
  visitTourId?: Maybe<Scalars['ID']['output']>;
}

export interface BookingStats {
  totalAmount: Scalars['Float']['output'];
  totalBookingAmount: Scalars['Float']['output'];
  totalBookingUnpaidAmount: Scalars['Float']['output'];
  totalDebtAmount: Scalars['Float']['output'];
  totalDepositAmount: Scalars['Float']['output'];
  totalEstimatedBookingAmount: Scalars['Float']['output'];
  totalExtraServiceAmount: Scalars['Float']['output'];
  totalInvoicedAmount: Scalars['Float']['output'];
  totalPaidAmount: Scalars['Float']['output'];
  totalUnpaidAmount: Scalars['Float']['output'];
  totalUtilityAmount: Scalars['Float']['output'];
}

export interface BreakdownBooking {
  amount: Scalars['Float']['output'];
  /** @deprecated No longer used, use invoice instead */
  amountPaid?: Maybe<Scalars['Float']['output']>;
  booking?: Maybe<Booking>;
  bookingCredit?: Maybe<Scalars['Float']['output']>;
  bookingId?: Maybe<Scalars['Float']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  discountUnit?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  estFee?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  packageData?: Maybe<Scalars['JSON']['output']>;
  packageId?: Maybe<Scalars['ID']['output']>;
  roomId?: Maybe<Scalars['ID']['output']>;
  serviceReference?: Maybe<Scalars['JSON']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated No longer used, use invoice instead */
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface Business {
  abbreviation?: Maybe<Scalars['String']['output']>;
  aboutUs?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  businessConfig?: Maybe<BusinessConfig>;
  businessPaymentInfos?: Maybe<BusinessPaymentInfo[]>;
  businessPlan?: Maybe<BusinessPlan>;
  businessTypeIds?: Maybe<Scalars['ID']['output'][]>;
  businessTypes?: Maybe<BusinessType[]>;
  city?: Maybe<Scalars['String']['output']>;
  contractInfo?: Maybe<Scalars['JSONObject']['output']>;
  coordinates?: Maybe<Scalars['JSONObject']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  coworkspace_url?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  emailContact?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Scalars['String']['output'][]>;
  geoLocation?: Maybe<Scalars['JSONObject']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  joinDate?: Maybe<Scalars['DateTime']['output']>;
  linkedln?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Location>;
  main_image?: Maybe<Scalars['String']['output']>;
  main_img?: Maybe<Scalars['String']['output']>;
  managementTools?: Maybe<ManagementTools>;
  messenger?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  newNotificationCount?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<BusinessUser>;
  phoneContact?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['JSONObject']['output']>;
  reviews?: Maybe<Review[]>;
  shortIntroduction?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sourcePlatform?: Maybe<Scalars['String']['output']>;
  stats?: Maybe<Scalars['JSONObject']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  subscriptions?: Maybe<Subscription[]>;
  tiktok?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  users?: Maybe<BusinessUser[]>;
  website?: Maybe<Scalars['String']['output']>;
  whiteLabelAppConfig?: Maybe<WhiteLabelAppConfig>;
  work_space_id?: Maybe<Scalars['String']['output']>;
  workingTime?: Maybe<Scalars['JSONObject']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
  zalo?: Maybe<Scalars['String']['output']>;
  zaloNotificationConfig?: Maybe<ZaloNotificationConfig>;
}

export interface BusinessConfig {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Currency>;
  dashboardTemplate?: Maybe<DashboardTemplate>;
  dashboardTemplateId?: Maybe<Scalars['ID']['output']>;
  depositPolicy?: Maybe<Scalars['String']['output']>;
  hasUtilityFeature?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isPasswordLoginEnabled?: Maybe<Scalars['Boolean']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  isThirdPartyLoginEnabled?: Maybe<Scalars['Boolean']['output']>;
  languages?: Maybe<Scalars['String']['output'][]>;
  logo?: Maybe<Scalars['String']['output']>;
  logoMark?: Maybe<Scalars['String']['output']>;
  logoType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<BusinessUser>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  primaryButtonTextColor?: Maybe<Scalars['String']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  ttlockPhoneContact?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  visitTourInstructionLink?: Maybe<Scalars['String']['output']>;
}

export interface BusinessPaymentInfo {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  displayData?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  secretData?: Maybe<Scalars['JSON']['output']>;
  transferPaymentInfos?: Maybe<TransferPaymentInformation[]>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface BusinessPlan {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency: Currency;
  description?: Maybe<Scalars['JSONObject']['output']>;
  features?: Maybe<Scalars['JSONObject']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  intervalCount: Scalars['Float']['output'];
  intervalUnit: IntervalUnit;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  priority: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface BusinessType {
  availableServiceGroupIds: Scalars['ID']['output'][];
  availableServiceGroups: ServiceGroup[];
  businesses: Business[];
  canDeactivate: Scalars['Boolean']['output'];
  category?: Maybe<BusinessTypeCategory>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<DisplayName>;
  example?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export enum BusinessTypeCategory {
  Hospitallity = 'Hospitallity',
  Living = 'Living',
  Others = 'Others',
  Working = 'Working',
}

export interface BusinessUser {
  avatar?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  locationIds?: Maybe<Scalars['ID']['output'][]>;
  permission?: Maybe<Scalars['JSON']['output']>;
  permissionIds?: Maybe<Scalars['JSON']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  resetPasswordExpire?: Maybe<Scalars['String']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  username?: Maybe<Scalars['String']['output']>;
}

export interface CardPaymentMethod {
  brand?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Float']['output']>;
  expYear?: Maybe<Scalars['Float']['output']>;
  funding?: Maybe<Scalars['String']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
}

export interface CashTransferInformation {
  address?: Maybe<Scalars['String']['output']>;
  isDisplayedInvoice?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  receiverName: Scalars['String']['output'];
}

export interface Checkin {
  booking?: Maybe<Booking>;
  bookingId: Scalars['ID']['output'];
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customerId: Scalars['ID']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['DateTime']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface Company {
  address: Scalars['String']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customers?: Maybe<Customer[]>;
  description?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<CompanyMetadataObject>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  taxCode: Scalars['String']['output'];
  teams?: Maybe<Team[]>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  website?: Maybe<Scalars['String']['output']>;
}

export interface CompanyInfoInterface {
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
}

export interface CompanyMetadataObject {
  accountName?: Maybe<Scalars['String']['output']>;
  accountNo?: Maybe<Scalars['String']['output']>;
  addressDisplayName?: Maybe<NullableDisplayName>;
  bankBranch?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  companyDisplayName?: Maybe<NullableDisplayName>;
  position?: Maybe<Scalars['String']['output']>;
  positionDisplayName?: Maybe<NullableDisplayName>;
  representative?: Maybe<Scalars['String']['output']>;
}

export interface Contract {
  appendixType?: Maybe<AppendixType>;
  assignee?: Maybe<BusinessUser>;
  assigneeId?: Maybe<Scalars['ID']['output']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  code: Scalars['String']['output'];
  contractAttachmentType?: Maybe<ContractAttachmentType>;
  contractExtraInfo?: Maybe<ContractExtraInfo>;
  contractIds?: Maybe<Scalars['ID']['output'][]>;
  contractType?: Maybe<ContractType>;
  contractTypeId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['ID']['output'];
  effectiveDate?: Maybe<Scalars['DateTime']['output']>;
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  extendedDate?: Maybe<Scalars['DateTime']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkedContracts?: Maybe<Contract[]>;
  linkedToChangelog?: Maybe<BookingChangelog>;
  liquidationDate?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  mainContract?: Maybe<Contract>;
  mainContractId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  /** Number of days before the contract expires */
  noticePeriod?: Maybe<Scalars['Int']['output']>;
  renewalDeadline?: Maybe<Scalars['DateTime']['output']>;
  renewalNoticeDate?: Maybe<Scalars['DateTime']['output']>;
  reviewDate?: Maybe<Scalars['DateTime']['output']>;
  signedDate?: Maybe<Scalars['DateTime']['output']>;
  stage?: Maybe<ContractStage>;
  status: ContractStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** Used in longterm-living business */
  vehicle?: Maybe<Vehicle>;
}

export enum ContractAttachmentType {
  Appendix = 'Appendix',
  Liquidation = 'Liquidation',
}

export interface ContractExtraInfo {
  customerIds?: Maybe<Scalars['ID']['output'][]>;
  customers?: Maybe<Customer[]>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  numberOfPeople?: Maybe<Scalars['Float']['output']>;
  packageFee?: Maybe<Scalars['Float']['output']>;
  packageFees?: Maybe<PackageFee[]>;
  packageId?: Maybe<Scalars['ID']['output']>;
  paymentPeriod?: Maybe<PaymentPeriodObject>;
  roomServices?: Maybe<RoomServiceItem[]>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  totalDeposit?: Maybe<Scalars['Float']['output']>;
}

export enum ContractStage {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  NotRenewed = 'NOT_RENEWED',
  Terminated = 'TERMINATED',
  UpForRenewal = 'UP_FOR_RENEWAL',
}

export enum ContractStatus {
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  NotSigned = 'NOT_SIGNED',
  Signed = 'SIGNED',
}

export interface ContractType {
  abbreviation?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  contractNumberPrefix?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Number of days before the contract expires */
  noticePeriod?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
}

export interface Coordinates {
  distance?: Maybe<Scalars['Float']['output']>;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
}

export interface CoordinatesDto {
  distance?: InputMaybe<Scalars['Float']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
}

export interface CountAvailableRoomInput {
  countPartiallyAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  endTime: Scalars['DateTime']['input'];
  isShowUnavailable?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfPeople?: InputMaybe<Scalars['Float']['input']>;
  roomTypeIds?: InputMaybe<Scalars['Float']['input'][]>;
  roomTypeNames?: InputMaybe<Scalars['String']['input'][]>;
  serviceGroupId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['DateTime']['input'];
}

export interface CountLocationByRoomType {
  count: Scalars['Float']['output'];
  nameRoomType?: Maybe<Scalars['String']['output']>;
}

export interface CreateServicePreference {
  deviceId: Scalars['String']['input'];
  deviceType: Scalars['String']['input'];
  serviceReferenceIds: Scalars['ID']['input'][];
}

export enum Currency {
  Cad = 'CAD',
  Usd = 'USD',
  Vnd = 'VND',
}

export interface Customer {
  additionalInformation?: Maybe<AdditionalInformation>;
  address?: Maybe<Scalars['String']['output']>;
  appleId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bankAccount?: Maybe<BankAccount>;
  bookings?: Maybe<Booking[]>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['ID']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currentBooking?: Maybe<Booking>;
  currentLocationId?: Maybe<Scalars['ID']['output']>;
  currentRoomId?: Maybe<Scalars['ID']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  customerMapLocations?: Maybe<CustomerMapLocation[]>;
  customerVehicles?: Maybe<CustomerVehicle[]>;
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  documentImages?: Maybe<Scalars['String']['output'][]>;
  email?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<Scalars['String']['output']>;
  facebookId?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  howYouKnowUs?: Maybe<Maybe<Scalars['String']['output']>[]>;
  id: Scalars['ID']['output'];
  identity?: Maybe<Identity>;
  isActive: Scalars['Boolean']['output'];
  job?: Maybe<ReferenceData>;
  jobId?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  membershipSubscription?: Maybe<MembershipSubscription>;
  note?: Maybe<Scalars['String']['output']>;
  onBoardingStatus?: Maybe<OnBoardingStatus>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  primaryMemberId?: Maybe<Scalars['Float']['output']>;
  roomDisplayName?: Maybe<DisplayName>;
  social?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<CustomerStatus>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['ID']['output']>;
  teams?: Maybe<Team[]>;
  temporaryResidenceStatus?: Maybe<TemporaryResidenceStatus>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
  vehicle?: Maybe<Vehicle>;
  vehicles?: Maybe<Vehicle[]>;
  ward?: Maybe<Scalars['String']['output']>;
}

export interface CustomerBookingCredit {
  applyRooms?: Maybe<Scalars['ID']['output'][]>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Currency>;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  joinApplyRooms?: Maybe<Room[]>;
  membershipBookingCreditId: Scalars['ID']['output'];
  membershipPlanId: Scalars['ID']['output'];
  membershipSubscription?: Maybe<MembershipSubscription>;
  membershipSubscriptionId: Scalars['ID']['output'];
  originalPrice?: Maybe<Scalars['Float']['output']>;
  pricePerMonth?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  usageAmount?: Maybe<Scalars['Float']['output']>;
}

export interface CustomerEvent {
  agendaId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  responseType?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CustomerEventStatus>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export enum CustomerEventStatus {
  Cancelled = 'CANCELLED',
  Confirm = 'CONFIRM',
  Unconfirm = 'UNCONFIRM',
}

export interface CustomerEventSummary {
  totalGoing: Scalars['Float']['output'];
  totalInterest: Scalars['Float']['output'];
}

export interface CustomerInfoInterface {
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export interface CustomerMapLocation {
  customer?: Maybe<Customer>;
  customerId: Scalars['ID']['output'];
  customerStatus: CustomerStatus;
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  temporaryResidenceImages?: Maybe<Scalars['String']['output'][]>;
  temporaryResidenceStatus?: Maybe<TemporaryResidenceStatus>;
}

export enum CustomerStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Visitor = 'Visitor',
}

export interface CustomerVehicle {
  brand?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  licensePlate?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  status: VehicleStatus;
  type?: Maybe<VehicleType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface DashboardTemplate {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface DataConfig {
  path: Scalars['String']['input'];
}

export interface DepositInfoObject {
  depositAmount: Scalars['Float']['output'];
  depositDate: Scalars['DateTime']['output'];
  images: Scalars['String']['output'][];
}

export interface DisplayName {
  en: Scalars['String']['output'];
  fr?: Maybe<Scalars['String']['output']>;
  vi?: Maybe<Scalars['String']['output']>;
}

export interface Event {
  address?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  capacity?: Maybe<Scalars['Float']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customerEvent?: Maybe<CustomerEvent>;
  customerEventSummary?: Maybe<CustomerEventSummary>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  eventBy?: Maybe<Scalars['String']['output']>;
  eventCover?: Maybe<Scalars['String']['output']>;
  eventLink?: Maybe<Scalars['String']['output']>;
  eventTime?: Maybe<Scalars['DateTime']['output']>;
  geoLocation?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isCharge?: Maybe<Scalars['Boolean']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  totalConfirm?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface ExtraService {
  amount: Scalars['Float']['output'];
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<BusinessUser>;
  creatorId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  customerInfo?: Maybe<Scalars['JSON']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountAmount: Scalars['Float']['output'];
  displayName?: Maybe<Scalars['JSON']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  extraServiceOrder?: Maybe<ExtraServiceOrder>;
  extraServiceOrderId?: Maybe<Scalars['ID']['output']>;
  extraServiceType?: Maybe<ExtraServiceType>;
  extraServiceTypeId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Maybe<Scalars['String']['output']>[]>;
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['ID']['output']>;
  isPaid: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note: Scalars['String']['output'];
  payType: Scalars['String']['output'];
  platform?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  transactionId: Scalars['ID']['output'];
  unitPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
}

export interface ExtraServiceOrder {
  actualAmount?: Maybe<Scalars['Float']['output']>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryDate?: Maybe<Scalars['DateTime']['output']>;
  discountUnit?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  extraServices?: Maybe<ExtraService[]>;
  files?: Maybe<Scalars['String']['output'][]>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  invoices?: Maybe<Invoice[]>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  orderDate?: Maybe<Scalars['DateTime']['output']>;
  orderItems?: Maybe<Scalars['JSON']['output']>;
  orderStatus?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer used, use invoice instead */
  paidAmount?: Maybe<Scalars['Float']['output']>;
  payType?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['ID']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  primaryMemberTeam?: Maybe<PrimaryMemberTeam>;
  status: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  totalItem?: Maybe<Scalars['Float']['output']>;
  unPaidAmount?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface ExtraServiceType {
  amount: Scalars['Float']['output'];
  availability?: Maybe<RoomServiceAvailability[]>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  deletedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  extraServiceCategory?: Maybe<ReferenceData>;
  extraServiceCategoryId?: Maybe<Scalars['ID']['output']>;
  extraServiceUnit?: Maybe<ReferenceData>;
  extraServiceUnitId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isDefaultRoomService: Scalars['Boolean']['output'];
  isInApp: Scalars['Boolean']['output'];
  isInternal: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface Favorite {
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
}

export interface FilterDto {
  data?: InputMaybe<Scalars['String']['input']>;
  field: Scalars['String']['input'];
  operator: QueryOperator;
}

export interface FilterVacantRoomPublicDto {
  districts?: InputMaybe<Scalars['String']['input'][]>;
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<FilterDto[]>;
  geolocation?: InputMaybe<GeoLocationDto>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  numberOfPeople?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']['input']>;
  serviceReferenceIds?: InputMaybe<Scalars['ID']['input'][]>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface Floor {
  business: Business;
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  floorPlan?: Maybe<Scalars['String']['output']>;
  floorPlanObjects?: Maybe<FloorPlanObject[]>;
  floorPlanStatus?: Maybe<FloorPlanStatus>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Float']['output']>;
  rooms?: Maybe<Room[]>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface FloorPlanObject {
  floor?: Maybe<Floor>;
  floorId: Scalars['ID']['output'];
  height: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  left: Scalars['Float']['output'];
  room?: Maybe<Room>;
  top: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
}

export enum FloorPlanStatus {
  Draft = 'Draft',
  Published = 'Published',
}

export interface GalleryInfo {
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
}

export interface GeoLocationDto {
  /**
   *
   * - Query by geoLocation. Ex: userGeoLocation={"latitude":latitude,"longitude":longitude}
   *
   */
  geoLocation?: InputMaybe<CoordinatesDto>;
  /**
   *
   * - Query by userGeoLocation. Ex: userGeoLocation={"latitude":latitude,"longitude":longitude}
   *
   */
  userGeoLocation?: InputMaybe<CoordinatesDto>;
}

export interface GetMembershipPlanSummaryDto {
  extraServiceTypeIds?: InputMaybe<Scalars['ID']['input'][]>;
  membershipPlanId: Scalars['ID']['input'];
  /** format: YYYY/MM/DD */
  startDate: Scalars['String']['input'];
}

export interface HowDoYouHearOurBusiness {
  isEvents?: Maybe<Scalars['Boolean']['output']>;
  isGoogleResearch?: Maybe<Scalars['Boolean']['output']>;
  isReference?: Maybe<Scalars['Boolean']['output']>;
  isSocialNetwork?: Maybe<Scalars['Boolean']['output']>;
  references?: Maybe<Maybe<OnBoardingReference>[]>;
  socialNetworks?: Maybe<Maybe<SocialNetwork>[]>;
}

export interface IAmenities {
  items: IAmenity[];
  meta: MetaPaginationInterface;
}

export interface IAmenity {
  amenityType?: Maybe<ReferenceData>;
  amenityTypeId: Scalars['ID']['output'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAppFilter: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IBusiness {
  abbreviation?: Maybe<Scalars['String']['output']>;
  aboutUs?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  businessConfig?: Maybe<BusinessConfig>;
  businessPaymentInfos?: Maybe<BusinessPaymentInfo[]>;
  businessPlan?: Maybe<BusinessPlan>;
  businessTypeIds?: Maybe<Scalars['ID']['output'][]>;
  businessTypes?: Maybe<BusinessType[]>;
  city?: Maybe<Scalars['String']['output']>;
  contractInfo?: Maybe<Scalars['JSONObject']['output']>;
  coordinates?: Maybe<Scalars['JSONObject']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  coworkspace_url?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  emailContact?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Scalars['String']['output'][]>;
  geoLocation?: Maybe<Scalars['JSONObject']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  joinDate?: Maybe<Scalars['DateTime']['output']>;
  linkedln?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Location>;
  main_image?: Maybe<Scalars['String']['output']>;
  main_img?: Maybe<Scalars['String']['output']>;
  managementTools?: Maybe<ManagementTools>;
  messenger?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  newNotificationCount?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<BusinessUser>;
  phoneContact?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['JSONObject']['output']>;
  reviews?: Maybe<Review[]>;
  shortIntroduction?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sourcePlatform?: Maybe<Scalars['String']['output']>;
  stats?: Maybe<Scalars['JSONObject']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  subscriptions?: Maybe<Subscription[]>;
  tiktok?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  users?: Maybe<BusinessUser[]>;
  website?: Maybe<Scalars['String']['output']>;
  whiteLabelAppConfig?: Maybe<WhiteLabelAppConfig>;
  work_space_id?: Maybe<Scalars['String']['output']>;
  workingTime?: Maybe<Scalars['JSONObject']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
  zalo?: Maybe<Scalars['String']['output']>;
  zaloNotificationConfig?: Maybe<ZaloNotificationConfig>;
}

export interface IBusinessType {
  availableServiceGroupIds: Scalars['ID']['output'][];
  availableServiceGroups: ServiceGroup[];
  businesses: Business[];
  canDeactivate: Scalars['Boolean']['output'];
  category?: Maybe<BusinessTypeCategory>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<DisplayName>;
  example?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IBusinessTypes {
  items: IBusinessType[];
  meta: MetaPaginationInterface;
}

export interface IEvent {
  address?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  capacity?: Maybe<Scalars['Float']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customerEvent?: Maybe<CustomerEvent>;
  customerEventSummary?: Maybe<CustomerEventSummary>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  eventBy?: Maybe<Scalars['String']['output']>;
  eventCover?: Maybe<Scalars['String']['output']>;
  eventLink?: Maybe<Scalars['String']['output']>;
  eventTime?: Maybe<Scalars['DateTime']['output']>;
  geoLocation?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isCharge?: Maybe<Scalars['Boolean']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  totalConfirm?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IEvents {
  items: IEvent[];
  meta: MetaPaginationInterface;
}

export interface IExtraServiceType {
  amount: Scalars['Float']['output'];
  availability?: Maybe<RoomServiceAvailability[]>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  deletedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  extraServiceCategory?: Maybe<ReferenceData>;
  extraServiceCategoryId?: Maybe<Scalars['ID']['output']>;
  extraServiceUnit?: Maybe<ReferenceData>;
  extraServiceUnitId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isDefaultRoomService: Scalars['Boolean']['output'];
  isInApp: Scalars['Boolean']['output'];
  isInternal: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IExtraServiceTypes {
  items: ExtraServiceType[];
  meta: MetaPaginationInterface;
}

export interface IFloor {
  business: Business;
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  floorPlan?: Maybe<Scalars['String']['output']>;
  floorPlanObjects?: Maybe<FloorPlanObject[]>;
  floorPlanStatus?: Maybe<FloorPlanStatus>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Float']['output']>;
  rooms?: Maybe<Room[]>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IFloors {
  items: IFloor[];
  meta: MetaPaginationInterface;
}

export interface IGetMembershipPlanSummary {
  monthlyBilling: Scalars['Float']['output'];
  proratedAmount: Scalars['Float']['output'];
  recurringBillingDate: Scalars['String']['output'];
  unpaidInvoiceAmount?: Maybe<Scalars['Float']['output']>;
}

export interface ILocation {
  address?: Maybe<Scalars['String']['output']>;
  amenityIds?: Maybe<Scalars['ID']['output'][]>;
  availableRoomTypes?: Maybe<RoomType[]>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  cityId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  contracts?: Maybe<Contract[]>;
  coordinates?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayNameOpenTime?: Maybe<DisplayName[]>;
  displayOpenTime?: Maybe<Scalars['String']['output'][]>;
  distance?: Maybe<Scalars['Float']['output']>;
  distanceFromUser?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  emailContact?: Maybe<Scalars['String']['output']>;
  emailEnquiry?: Maybe<Scalars['String']['output']>;
  establishedAt?: Maybe<Scalars['DateTime']['output']>;
  favorites?: Maybe<Favorite[]>;
  floorPlan?: Maybe<Scalars['String']['output'][]>;
  floors?: Maybe<Floor[]>;
  gallery?: Maybe<Scalars['String']['output'][]>;
  geoLocation?: Maybe<Scalars['JSONObject']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDifferenceTime?: Maybe<Scalars['Boolean']['output']>;
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numOfAvailableRoom?: Maybe<Scalars['Float']['output']>;
  openDate?: Maybe<Scalars['DateTime']['output']>;
  packages?: Maybe<Package[]>;
  phoneContact?: Maybe<Scalars['String']['output']>;
  placeDetail?: Maybe<PlaceDetail>;
  placeId?: Maybe<Scalars['String']['output']>;
  policy?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings?: Maybe<Scalars['Int']['output'][]>;
  representative?: Maybe<BusinessUser>;
  representativeId?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Review[]>;
  roomTypes?: Maybe<RoomType[]>;
  rooms?: Maybe<Room[]>;
  serviceInfor?: Maybe<Scalars['JSON']['output']>;
  serviceReference?: Maybe<ServiceReference>;
  serviceReferenceIds?: Maybe<Scalars['ID']['output'][]>;
  serviceReferences?: Maybe<ServiceReference[]>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LocationStatus>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['Int']['output']>;
  totalFloors?: Maybe<Scalars['Int']['output']>;
  totalReview?: Maybe<Scalars['Int']['output']>;
  totalRooms?: Maybe<Scalars['Int']['output']>;
  totalServices?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  workingTime?: Maybe<WorkingTime>;
}

export interface ILocations {
  items: ILocation[];
  meta: MetaPaginationInterface;
}

export interface IMembershipPlan {
  accessExtraServices?: Maybe<Scalars['ID']['output'][]>;
  accessRooms?: Maybe<Scalars['ID']['output'][]>;
  businessId: Scalars['ID']['output'];
  cancellationNoticeDay?: Maybe<Scalars['Float']['output']>;
  category?: Maybe<MembershipPlanCategory>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<DisplayName>;
  displayName?: Maybe<DisplayName>;
  hasBookingCredit: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isPublic: Scalars['Boolean']['output'];
  joinAccessExtraServiceTypes?: Maybe<ExtraServiceType[]>;
  joinAccessRooms?: Maybe<Room[]>;
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  membershipBookingCredits?: Maybe<MembershipBookingCredit[]>;
  membershipPrices?: Maybe<MembershipPrice[]>;
  minimumCommitmentMonth?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  needApproveForNewMember: Scalars['Boolean']['output'];
  photoURL?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IMembershipPlans {
  items: MembershipPlan[];
  meta: MetaPaginationInterface;
}

export interface IPackage {
  amount?: Maybe<Scalars['Float']['output']>;
  availableCapacity?: Maybe<Scalars['Float']['output']>;
  availableTimeFrom?: Maybe<Scalars['DateTime']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountedAmount?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['JSONObject']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isInApp?: Maybe<Scalars['Boolean']['output']>;
  isVisible: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  minimumDepositAmount?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  occupiedCapacity?: Maybe<Scalars['Float']['output']>;
  originalAmount?: Maybe<Scalars['Float']['output']>;
  packageType?: Maybe<PackageType>;
  packageTypeId?: Maybe<Scalars['ID']['output']>;
  priceUnit?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  searchText?: Maybe<Scalars['String']['output']>;
  timeRangeAvailability?: Maybe<TimeRangeAvailability[]>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IPackageType {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  endTime?: Maybe<Scalars['Float']['output']>;
  exceptDays?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  packages?: Maybe<Package[]>;
  startTime?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<PkgTypeUnit>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IPackageTypes {
  items: IPackageType[];
  meta: MetaPaginationInterface;
}

export interface IPackages {
  items: IPackage[];
  meta: MetaPaginationInterface;
}

export interface IPostComment {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  businessUser?: Maybe<BusinessUser>;
  businessUserId?: Maybe<Scalars['ID']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  isHided?: Maybe<Scalars['Boolean']['output']>;
  post?: Maybe<PostCommunity>;
  postId: Scalars['ID']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface IPostComments {
  items: IPostComment[];
  meta: MetaPaginationInterface;
}

export interface IPostCommunities {
  items: IPostCommunity[];
  meta: MetaPaginationInterface;
}

export interface IPostCommunity {
  business?: Maybe<Business>;
  /** ID of business where user belong to */
  businessId?: Maybe<Scalars['ID']['output']>;
  businessUser?: Maybe<BusinessUser>;
  /** ID of the user account whether the user created the post while logging as user account */
  businessUserId?: Maybe<Scalars['ID']['output']>;
  /** Medium text describing user's interests. There is no limits for the size of text */
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  /** ID of the customer whether the user created the post while logging as customer account */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** List of images links which should be loaded at post detail */
  gallery?: Maybe<Scalars['String']['output'][]>;
  /** Short text which is bigger than contents to highlight the opening of the post contents */
  header?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The field indicates whether the post is from Admin or not */
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  /** This field is set by admin to prevent users from wrong posts */
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  /** The field indicates that the post which is publishing needs re-checking by admin */
  isReported?: Maybe<Scalars['Boolean']['output']>;
  myLike?: Maybe<IPostLike>;
  postComments?: Maybe<PostComment[]>;
  postCommunityLocations?: Maybe<PostCommunityLocation[]>;
  /** The priority defines the order of post in the list. The post has higher priority will be shown first */
  priority?: Maybe<Scalars['Int']['output']>;
  /** status is set by admin group if the group has the rule to verify the post before publishing */
  status?: Maybe<PostStatus>;
  /** Link to a small image as avatar for the post. This image is used as overview at list of posts */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** Value show total comments of the post. This value changes when user trying to comment the post */
  totalComment?: Maybe<Scalars['Int']['output']>;
  /** Value show total reactions of user for the post. Value increase when user hit like and vice versa */
  totalLike?: Maybe<Scalars['Int']['output']>;
  /** Value show total reports of the post. This value based on number of reports from user to admin */
  totalReport?: Maybe<Scalars['Int']['output']>;
  /** Value show interests of user for the post. This value increases when user get the detail of the post */
  totalSeen?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  /** Main ID of Post owner */
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface IPostLike {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  businessUser?: Maybe<BusinessUser>;
  businessUserId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  post?: Maybe<PostCommunity>;
  postId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface IReview {
  authorAvatar?: Maybe<Scalars['String']['output']>;
  authorFullName?: Maybe<Scalars['String']['output']>;
  authorUrl?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  gallery?: Maybe<GalleryInfo[]>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  isInternalRating?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviewId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface IReviews {
  items: IReview[];
  meta: MetaPaginationInterface;
}

export interface IRoom {
  amenities?: Maybe<Amenity[]>;
  amenityIds?: Maybe<Scalars['ID']['output'][]>;
  area?: Maybe<Scalars['Float']['output']>;
  availableCapacity?: Maybe<Scalars['Float']['output']>;
  availableTimeFrom?: Maybe<Scalars['DateTime']['output']>;
  business: Business;
  businessId?: Maybe<Scalars['ID']['output']>;
  capacityPeople?: Maybe<Scalars['Float']['output']>;
  cleanRating?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  facilities?: Maybe<Scalars['JSON']['output']>;
  floor?: Maybe<Floor>;
  floorId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use floorPlanObject instead */
  floorPlan?: Maybe<Scalars['String']['output'][]>;
  floorPlanObject?: Maybe<FloorPlanObject>;
  floorPlanObjectId?: Maybe<Scalars['ID']['output']>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locationRating?: Maybe<Scalars['Int']['output']>;
  meters?: Maybe<RoomMeterObject[]>;
  minimumDepositAmount?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  packageTypeId?: Maybe<Scalars['ID']['output']>;
  packageTypeName?: Maybe<Scalars['JSON']['output']>;
  packageTypeUnit?: Maybe<Scalars['String']['output']>;
  packages?: Maybe<Package[]>;
  priceFrom?: Maybe<Scalars['Float']['output']>;
  priceRating?: Maybe<Scalars['Int']['output']>;
  priceType: PriceType;
  rating?: Maybe<Scalars['Int']['output']>;
  roomReviews?: Maybe<RoomReview[]>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  videos?: Maybe<Scalars['String']['output'][]>;
}

export interface IRoomType {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Location[]>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  packagePrice?: Maybe<Scalars['Float']['output']>;
  packageUnit?: Maybe<Scalars['String']['output']>;
  rooms?: Maybe<Room[]>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']['output']>;
  serviceReference?: Maybe<ServiceReference>;
  serviceReferenceId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IRoomTypes {
  items: IRoomType[];
  meta: MetaPaginationInterface;
}

export interface IRooms {
  items: IRoom[];
  meta: MetaPaginationInterface;
}

export interface IServiceGroup {
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IServiceGroups {
  items: IServiceGroup[];
  meta: MetaPaginationInterface;
}

export interface IServicePreference {
  createdAt: Scalars['DateTime']['output'];
  deviceId: Scalars['String']['output'];
  deviceType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  platform?: Maybe<Scalars['String']['output']>;
  serviceReferenceIds: Scalars['ID']['output'][];
  updatedAt: Scalars['DateTime']['output'];
}

export interface IServicePreferences {
  items: IServicePreference[];
  meta: MetaPaginationInterface;
}

export interface IServiceReference {
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Float']['output']>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IServiceReferences {
  items: IServiceReference[];
  meta: MetaPaginationInterface;
}

export interface Identity {
  FaceIdImage?: Maybe<Scalars['String']['output']>;
  backCitizenImage?: Maybe<Scalars['String']['output']>;
  dateOfExpiry?: Maybe<Scalars['Date']['output']>;
  dateOfIssue?: Maybe<Scalars['Date']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  faceSimilarity?: Maybe<Scalars['Float']['output']>;
  frontCitizenImage?: Maybe<Scalars['String']['output']>;
  isReupload?: Maybe<Scalars['Boolean']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  placeOfIssue?: Maybe<Scalars['String']['output']>;
  reuploadReason?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  temporaryResidenceImages?: Maybe<Scalars['String']['output'][]>;
  type?: Maybe<IdentityDocumentType>;
}

export enum IdentityDocumentType {
  IdentityCard = 'IDENTITY_CARD',
  Passport = 'PASSPORT',
}

export interface Inbox {
  business?: Maybe<Business>;
  businessHasNewMessage: Scalars['Boolean']['output'];
  businessId: Scalars['ID']['output'];
  clientHasNewMessage: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  enquiryType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  incident?: Maybe<Incident>;
  isDeleted: Scalars['Boolean']['output'];
  lastMessage?: Maybe<Message>;
  lastMessageId: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['JSON']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  packageId?: Maybe<Scalars['ID']['output']>;
  packageType?: Maybe<Scalars['String']['output']>;
  packageTypeId?: Maybe<Scalars['ID']['output']>;
  parentInboxId?: Maybe<Scalars['ID']['output']>;
  people?: Maybe<Scalars['Float']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  referenceId?: Maybe<Scalars['ID']['output']>;
  service?: Maybe<RoomType>;
  serviceId?: Maybe<Scalars['ID']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface Incident {
  area?: Maybe<Scalars['String']['output']>;
  assignee?: Maybe<BusinessUser>;
  assigneeId?: Maybe<Scalars['ID']['output']>;
  assignees: BusinessUser[];
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  completeInfo?: Maybe<Scalars['JSON']['output']>;
  completedTime?: Maybe<Scalars['DateTime']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  customerType?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<Scalars['String']['output'][]>;
  firstResponseTime?: Maybe<Scalars['DateTime']['output']>;
  firstUpdatedTime?: Maybe<Scalars['DateTime']['output']>;
  floor?: Maybe<Floor>;
  floorId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  inbox?: Maybe<Inbox>;
  inboxId?: Maybe<Scalars['ID']['output']>;
  incidentType?: Maybe<IncidentType>;
  isFromApp?: Maybe<Scalars['Boolean']['output']>;
  isFromCustomer?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  ratingInfo?: Maybe<RatingInfo>;
  ratingPoint?: Maybe<Scalars['Float']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  roomTypeName?: Maybe<DisplayName>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  typeId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IncidentType {
  assignees: BusinessUser[];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface InfoInterface {
  address?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  senderEmail?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
}

export interface Information {
  content?: Maybe<DisplayName>;
  features?: Maybe<DisplayName[]>;
  subject?: Maybe<DisplayName>;
}

export enum IntervalUnit {
  Month = 'MONTH',
  Year = 'YEAR',
}

export interface Invoice {
  booking?: Maybe<Booking>;
  bookingCode?: Maybe<Scalars['String']['output']>;
  bookingCreditAmount?: Maybe<Scalars['Float']['output']>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  /** This field is only used in long-term living business. */
  contract?: Maybe<Contract>;
  /** This field is only used in long-term living business. */
  contractId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<BusinessUser>;
  createdByBusinessUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerAvatar?: Maybe<Scalars['String']['output']>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['ID']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  customerPhone?: Maybe<Scalars['String']['output']>;
  deductionFee?: Maybe<Scalars['Float']['output']>;
  deductionFeeNotes?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deposit?: Maybe<Scalars['Float']['output']>;
  dueDate: Scalars['DateTime']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  extraFee?: Maybe<Scalars['Float']['output']>;
  extraFeeNotes?: Maybe<Scalars['String']['output']>;
  extraServiceOrder?: Maybe<ExtraServiceOrder>;
  extraServiceOrderCode?: Maybe<Scalars['String']['output']>;
  extraServiceOrderId?: Maybe<Scalars['ID']['output']>;
  haveRefundDeposit?: Maybe<Scalars['Boolean']['output']>;
  haveRefundPrepayment?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  invoiceCode: Scalars['String']['output'];
  invoiceItems?: Maybe<InvoiceItem[]>;
  invoiceStatus?: Maybe<InvoiceStatus>;
  invoiceStatusId: Scalars['ID']['output'];
  invoiceTransactions?: Maybe<InvoiceTransaction[]>;
  invoiceType?: Maybe<InvoiceType>;
  invoiceTypeId: Scalars['ID']['output'];
  isLast: Scalars['Boolean']['output'];
  isPdfFailed: Scalars['Boolean']['output'];
  issueDate?: Maybe<Scalars['DateTime']['output']>;
  itemNotes?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  locationAddress?: Maybe<Scalars['String']['output']>;
  locationEmailContact?: Maybe<Scalars['String']['output']>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locationName?: Maybe<Scalars['String']['output']>;
  locationPhoneContact?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['JSON']['output']>;
  oldDebtAmount?: Maybe<Scalars['Float']['output']>;
  overpaymentAmount?: Maybe<Scalars['Float']['output']>;
  paidAmount?: Maybe<Scalars['Float']['output']>;
  paidAmountByWord?: Maybe<Scalars['JSON']['output']>;
  paymentProofs?: Maybe<PaymentProof[]>;
  pdfLink?: Maybe<Scalars['JSON']['output']>;
  requestedDeletionAt?: Maybe<Scalars['DateTime']['output']>;
  requestedDeletionBy?: Maybe<BusinessUser>;
  requestedDeletionById?: Maybe<Scalars['ID']['output']>;
  requestedDeletionExtraInfo?: Maybe<RequestDeleteInvoiceExtraInfo>;
  retryTimes: Scalars['Float']['output'];
  roomName?: Maybe<Scalars['JSON']['output']>;
  saveOldDebt: Scalars['Boolean']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalAmountWithoutTax?: Maybe<Scalars['Float']['output']>;
  transactions?: Maybe<Transaction[]>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<BusinessUser>;
  updatedByBusinessUserId?: Maybe<Scalars['ID']['output']>;
  usageDeductionAmount?: Maybe<Scalars['Float']['output']>;
  usageEndDate?: Maybe<Scalars['DateTime']['output']>;
  usageStartDate?: Maybe<Scalars['DateTime']['output']>;
  utilityOrder?: Maybe<UtilityOrder>;
  utilityOrderCode?: Maybe<Scalars['String']['output']>;
  utilityOrderId?: Maybe<Scalars['ID']['output']>;
}

export interface InvoiceInfoConfig {
  invoiceTypeIds?: Maybe<Scalars['ID']['output'][]>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAutoSend?: Maybe<Scalars['Boolean']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
}

export interface InvoiceInfoInterface {
  id: Scalars['ID']['output'];
  invoiceCode: Scalars['String']['output'];
}

export interface InvoiceItem {
  breakdownBooking?: Maybe<BreakdownBooking>;
  breakdownBookingId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  extraService?: Maybe<ExtraService>;
  extraServiceId?: Maybe<Scalars['ID']['output']>;
  extraServiceIds?: Maybe<Scalars['ID']['output'][]>;
  extraServiceTypeId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  invoice?: Maybe<Invoice>;
  invoiceId: Scalars['ID']['output'];
  invoiceItemCategory?: Maybe<InvoiceItemCategory>;
  invoiceItemCategoryId: Scalars['ID']['output'];
  isFromExisted?: Maybe<Scalars['Boolean']['output']>;
  membershipSubscriptionId?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<InvoiceItemMetadataObject>;
  name?: Maybe<Scalars['JSON']['output']>;
  orderIndex: Scalars['Float']['output'];
  quantity?: Maybe<Scalars['Float']['output']>;
  referenceEntityId?: Maybe<Scalars['ID']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalAmountWithoutTax?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<Scalars['JSON']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  utility?: Maybe<Utility>;
  utilityId?: Maybe<Scalars['ID']['output']>;
  utilityIds?: Maybe<Scalars['ID']['output'][]>;
}

export interface InvoiceItemCategory {
  displayName?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
}

export interface InvoiceItemMetadataObject {
  breakdownBookingNumberOfPeople?: Maybe<Scalars['Float']['output']>;
  utilityCurrentNumber?: Maybe<Scalars['Float']['output']>;
  utilityFormerNumber?: Maybe<Scalars['Float']['output']>;
}

export interface InvoiceStatus {
  backgroundColor?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
}

export interface InvoiceTransaction {
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  invoiceId: Scalars['ID']['output'];
  paidAmount: Scalars['Float']['output'];
  transaction?: Maybe<Transaction>;
  transactionId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
}

export interface InvoiceType {
  defaultTransactionTypeId?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
}

export interface Location {
  address?: Maybe<Scalars['String']['output']>;
  amenityIds?: Maybe<Scalars['ID']['output'][]>;
  availableRoomTypes?: Maybe<RoomType[]>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  cityId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  contracts?: Maybe<Contract[]>;
  coordinates?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  distanceFromUser?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  emailContact?: Maybe<Scalars['String']['output']>;
  emailEnquiry?: Maybe<Scalars['String']['output']>;
  establishedAt?: Maybe<Scalars['DateTime']['output']>;
  favorites?: Maybe<Favorite[]>;
  floorPlan?: Maybe<Scalars['String']['output'][]>;
  floors?: Maybe<Floor[]>;
  gallery?: Maybe<Scalars['String']['output'][]>;
  geoLocation?: Maybe<Scalars['JSONObject']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDifferenceTime?: Maybe<Scalars['Boolean']['output']>;
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numOfAvailableRoom?: Maybe<Scalars['Float']['output']>;
  openDate?: Maybe<Scalars['DateTime']['output']>;
  packages?: Maybe<Package[]>;
  phoneContact?: Maybe<Scalars['String']['output']>;
  placeDetail?: Maybe<PlaceDetail>;
  placeId?: Maybe<Scalars['String']['output']>;
  policy?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings?: Maybe<Scalars['Int']['output'][]>;
  representative?: Maybe<BusinessUser>;
  representativeId?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Review[]>;
  roomTypes?: Maybe<RoomType[]>;
  rooms?: Maybe<Room[]>;
  serviceInfor?: Maybe<Scalars['JSON']['output']>;
  serviceReference?: Maybe<ServiceReference>;
  serviceReferenceIds?: Maybe<Scalars['ID']['output'][]>;
  serviceReferences?: Maybe<ServiceReference[]>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LocationStatus>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['Int']['output']>;
  totalFloors?: Maybe<Scalars['Int']['output']>;
  totalReview?: Maybe<Scalars['Int']['output']>;
  totalRooms?: Maybe<Scalars['Int']['output']>;
  totalServices?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  workingTime?: Maybe<WorkingTime>;
}

export interface LocationInfoInterface {
  address?: Maybe<Scalars['String']['output']>;
  emailContact?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneContact?: Maybe<Scalars['String']['output']>;
}

export interface LocationQueryDto {
  amenityIds?: InputMaybe<Scalars['JSON']['input']>;
  countAvailableRoomInput?: InputMaybe<CountAvailableRoomInput>;
  districtFilter?: InputMaybe<Scalars['String']['input'][]>;
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<FilterDto[]>;
  geolocation?: InputMaybe<GeoLocationDto>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  packageFilter?: InputMaybe<PackageFilter>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']['input']>;
  serviceReferenceId?: InputMaybe<Scalars['ID']['input']>;
}

export enum LocationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Verified = 'VERIFIED',
}

export interface ManagementTools {
  defaultTools?: Maybe<Scalars['String']['output'][]>;
  otherTools?: Maybe<Scalars['String']['output'][]>;
}

export interface MembershipBookingCredit {
  applyRooms?: Maybe<Scalars['ID']['output'][]>;
  createdAt: Scalars['DateTime']['output'];
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Currency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  joinApplyRooms?: Maybe<Room[]>;
  membershipPlan?: Maybe<MembershipPlan>;
  membershipPlanId: Scalars['ID']['output'];
  pricePerMonth?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface MembershipPlan {
  accessExtraServices?: Maybe<Scalars['ID']['output'][]>;
  accessRooms?: Maybe<Scalars['ID']['output'][]>;
  businessId: Scalars['ID']['output'];
  cancellationNoticeDay?: Maybe<Scalars['Float']['output']>;
  category?: Maybe<MembershipPlanCategory>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<DisplayName>;
  displayName?: Maybe<DisplayName>;
  hasBookingCredit: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isPublic: Scalars['Boolean']['output'];
  joinAccessExtraServiceTypes?: Maybe<ExtraServiceType[]>;
  joinAccessRooms?: Maybe<Room[]>;
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  membershipBookingCredits?: Maybe<MembershipBookingCredit[]>;
  membershipPrices?: Maybe<MembershipPrice[]>;
  minimumCommitmentMonth?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  needApproveForNewMember: Scalars['Boolean']['output'];
  photoURL?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export enum MembershipPlanCategory {
  Coworking = 'COWORKING',
  Program = 'PROGRAM',
}

export interface MembershipPrice {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Currency>;
  dateUnit?: Maybe<IntervalUnit>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  membershipPlan?: Maybe<MembershipPlan>;
  membershipPlanId: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  priceUnit?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface MembershipSubscription {
  accessExtraServicePrices?: Maybe<Scalars['JSONObject']['output'][]>;
  accessExtraServices?: Maybe<Scalars['ID']['output'][]>;
  accessRooms?: Maybe<Scalars['ID']['output'][]>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  cancellationNoticeDay?: Maybe<Scalars['Float']['output']>;
  cancellationType?: Maybe<Scalars['String']['output']>;
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  cardInfo?: Maybe<CardPaymentMethod>;
  category?: Maybe<MembershipPlanCategory>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Currency>;
  currentPeriodEnd?: Maybe<Scalars['DateTime']['output']>;
  currentPeriodStart?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerBookingCredits?: Maybe<CustomerBookingCredit[]>;
  customerId: Scalars['ID']['output'];
  dateUnit?: Maybe<IntervalUnit>;
  deductionAmount?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<DisplayName>;
  errorStripeInvoiceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  membershipPlanId: Scalars['ID']['output'];
  minimumCommitmentMonth?: Maybe<Scalars['Float']['output']>;
  monthlyBilling?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  numberOfBilling?: Maybe<Scalars['Float']['output']>;
  numberOfPaymentFailed?: Maybe<Scalars['Float']['output']>;
  originalPrice?: Maybe<Scalars['Float']['output']>;
  pausedAt?: Maybe<Scalars['DateTime']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  photoURL?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priceUnit?: Maybe<Scalars['Float']['output']>;
  proratedAmount?: Maybe<Scalars['Float']['output']>;
  selectedExtraServiceIds?: Maybe<Scalars['ID']['output'][]>;
  status: Scalars['String']['output'];
  stripePaymentMethod?: Maybe<Scalars['String']['output']>;
  subscribedDate?: Maybe<Scalars['DateTime']['output']>;
  unpausedAt?: Maybe<Scalars['DateTime']['output']>;
  unsubscribedDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface Message {
  createdAt: Scalars['DateTime']['output'];
  files?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  inboxId?: Maybe<Scalars['ID']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  isRead: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  messageType?: Maybe<Scalars['String']['output']>;
  receiverId?: Maybe<Scalars['ID']['output']>;
  receiverLogo?: Maybe<Scalars['String']['output']>;
  receiverName?: Maybe<Scalars['String']['output']>;
  senderId: Scalars['ID']['output'];
  senderLogo?: Maybe<Scalars['String']['output']>;
  senderName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
}

export interface MetaPaginationInterface {
  currentPage: Scalars['Float']['output'];
  itemCount: Scalars['Float']['output'];
  itemsPerPage: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
}

export interface MobileVersionConfigResponse {
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  information?: Maybe<Information>;
  isForceUpdate?: Maybe<Scalars['Boolean']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  updateStatus: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
}

export interface Mutation {
  createServicePreference: IServicePreference;
  registerBusiness: IBusiness;
  registerTrial: ResponseMessageBase;
  updateServicePreference: IServicePreference;
}

export interface MutationCreateServicePreferenceArgs {
  input: CreateServicePreference;
}

export interface MutationRegisterBusinessArgs {
  input: RegisterBusinessDto;
}

export interface MutationRegisterTrialArgs {
  input: RegisterTrialDto;
}

export interface MutationUpdateServicePreferenceArgs {
  input: UpdateServicePreference;
}

export interface NullableDisplayName {
  en?: Maybe<Scalars['String']['output']>;
  vi?: Maybe<Scalars['String']['output']>;
}

export enum OnBoardingReference {
  AcceleratorOrOrganization = 'ACCELERATOR_OR_ORGANIZATION',
  Coach = 'COACH',
  EmployeeOrBoardmember = 'EMPLOYEE_OR_BOARDMEMBER',
  Startup = 'STARTUP',
}

export enum OnBoardingStatus {
  Completed = 'COMPLETED',
  Incompleted = 'INCOMPLETED',
  Skipped = 'SKIPPED',
}

export enum PkgTypeUnit {
  Days = 'days',
  Hours = 'hours',
  Months = 'months',
  Weeks = 'weeks',
  Years = 'years',
}

export interface Package {
  amount?: Maybe<Scalars['Float']['output']>;
  availableCapacity?: Maybe<Scalars['Float']['output']>;
  availableTimeFrom?: Maybe<Scalars['DateTime']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountedAmount?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['JSONObject']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isInApp?: Maybe<Scalars['Boolean']['output']>;
  isVisible: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  minimumDepositAmount?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  occupiedCapacity?: Maybe<Scalars['Float']['output']>;
  originalAmount?: Maybe<Scalars['Float']['output']>;
  packageType?: Maybe<PackageType>;
  packageTypeId?: Maybe<Scalars['ID']['output']>;
  priceUnit?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  searchText?: Maybe<Scalars['String']['output']>;
  timeRangeAvailability?: Maybe<TimeRangeAvailability[]>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface PackageFee {
  price: Scalars['Float']['output'];
  unit: PkgTypeUnit;
}

export interface PackageFilter {
  packageTypeId?: InputMaybe<Scalars['ID']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeNames?: InputMaybe<Scalars['String']['input'][]>;
  serviceReferenceId?: InputMaybe<Scalars['ID']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
}

export interface PackageType {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  endTime?: Maybe<Scalars['Float']['output']>;
  exceptDays?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  packages?: Maybe<Package[]>;
  startTime?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<PkgTypeUnit>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface Payment {
  booking?: Maybe<Booking>;
  bookingCode?: Maybe<Scalars['String']['output']>;
  bookingId: Scalars['ID']['output'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  extraServiceCode?: Maybe<Scalars['String']['output']>;
  extraServiceOrder?: Maybe<ExtraServiceOrder>;
  extraServiceOrderId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  paymentImage?: Maybe<Scalars['String']['output']>;
  paymentInfo?: Maybe<Scalars['JSON']['output']>;
  paymentNote?: Maybe<Scalars['String']['output']>;
  paymentType?: Maybe<Scalars['String']['output']>;
  status: PaymentStatus;
  totalAmount: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface PaymentDueReminder {
  invoiceTypeIds?: Maybe<Scalars['ID']['output'][]>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAutoSend?: Maybe<Scalars['Boolean']['output']>;
  remindPeriods?: Maybe<Scalars['Float']['output'][]>;
  templateId?: Maybe<Scalars['String']['output']>;
}

export interface PaymentPeriodObject {
  duration: Scalars['Float']['output'];
  endDay?: Maybe<Scalars['Float']['output']>;
  startDay?: Maybe<Scalars['Float']['output']>;
  unit: PaymentPeriodUnit;
}

export enum PaymentPeriodUnit {
  Months = 'months',
  Years = 'years',
}

export interface PaymentProof {
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  invoice?: Maybe<Invoice>;
  invoiceId: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  status: PaymentProofStatus;
  transaction?: Maybe<Transaction>;
  transactionId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export enum PaymentProofStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export enum PaymentStatus {
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export interface PlaceDetail {
  geometry?: Maybe<Coordinates>;
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photos: PlaceDetailPhoto[];
  rating: Scalars['Float']['output'];
  reviews: PlaceDetailReview[];
  types: Scalars['String']['output'][];
  url: Scalars['String']['output'];
  website: Scalars['String']['output'];
}

export interface PlaceDetailPhoto {
  height: Scalars['Int']['output'];
  html_attributions: Scalars['String']['output'][];
  photo_reference: Scalars['String']['output'];
  width: Scalars['Int']['output'];
}

export interface PlaceDetailReview {
  author_name: Scalars['String']['output'];
  author_url: Scalars['String']['output'];
  language: Scalars['String']['output'];
  profile_photo_url: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  relative_time_description: Scalars['String']['output'];
  text: Scalars['String']['output'];
  time: Scalars['Int']['output'];
}

export interface PostComment {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  businessUser?: Maybe<BusinessUser>;
  businessUserId?: Maybe<Scalars['ID']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  isHided?: Maybe<Scalars['Boolean']['output']>;
  post?: Maybe<PostCommunity>;
  postId: Scalars['ID']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface PostCommunity {
  business?: Maybe<Business>;
  /** ID of business where user belong to */
  businessId?: Maybe<Scalars['ID']['output']>;
  businessUser?: Maybe<BusinessUser>;
  /** ID of the user account whether the user created the post while logging as user account */
  businessUserId?: Maybe<Scalars['ID']['output']>;
  /** Medium text describing user's interests. There is no limits for the size of text */
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  /** ID of the customer whether the user created the post while logging as customer account */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** List of images links which should be loaded at post detail */
  gallery?: Maybe<Scalars['String']['output'][]>;
  /** Short text which is bigger than contents to highlight the opening of the post contents */
  header?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The field indicates whether the post is from Admin or not */
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  /** This field is set by admin to prevent users from wrong posts */
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  /** The field indicates that the post which is publishing needs re-checking by admin */
  isReported?: Maybe<Scalars['Boolean']['output']>;
  postComments?: Maybe<PostComment[]>;
  postCommunityLocations?: Maybe<PostCommunityLocation[]>;
  /** The priority defines the order of post in the list. The post has higher priority will be shown first */
  priority?: Maybe<Scalars['Int']['output']>;
  /** status is set by admin group if the group has the rule to verify the post before publishing */
  status?: Maybe<PostStatus>;
  /** Link to a small image as avatar for the post. This image is used as overview at list of posts */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** Value show total comments of the post. This value changes when user trying to comment the post */
  totalComment?: Maybe<Scalars['Int']['output']>;
  /** Value show total reactions of user for the post. Value increase when user hit like and vice versa */
  totalLike?: Maybe<Scalars['Int']['output']>;
  /** Value show total reports of the post. This value based on number of reports from user to admin */
  totalReport?: Maybe<Scalars['Int']['output']>;
  /** Value show interests of user for the post. This value increases when user get the detail of the post */
  totalSeen?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  /** Main ID of Post owner */
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface PostCommunityLocation {
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  postCommunity?: Maybe<PostCommunity>;
  postCommunityId: Scalars['ID']['output'];
}

export enum PostStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export enum PriceType {
  All = 'ALL',
  Individual = 'INDIVIDUAL',
}

export interface PrimaryMemberTeam {
  email: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export interface QrCodeImage {
  qrCodeFileName: Scalars['String']['output'];
  qrCodeUrl: Scalars['String']['output'];
}

export enum QueryOperator {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  IsNotNull = 'isNotNull',
  IsNull = 'isNull',
  Like = 'like',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq',
  Nin = 'nin',
  UnaccentLike = 'unaccentLike',
}

export interface Query {
  baseQuery: Scalars['String']['output'];
  checkForceUpdateVersion?: Maybe<MobileVersionConfigResponse>;
  getAmenities: IAmenities;
  getAmenity: IAmenity;
  getAvailableServiceGroups: IServiceGroups;
  getAvailableServiceReferences: IServiceReferences;
  getBusinessType: IBusinessType;
  getBusinessTypes: IBusinessTypes;
  getEvent: IEvent;
  getEvents: IEvents;
  getExtraServiceType: IExtraServiceType;
  getExtraServiceTypes: IExtraServiceTypes;
  getExtraServiceTypesWla: IExtraServiceTypes;
  getFloor: IFloor;
  getFloors: IFloors;
  getLocation: ILocation;
  getLocationBySlug: ILocation;
  getLocationCountByRoomType: CountLocationByRoomType[];
  getLocations: ILocations;
  getMembershipPlan: IMembershipPlan;
  getMembershipPlanSummary: IGetMembershipPlanSummary;
  getMembershipPlans: IMembershipPlans;
  getMyServicePreference: IServicePreference;
  getPackage: IPackage;
  getPackageType: IPackageType;
  getPackageTypes: IPackageTypes;
  getPackages: IPackages;
  getPost: IPostCommunity;
  getPostComments: IPostComments;
  getPostCommunities: IPostCommunities;
  getPostCommunity: IPostCommunity;
  getPosts: IPostCommunities;
  getReview: IReview;
  getReviews: IReviews;
  getRoom: IRoom;
  getRoomType: IRoomType;
  getRoomTypes: IRoomTypes;
  getRooms: IRooms;
  getSBARoomType: IRoomType;
  getSBARoomTypes: IRoomTypes;
  getServiceGroup: IServiceGroup;
  getServiceGroups: IServiceGroups;
  getServiceGroupsByLocation: IServiceGroups;
  getServicePreference: IServicePreference;
  getServicePreferences: IServicePreferences;
  getServiceReference: IServiceReference;
  getServiceReferences: IServiceReferences;
  getVacantRooms: IRooms;
  getWlaEvents: IEvents;
  searchPackage: IPackages;
  searchPackageUnitByService: Scalars['String']['output'][];
  searchServiceGroup: IServiceGroups;
}

export interface QueryGetAmenitiesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetAmenityArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetAvailableServiceGroupsArgs {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  queryParams: QueryFilterDto;
}

export interface QueryGetAvailableServiceReferencesArgs {
  locationId?: InputMaybe<Scalars['ID']['input']>;
  queryParams: QueryFilterDto;
  searchConfigParams?: InputMaybe<SearchConfigParams>;
}

export interface QueryGetBusinessTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetBusinessTypesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetEventArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetEventsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetExtraServiceTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetExtraServiceTypesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetExtraServiceTypesWlaArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetFloorArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetFloorsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetLocationArgs {
  coordinates?: InputMaybe<GeoLocationDto>;
  id: Scalars['String']['input'];
}

export interface QueryGetLocationBySlugArgs {
  locationSlug: Scalars['String']['input'];
}

export interface QueryGetLocationCountByRoomTypeArgs {
  queryParams: LocationQueryDto;
}

export interface QueryGetLocationsArgs {
  queryParams: LocationQueryDto;
}

export interface QueryGetMembershipPlanArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetMembershipPlanSummaryArgs {
  input: GetMembershipPlanSummaryDto;
}

export interface QueryGetMembershipPlansArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetMyServicePreferenceArgs {
  deviceId: Scalars['String']['input'];
}

export interface QueryGetPackageArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPackageTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPackageTypesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPackagesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPostArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPostCommentsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPostCommunitiesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPostCommunityArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPostsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetReviewArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetReviewsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetRoomArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetRoomTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetRoomTypesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetRoomsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetSbaRoomTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetSbaRoomTypesArgs {
  roomTypeQueryDto: RoomTypeQueryDto;
}

export interface QueryGetServiceGroupArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetServiceGroupsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetServiceGroupsByLocationArgs {
  locationId: Scalars['ID']['input'];
  queryParams: QueryFilterDto;
}

export interface QueryGetServicePreferenceArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetServicePreferencesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetServiceReferenceArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetServiceReferencesArgs {
  queryParams: QueryFilterDto;
  searchConfigParams?: InputMaybe<SearchConfigParams>;
}

export interface QueryGetVacantRoomsArgs {
  queryParams: FilterVacantRoomPublicDto;
}

export interface QueryGetWlaEventsArgs {
  queryParams: QueryFilterDto;
}

export interface QuerySearchPackageArgs {
  input: SearchPackagesInput;
  queryParams: QueryFilterDto;
}

export interface QuerySearchPackageUnitByServiceArgs {
  input: SearchPackageUnitsInput;
}

export interface QuerySearchServiceGroupArgs {
  input: SearchServiceGroupDto;
  queryParams: QueryFilterDto;
}

export interface QueryFilterDto {
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<FilterDto[]>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']['input']>;
}

export interface RatingInfo {
  feedback?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Scalars['String']['output'][]>;
}

export interface Receipt {
  booking?: Maybe<Booking>;
  bookingId: Scalars['ID']['output'];
  bookingInfo?: Maybe<BookingInfoInterface>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  creator?: Maybe<BusinessUser>;
  creatorId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  invoiceInfo?: Maybe<InvoiceInfoInterface>;
  joinTransactions?: Maybe<Transaction>;
  locationInfo?: Maybe<LocationInfoInterface>;
  receiptInfo: ReceiptInfoInterface;
  status: ReceiptStatus;
  total: Scalars['Float']['output'];
  transactions: TransactionInfoInterface[];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface ReceiptInfoInterface {
  companyInfo?: Maybe<CompanyInfoInterface>;
  customerInfo?: Maybe<CustomerInfoInterface>;
  info: InfoInterface;
  teamInfo?: Maybe<TeamInfoInterface>;
  type: ReceiptType;
}

export enum ReceiptStatus {
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
}

export enum ReceiptType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL',
  Team = 'TEAM',
}

export interface RecurringInfo {
  endTime: Scalars['DateTime']['output'];
  recurringDaysOfWeek?: Maybe<Scalars['Float']['output'][]>;
  recurringInterval: Scalars['Float']['output'];
  recurringPosition: RecurringPosition;
  recurringUnit: RecurringUnit;
  startTime: Scalars['DateTime']['output'];
}

export interface RecurringInputDto {
  recurringDaysOfWeek?: InputMaybe<Scalars['Float']['input'][]>;
  recurringInterval: Scalars['Float']['input'];
  recurringPosition?: InputMaybe<RecurringPosition>;
  recurringUnit: RecurringUnit;
}

export enum RecurringPosition {
  Absolute = 'ABSOLUTE',
  Relative = 'RELATIVE',
}

export enum RecurringUnit {
  Days = 'DAYS',
  Months = 'MONTHS',
  Weeks = 'WEEKS',
}

export interface ReferenceData {
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  subType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface ReferenceInformation {
  company: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  title: Scalars['String']['output'];
}

export interface RegisterBusinessDto {
  dataBusiness: RegisterDataBusiness;
  dataConfig: DataConfig;
  dataOwner: RegisterDataOwner;
}

export interface RegisterDataBusiness {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  businessTypeId: Scalars['ID']['input'];
  city: Scalars['String']['input'];
  coordinates?: InputMaybe<CoordinatesDto>;
  country: Scalars['String']['input'];
  emailContact?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  phoneContact?: InputMaybe<Scalars['String']['input']>;
}

export interface RegisterDataOwner {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  verifyCode: Scalars['String']['input'];
}

export interface RegisterTrialDto {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  numberOfLocation: Scalars['Float']['input'];
  numberOfRoom?: InputMaybe<Scalars['Float']['input']>;
  numberOfStaff: Scalars['Float']['input'];
  phoneNumber: Scalars['String']['input'];
  searchNeeds: Scalars['String']['input'][];
  typeOfSpace: Scalars['String']['input'];
}

export interface RequestDeleteInvoiceExtraInfo {
  extraServiceOrderIds?: Maybe<Scalars['ID']['output'][]>;
  transactionIds?: Maybe<Scalars['ID']['output'][]>;
  utilityOrderIds?: Maybe<Scalars['ID']['output'][]>;
}

export interface ResponseMessageBase {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface Review {
  authorAvatar?: Maybe<Scalars['String']['output']>;
  authorFullName?: Maybe<Scalars['String']['output']>;
  authorUrl?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  gallery?: Maybe<GalleryInfo[]>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  isInternalRating?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviewId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface Role {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated un-used field */
  locationId: Scalars['ID']['output'];
  /** @deprecated un-used field, will be removed soon */
  locationIds?: Maybe<Scalars['ID']['output'][]>;
  locations?: Maybe<Location[]>;
  name?: Maybe<Scalars['String']['output']>;
  permission?: Maybe<Scalars['JSON']['output']>;
  permissionIds?: Maybe<Scalars['JSON']['output']>;
  roleType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface Room {
  amenities?: Maybe<Amenity[]>;
  amenityIds?: Maybe<Scalars['ID']['output'][]>;
  area?: Maybe<Scalars['Float']['output']>;
  availableCapacity?: Maybe<Scalars['Float']['output']>;
  availableTimeFrom?: Maybe<Scalars['DateTime']['output']>;
  business: Business;
  businessId?: Maybe<Scalars['ID']['output']>;
  capacityPeople?: Maybe<Scalars['Float']['output']>;
  cleanRating?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  facilities?: Maybe<Scalars['JSON']['output']>;
  floor?: Maybe<Floor>;
  floorId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use floorPlanObject instead */
  floorPlan?: Maybe<Scalars['String']['output'][]>;
  floorPlanObject?: Maybe<FloorPlanObject>;
  floorPlanObjectId?: Maybe<Scalars['ID']['output']>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locationRating?: Maybe<Scalars['Int']['output']>;
  meters?: Maybe<RoomMeterObject[]>;
  minimumDepositAmount?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  packageTypeId?: Maybe<Scalars['ID']['output']>;
  packageTypeName?: Maybe<Scalars['JSON']['output']>;
  packageTypeUnit?: Maybe<Scalars['String']['output']>;
  packages?: Maybe<Package[]>;
  priceFrom?: Maybe<Scalars['Float']['output']>;
  priceRating?: Maybe<Scalars['Int']['output']>;
  priceType: PriceType;
  rating?: Maybe<Scalars['Int']['output']>;
  roomReviews?: Maybe<RoomReview[]>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  videos?: Maybe<Scalars['String']['output'][]>;
}

export interface RoomMeterObject {
  meterID?: Maybe<Scalars['String']['output']>;
  utilityTypeId: Scalars['ID']['output'];
  utilityTypeName: Scalars['String']['output'];
}

export enum RoomPaymentStatus {
  Debt = 'Debt',
  IncurNextPeriod = 'IncurNextPeriod',
  PartialPaid = 'PartialPaid',
  WaitForPayment = 'WaitForPayment',
}

export interface RoomReview {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  cleanRating?: Maybe<Scalars['Float']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locationRating?: Maybe<Scalars['Float']['output']>;
  priceRating?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  visitTour?: Maybe<VisitTour>;
  visitTourId?: Maybe<Scalars['ID']['output']>;
}

export enum RoomServiceAvailability {
  First = 'First',
  Last = 'Last',
  Monthly = 'Monthly',
}

export interface RoomServiceItem {
  displayName?: Maybe<DisplayName>;
  extraServiceTypeId?: Maybe<Scalars['ID']['output']>;
  price: Scalars['Float']['output'];
  type: RoomServiceType;
  unitDisplayName?: Maybe<DisplayName>;
  utilityTypeId?: Maybe<Scalars['ID']['output']>;
}

export enum RoomServiceType {
  Fixed = 'Fixed',
  PerUsage = 'PerUsage',
}

export interface RoomType {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Location[]>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  packagePrice?: Maybe<Scalars['Float']['output']>;
  packageUnit?: Maybe<Scalars['String']['output']>;
  rooms?: Maybe<Room[]>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']['output']>;
  serviceReference?: Maybe<ServiceReference>;
  serviceReferenceId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface RoomTypeQueryDto {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  /**
   *
   * - Filter equal: filters:[{field: "User.name", operator: eq, data: "Enouvo"}]
   * - Filter not equal: filters:[{field: "User.name", operator: neq, data: "Enouvo"}]
   * - Filter less than: filters:[{field: "User.age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "User.age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "User.age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "User.age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "User.name", operator: in, data: "EnouvoSpace,Enosta"}]
   * - Filter field not in many choice: filters:[{field: "User.name", operator: nin, data: "EnouvoSpace,Enosta"}]
   * - Filter field by text: filters:[{field: "User.name", operator: like, data: "Enouvo"}]
   */
  filters?: InputMaybe<FilterDto[]>;
  geolocation?: InputMaybe<Scalars['JSON']['input']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "User.createdAt:DESC"
   * - Use NULLS_FIRST OR NULLS_LAST to determine where null value should be, Ex: orderBy: "User.createdAt:DESC:NULLS_FIRST"
   *
   */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']['input']>;
}

export interface SearchConfigParams {
  /** Search by displayName & locale. Example: "sortByDisplayName":"ASC" */
  sortByDisplayName?: InputMaybe<Scalars['String']['input']>;
}

export interface SearchPackageUnitsInput {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  serviceGroupId?: InputMaybe<Scalars['ID']['input']>;
  serviceReferenceId?: InputMaybe<Scalars['ID']['input']>;
}

export interface SearchPackagesInput {
  endTime: Scalars['DateTime']['input'];
  floorId?: InputMaybe<Scalars['ID']['input']>;
  floorIds?: InputMaybe<Scalars['ID']['input'][]>;
  locationId: Scalars['ID']['input'];
  numberPeople: Scalars['Float']['input'];
  packageUnit?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  recurringInput?: InputMaybe<RecurringInputDto>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  searchPackageName?: InputMaybe<Scalars['String']['input']>;
  selectTime?: InputMaybe<Scalars['Boolean']['input']>;
  serviceGroup?: InputMaybe<Scalars['String']['input']>;
  serviceGroupId?: InputMaybe<Scalars['ID']['input']>;
  serviceReferenceId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['DateTime']['input'];
  updateBookingId?: InputMaybe<Scalars['ID']['input']>;
}

export interface SearchServiceGroupDto {
  packageTypeUnit: Scalars['String']['input'];
}

export interface ServiceGroup {
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface ServiceReference {
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Float']['output']>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export enum SocialNetwork {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  Tiktok = 'TIKTOK',
  Youtube = 'YOUTUBE',
}

export interface Subscription {
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  businessPlan?: Maybe<BusinessPlan>;
  businessPlanId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  currency: Currency;
  failCount: Scalars['Float']['output'];
  failReason?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  nextBillingTime: Scalars['DateTime']['output'];
  note?: Maybe<Scalars['String']['output']>;
  permissionGroupCodes?: Maybe<Scalars['JSON']['output']>;
  price: Scalars['Float']['output'];
  startTime: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface TtLock {
  batteryPercentage?: Maybe<Scalars['String']['output']>;
  businessId: Scalars['ID']['output'];
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creatorId: Scalars['ID']['output'];
  eKeyLockData?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keyId: Scalars['Float']['output'];
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  lockData?: Maybe<Scalars['String']['output']>;
  lockId: Scalars['Float']['output'];
  lockName?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface TtLockEKey {
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdForVisitTour?: Maybe<Scalars['Boolean']['output']>;
  creatorId: Scalars['ID']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  keyId: Scalars['Float']['output'];
  keyName: Scalars['String']['output'];
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  lockData?: Maybe<Scalars['String']['output']>;
  lockId: Scalars['Float']['output'];
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  startDate: Scalars['Date']['output'];
  status?: Maybe<TtLockEKeyStatus>;
  ttlock?: Maybe<TtLock>;
  ttlockFingerprints?: Maybe<TtLockFingerprint[]>;
  ttlockId: Scalars['ID']['output'];
  ttlockUser?: Maybe<TtLockUser>;
  ttlockUserId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visitTour?: Maybe<VisitTour>;
}

export enum TtLockEKeyStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
}

export interface TtLockFingerprint {
  businessId: Scalars['ID']['output'];
  businessUserId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creatorId: Scalars['ID']['output'];
  customerId?: Maybe<Scalars['ID']['output']>;
  fingerprintDisplayName: DisplayName;
  fingerprintId: Scalars['Float']['output'];
  fingerprintName: Scalars['String']['output'];
  fingerprintNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locationId: Scalars['ID']['output'];
  ttlockEKey?: Maybe<TtLockEKey>;
  ttlockId: Scalars['ID']['output'];
  ttlockUserId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface TtLockUser {
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  prefixedUsername?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
}

export interface Team {
  avatar?: Maybe<Scalars['String']['output']>;
  businessId?: Maybe<Scalars['ID']['output']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  numberOfMember?: Maybe<Scalars['Float']['output']>;
  payMember?: Maybe<Customer>;
  payMemberId?: Maybe<Scalars['ID']['output']>;
  primaryMember?: Maybe<Customer>;
  primaryMemberId?: Maybe<Scalars['ID']['output']>;
  social?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface TeamInfoInterface {
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export enum TemporaryResidenceStatus {
  NotRegistered = 'NotRegistered',
  Pending = 'Pending',
  Registered = 'Registered',
}

export interface TimeRangeAvailability {
  endTime?: Maybe<Scalars['DateTime']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
}

export interface Transaction {
  amount: Scalars['Float']['output'];
  amountPaid?: Maybe<Scalars['Float']['output']>;
  attachments?: Maybe<Scalars['String']['output'][]>;
  booking?: Maybe<Booking>;
  bookingId?: Maybe<Scalars['ID']['output']>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  category: TransactionTypeCategory;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  creator?: Maybe<BusinessUser>;
  creatorId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  extraInfo?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  invoiceTransactions?: Maybe<InvoiceTransaction[]>;
  invoices?: Maybe<Invoice[]>;
  isReceipted?: Maybe<Scalars['Boolean']['output']>;
  isVATInvoice?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  payType?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['ID']['output']>;
  primaryMemberTeam?: Maybe<PrimaryMemberTeam>;
  receipt?: Maybe<Receipt>;
  receiptId?: Maybe<Scalars['ID']['output']>;
  requestedDeletionAt?: Maybe<Scalars['DateTime']['output']>;
  requestedDeletionBy?: Maybe<BusinessUser>;
  requestedDeletionById?: Maybe<Scalars['ID']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  transactionDate?: Maybe<Scalars['DateTime']['output']>;
  transactionType?: Maybe<TransactionType>;
  transactionTypeId?: Maybe<Scalars['ID']['output']>;
  transferPaymentInformation?: Maybe<TransferPaymentInformation>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface TransactionInfoInterface {
  amount?: Maybe<Scalars['Float']['output']>;
  category?: Maybe<TransactionTypeCategory>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  transactionDate?: Maybe<Scalars['Date']['output']>;
  transactionType?: Maybe<Scalars['String']['output']>;
  transactionTypeId?: Maybe<Scalars['ID']['output']>;
}

export interface TransactionType {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  category?: Maybe<TransactionTypeCategory>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  inReport: Scalars['Boolean']['output'];
  isActive: Scalars['Boolean']['output'];
  isDefault: Scalars['Boolean']['output'];
  locationId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  searchText?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export enum TransactionTypeCategory {
  Accrued = 'ACCRUED',
  Expense = 'EXPENSE',
  Income = 'INCOME',
}

export interface TransferPaymentInformation {
  bankTransferInformation?: Maybe<BankTransferInformation>;
  businessId: Scalars['ID']['output'];
  cashTransferInformation?: Maybe<CashTransferInformation>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  locationId?: Maybe<Scalars['ID']['output']>;
  /** Field is used to develope in the future, not use now */
  momoTransferInformation?: Maybe<Scalars['JSONObject']['output']>;
  paymentMethod?: Maybe<BusinessPaymentInfo>;
  paymentMethodId: Scalars['ID']['output'];
  /** Field is used to develope in the future, not use now */
  paypalTransferInformation?: Maybe<Scalars['JSONObject']['output']>;
  updatedAt: Scalars['DateTime']['output'];
}

export interface UpdateServicePreference {
  deviceId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  serviceReferenceIds: Scalars['ID']['input'][];
}

export interface User {
  appleId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['Date']['output']>;
  businessUsers?: Maybe<BusinessUser[]>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  facebookId?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDisabled: Scalars['Boolean']['output'];
  isVerifyCode?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  pinnedLocation?: Maybe<Location>;
  pinnedLocationId?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpire?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  userRoles?: Maybe<UserRole[]>;
  username?: Maybe<Scalars['String']['output']>;
  verifyCode?: Maybe<Scalars['String']['output']>;
  verifyCodeExpire?: Maybe<Scalars['DateTime']['output']>;
}

export interface UserInfo {
  appleId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookId?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export interface UserRole {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<Role>;
  roleId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
}

export interface Utility {
  billAmount: Scalars['Float']['output'];
  booking?: Maybe<Booking>;
  bookingId: Scalars['ID']['output'];
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  consumption?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Currency;
  currentNumber?: Maybe<Scalars['Float']['output']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['ID']['output'];
  defaultImage?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountAmount: Scalars['Float']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  formerNumber?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Maybe<Scalars['String']['output']>[]>;
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['ID']['output']>;
  kind: RoomServiceType;
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  oldUtilityTypeName?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  room?: Maybe<Room>;
  roomId: Scalars['ID']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  unitPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  utilityOrder?: Maybe<UtilityOrder>;
  utilityOrderId: Scalars['ID']['output'];
  utilityType?: Maybe<UtilityType>;
  utilityTypeId: Scalars['ID']['output'];
}

export interface UtilityOrder {
  booking?: Maybe<Booking>;
  bookingId: Scalars['Float']['output'];
  businessId: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdByUserId?: Maybe<Scalars['Float']['output']>;
  customer?: Maybe<Customer>;
  customerId: Scalars['Float']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  location?: Maybe<Location>;
  locationId: Scalars['Float']['output'];
  note?: Maybe<Scalars['String']['output']>;
  orderDate: Scalars['DateTime']['output'];
  paymentStatus: UtilityOrderPaymentStatus;
  room?: Maybe<Room>;
  roomId: Scalars['Float']['output'];
  totalBillAmount: Scalars['Float']['output'];
  totalItem: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedByUserId?: Maybe<Scalars['Float']['output']>;
  utilities?: Maybe<Utility[]>;
}

export enum UtilityOrderPaymentStatus {
  Paid = 'PAID',
  Partial = 'PARTIAL',
  Unpaid = 'UNPAID',
}

export interface UtilityType {
  applyFrom?: Maybe<Scalars['DateTime']['output']>;
  availability?: Maybe<RoomServiceAvailability[]>;
  businessId: Scalars['ID']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['ID']['output'];
  currency: Currency;
  displayName?: Maybe<DisplayName>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isDefaultRoomService: Scalars['Boolean']['output'];
  isRequiredMeter: Scalars['Boolean']['output'];
  kind: RoomServiceType;
  location?: Maybe<Location>;
  locationId: Scalars['ID']['output'];
  locationIds: Scalars['ID']['output'][];
  locationNames?: Maybe<Scalars['String']['output'][]>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  unit?: Maybe<ReferenceData>;
  unitId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<BusinessUser>;
}

export interface UtilityTypeIndex {
  currentNumber: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
}

export interface Vehicle {
  brand?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  type?: Maybe<VehicleType>;
}

export enum VehicleStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum VehicleType {
  Bicycle = 'BICYCLE',
  Car = 'CAR',
  Motorbike = 'MOTORBIKE',
}

export interface VisitTour {
  arrivalTime: Scalars['DateTime']['output'];
  assignee?: Maybe<BusinessUser>;
  assigneeId?: Maybe<Scalars['ID']['output']>;
  bookingRequest?: Maybe<BookingRequest>;
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  howYouKnowUs?: Maybe<Scalars['String']['output'][]>;
  id: Scalars['ID']['output'];
  inbox?: Maybe<Inbox>;
  inboxId?: Maybe<Scalars['ID']['output']>;
  isDeposited: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['ID']['output']>;
  packageType?: Maybe<PackageType>;
  packageTypeId?: Maybe<Scalars['ID']['output']>;
  platform: Scalars['String']['output'];
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  roomReview?: Maybe<RoomReview>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  status: VisitTourStatus;
  ttlockEkey?: Maybe<TtLockEKey>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  visitor?: Maybe<Customer>;
  visitorId?: Maybe<Scalars['ID']['output']>;
}

export enum VisitTourStatus {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Done = 'DONE',
  Waiting = 'WAITING',
}

export interface WhiteLabelAppConfig {
  androidId?: Maybe<Scalars['String']['output']>;
  androidLink?: Maybe<Scalars['String']['output']>;
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customConfigs?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  intro?: Maybe<Scalars['JSON']['output']>;
  iosId?: Maybe<Scalars['String']['output']>;
  iosLink?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface WorkingTime {
  friday?: Maybe<WorkingTimeObject>;
  monday?: Maybe<WorkingTimeObject>;
  saturday?: Maybe<WorkingTimeObject>;
  sunday?: Maybe<WorkingTimeObject>;
  thursday?: Maybe<WorkingTimeObject>;
  tuesday?: Maybe<WorkingTimeObject>;
  wednesday?: Maybe<WorkingTimeObject>;
}

export interface WorkingTimeObject {
  closeTime?: Maybe<Scalars['TimeDate']['output']>;
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  openTime?: Maybe<Scalars['TimeDate']['output']>;
}

export interface ZaloNotificationConfig {
  bookingInfo?: Maybe<BookingInfoConfig>;
  business?: Maybe<Business>;
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  invoiceInfo?: Maybe<InvoiceInfoConfig>;
  keys?: Maybe<ZaloNotificationKeysInfo>;
  paymentDueReminder?: Maybe<PaymentDueReminder>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface ZaloNotificationKeysInfo {
  accessToken?: Maybe<Scalars['String']['output']>;
  appId?: Maybe<Scalars['String']['output']>;
  atExpireIn?: Maybe<Scalars['DateTime']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  secretKey?: Maybe<Scalars['String']['output']>;
}

export const MetaFragmentFragmentDoc = gql`
  fragment MetaFragment on MetaPaginationInterface {
    totalItems
    itemCount
    itemsPerPage
    totalPages
    currentPage
  }
`;

export const GetFloorsForVisitTourDocument = gql`
  query GetFloorsForVisitTour($queryParams: QueryFilterDto!) {
    getFloors(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetFloorsForVisitTourQuery__
 *
 * To run a query within a React component, call `useGetFloorsForVisitTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFloorsForVisitTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFloorsForVisitTourQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetFloorsForVisitTourQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetFloorsForVisitTourQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetFloorsForVisitTourQuery,
      GetFloorsForVisitTourQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFloorsForVisitTourQuery,
    GetFloorsForVisitTourQueryVariables
  >(GetFloorsForVisitTourDocument, options);
}

export function useGetFloorsForVisitTourLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFloorsForVisitTourQuery,
    GetFloorsForVisitTourQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFloorsForVisitTourQuery,
    GetFloorsForVisitTourQueryVariables
  >(GetFloorsForVisitTourDocument, options);
}

export function useGetFloorsForVisitTourSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFloorsForVisitTourQuery,
    GetFloorsForVisitTourQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetFloorsForVisitTourQuery,
    GetFloorsForVisitTourQueryVariables
  >(GetFloorsForVisitTourDocument, options);
}

export type GetFloorsForVisitTourQueryHookResult = ReturnType<
  typeof useGetFloorsForVisitTourQuery
>;

export type GetFloorsForVisitTourLazyQueryHookResult = ReturnType<
  typeof useGetFloorsForVisitTourLazyQuery
>;

export type GetFloorsForVisitTourSuspenseQueryHookResult = ReturnType<
  typeof useGetFloorsForVisitTourSuspenseQuery
>;

export type GetFloorsForVisitTourQueryResult = Apollo.QueryResult<
  GetFloorsForVisitTourQuery,
  GetFloorsForVisitTourQueryVariables
>;

export function refetchGetFloorsForVisitTourQuery(
  variables: GetFloorsForVisitTourQueryVariables,
) {
  return { query: GetFloorsForVisitTourDocument, variables };
}

export interface MetaFragmentFragment {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export type GetFloorsForVisitTourQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export interface GetFloorsForVisitTourQuery {
  getFloors: {
    items: { id: string; name: string }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}
