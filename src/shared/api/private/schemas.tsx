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

export interface AddBankTransferPaymentDto {
  bookingId?: InputMaybe<Scalars['ID']['input']>;
  businessId: Scalars['ID']['input'];
  extraServiceOrderId?: InputMaybe<Scalars['ID']['input']>;
  paymentImage: Scalars['String']['input'];
  paymentNote: Scalars['String']['input'];
  totalAmount: Scalars['Float']['input'];
}

export interface AddPaymentDto {
  bookingId: Scalars['ID']['input'];
  businessId: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  phonenumber?: InputMaybe<Scalars['String']['input']>;
  returnUrl?: InputMaybe<Scalars['String']['input']>;
}

export interface AdditionalInformation {
  NEQ: Scalars['String']['output'];
  businessName: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  howDoYouHearOurBusiness?: Maybe<HowDoYouHearOurBusiness>;
  references?: Maybe<ReferenceInformation[]>;
}

export interface AdditionalInformationDto {
  NEQ: Scalars['String']['input'];
  businessName: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  howDoYouHearOurBusiness?: InputMaybe<HowDoYouHearOurBusinessInput>;
  references?: InputMaybe<ReferenceInformationInput[]>;
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

export interface BookingCalendarDto {
  endTime: Scalars['DateTime']['input'];
  roomIds?: InputMaybe<Scalars['ID']['input'][]>;
  selectTime: Scalars['Boolean']['input'];
  startTime: Scalars['DateTime']['input'];
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

export interface BundleDisplayModel {
  duration: Scalars['Float']['output'];
  durationHour: Scalars['Float']['output'];
  durationType: Scalars['String']['output'];
  endTime: Scalars['DateTime']['output'];
  estFee: Scalars['Float']['output'];
  packageData: Scalars['JSON']['output'];
  packageId: Scalars['Float']['output'];
  startTime: Scalars['DateTime']['output'];
  totalAmount: Scalars['Float']['output'];
}

export interface BundleModel {
  duration: Scalars['Float']['output'];
  durationHour: Scalars['Float']['output'];
  durationType: Scalars['String']['output'];
  endTime: Scalars['DateTime']['output'];
  estFee: Scalars['Float']['output'];
  packageData: Scalars['JSON']['output'];
  packageId: Scalars['Float']['output'];
  startTime: Scalars['DateTime']['output'];
  totalAmount: Scalars['Float']['output'];
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

export interface CalculateBookingDto {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  discountUnit: Scalars['String']['input'];
  discountValue: Scalars['Float']['input'];
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  numberOfPeople: Scalars['Float']['input'];
  packageFee?: InputMaybe<Scalars['Float']['input']>;
  packageId: Scalars['ID']['input'];
  platform?: InputMaybe<Scalars['String']['input']>;
  recurringInput?: InputMaybe<RecurringInputDto>;
  roomId: Scalars['ID']['input'];
  startTime: Scalars['DateTime']['input'];
}

export interface CalculatePriceModel {
  bundleDisplay: BundleDisplayModel[];
  bundles: BundleModel[];
  discount: Scalars['JSON']['output'];
  hasMembershipPlan?: Maybe<Scalars['Boolean']['output']>;
  isGroup: Scalars['Boolean']['output'];
  maxCapacity: Scalars['Float']['output'];
  nonAvailableDays?: Maybe<Scalars['DateTime']['output'][]>;
  nonWorkingDays: NonWorkingDaysModel;
  promoTotal: Scalars['Float']['output'];
  remainingBookingCreditTotal?: Maybe<Scalars['Float']['output']>;
  subTotal: Scalars['Float']['output'];
  totalAmount: Scalars['Float']['output'];
  warnings?: Maybe<Scalars['String']['output'][]>;
}

export interface CalendarInput {
  endTime: Scalars['DateTime']['input'];
  packageTypeUnits?: InputMaybe<Scalars['String']['input'][]>;
  paymentStatuses?: InputMaybe<Scalars['String']['input'][]>;
  roomIds?: InputMaybe<Scalars['ID']['input'][]>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['DateTime']['input'];
  statuses?: InputMaybe<Scalars['String']['input'][]>;
}

export interface CancelBookingDto {
  applyFor?: InputMaybe<UpdateRecurringBookingApplyFor>;
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
}

export interface CancelMembershipSubscriptionDto {
  /** format: YYYY/MM/DD */
  cancellationDate: Scalars['String']['input'];
  cancellationType: SubscriptionCancellationType;
  id: Scalars['ID']['input'];
}

export interface CancelVisitTourDto {
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
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

export interface ChargeBillingItem {
  amount?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<DisplayName>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
}

export interface ChargeMembershipSubscriptionDto {
  chargePaymentMethod: ChargePaymentMethodDto;
  membershipSubscriptionId: Scalars['ID']['input'];
}

export interface ChargePaymentMethodDto {
  savePaymentMethod?: InputMaybe<Scalars['Boolean']['input']>;
  stripePaymentMethodId: Scalars['String']['input'];
}

export interface CheckNonWorkingDaysInRecurringDaysDto {
  endTime: Scalars['DateTime']['input'];
  packageTypeId: Scalars['ID']['input'];
  recurringInput?: InputMaybe<RecurringInputDto>;
  startTime: Scalars['DateTime']['input'];
}

export interface CheckNonWorkingDaysInRecurringDaysModel {
  hasAtLeastOneDay: Scalars['Boolean']['output'];
  occurredNonWorkingDays: Scalars['Float']['output'][];
}

export interface CheckRoomAvailabliltyInput {
  endTime: Scalars['DateTime']['input'];
  numberOfPeople?: InputMaybe<Scalars['Float']['input']>;
  startTime: Scalars['DateTime']['input'];
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

export interface CheckinInfo {
  startTime: Scalars['DateTime']['input'];
}

export interface ClientDeleteMessageInput {
  inboxId: Scalars['Float']['input'];
  messageId: Scalars['Float']['input'];
}

export interface ClientLoginResponseDto {
  appleId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookId?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  refreshToken: Scalars['String']['output'];
  roleId?: Maybe<Scalars['ID']['output']>;
  token: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
}

export interface ClientReadMessageInput {
  ids: Scalars['ID']['input'][];
  inboxId: Scalars['Float']['input'];
}

export interface ClientSendMessageInput {
  customerId: Scalars['Float']['input'];
  files?: InputMaybe<FileInput[]>;
  inboxId: Scalars['Float']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  messageType: Scalars['String']['input'];
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

export interface CreateBlockedCommunityUserDto {
  blockedUserId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateBookingRequestDto {
  depositInfo?: InputMaybe<DepositInfo>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  numberOfPeople: Scalars['Float']['input'];
  startTime: Scalars['DateTime']['input'];
  visitTourId: Scalars['ID']['input'];
}

export interface CreateExtraServiceInput {
  extraServiceTypeId: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
}

export interface CreateExtraServiceOrderDto {
  bookingId?: InputMaybe<Scalars['ID']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  extraServices: ExtraServiceOrderItem[];
  files?: InputMaybe<Scalars['String']['input'][]>;
  images?: InputMaybe<Scalars['String']['input'][]>;
  note?: InputMaybe<Scalars['String']['input']>;
  payType?: InputMaybe<Scalars['String']['input']>;
  /** IIG WLW only */
  paymentMethod?: InputMaybe<PaymentMethodDto>;
}

export interface CreateInboxBaseInput {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  enquiryType?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
  packageType?: InputMaybe<Scalars['String']['input']>;
  people?: InputMaybe<Scalars['Float']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  referenceId?: InputMaybe<Scalars['ID']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
}

export interface CreateIncidentDto {
  area?: InputMaybe<Scalars['String']['input']>;
  bookingId?: InputMaybe<Scalars['ID']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input'][]>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  message: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeId: Scalars['ID']['input'];
}

export interface CreateInstallationDto {
  deviceToken: Scalars['String']['input'];
  deviceType: Scalars['String']['input'];
  firebaseToken: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  target?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateMomoPaymentResponse {
  amount?: Maybe<Scalars['Float']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  transid?: Maybe<Scalars['String']['output']>;
}

export interface CreatePaymentProofDto {
  images: Scalars['String']['input'][];
  invoiceId: Scalars['ID']['input'];
}

export interface CreatePostCommentDto {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  content: Scalars['String']['input'];
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  image?: InputMaybe<Scalars['String']['input']>;
  isHidden: Scalars['Boolean']['input'];
  postId: Scalars['ID']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
}

export interface CreatePostDto {
  content: Scalars['String']['input'];
  /** Give empty array if user does not upload images */
  gallery: Scalars['String']['input'][];
  header?: InputMaybe<Scalars['String']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
}

export interface CreatePostLikeDto {
  postId: Scalars['ID']['input'];
}

export interface CreatePostReportDto {
  postCommentId?: InputMaybe<Scalars['ID']['input']>;
  postId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
}

export interface CreateReportedCommunityUserDto {
  reason?: InputMaybe<Scalars['String']['input']>;
  reportedUserId: Scalars['ID']['input'];
}

export interface CreateRoomReviewDto {
  cleanRating: Scalars['Float']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input'][]>;
  locationRating: Scalars['Float']['input'];
  priceRating: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  visitTourId: Scalars['ID']['input'];
}

export interface CreateServicePreference {
  deviceId: Scalars['String']['input'];
  deviceType: Scalars['String']['input'];
  serviceReferenceIds: Scalars['ID']['input'][];
}

export interface CreateVisitTourDto {
  arrivalTime: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  howYouKnowUs?: InputMaybe<Scalars['String']['input'][]>;
  locationId: Scalars['ID']['input'];
  packageTypeId?: InputMaybe<Scalars['ID']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId: Scalars['ID']['input'];
}

export interface CreateVisitTourPubliclyDto {
  arrivalTime: Scalars['DateTime']['input'];
  backCitizenImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  frontCitizenImage?: InputMaybe<Scalars['String']['input']>;
  howYouKnowUs: Scalars['String']['input'][];
  locationId: Scalars['ID']['input'];
  packageTypeId?: InputMaybe<Scalars['ID']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  visitorEmail: Scalars['String']['input'];
  visitorFullName: Scalars['String']['input'];
  visitorPhoneNumber: Scalars['String']['input'];
}

export enum Currency {
  Cad = 'CAD',
  Usd = 'USD',
  Vnd = 'VND',
}

export interface CurrentMembershipSubscription {
  bookingCreditAmount?: Maybe<Scalars['Float']['output']>;
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  monthlyBilling?: Maybe<MonthlyBilling>;
  planDisplayName?: Maybe<DisplayName>;
  planName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subscribedDate?: Maybe<Scalars['DateTime']['output']>;
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

export interface DeletePostCommentDto {
  id: Scalars['ID']['input'];
}

export interface DeletePostDto {
  id: Scalars['ID']['input'];
}

export interface DepositInfo {
  depositAmount: Scalars['Float']['input'];
  depositDate: Scalars['DateTime']['input'];
  images: Scalars['String']['input'][];
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

export interface DisplayNameDto {
  en: Scalars['String']['input'];
  fr?: InputMaybe<Scalars['String']['input']>;
  vi?: InputMaybe<Scalars['String']['input']>;
}

export interface DistrictWhiteLabelQueryDto {
  cityFilter?: InputMaybe<Scalars['String']['input'][]>;
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

export interface ExtraServiceOrderItem {
  extraServiceTypeId: Scalars['ID']['input'];
  images?: InputMaybe<Scalars['String']['input'][]>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  quantity: Scalars['Float']['input'];
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

export interface FeedbackIncidentDto {
  id: Scalars['ID']['input'];
  ratingInfo?: InputMaybe<RatingInfoDo>;
  ratingPoint: Scalars['Float']['input'];
}

export interface FileInput {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
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

export interface ForgotPasswordInputDto {
  email: Scalars['String']['input'];
}

export interface GalleryInfo {
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
}

export interface GalleryInput {
  key: Scalars['String']['input'];
  url: Scalars['String']['input'];
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

export interface HideCommunityPostCommentDto {
  postCommentId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}

export interface HideCommunityPostDto {
  postId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}

export interface HowDoYouHearOurBusiness {
  isEvents?: Maybe<Scalars['Boolean']['output']>;
  isGoogleResearch?: Maybe<Scalars['Boolean']['output']>;
  isReference?: Maybe<Scalars['Boolean']['output']>;
  isSocialNetwork?: Maybe<Scalars['Boolean']['output']>;
  references?: Maybe<Maybe<OnBoardingReference>[]>;
  socialNetworks?: Maybe<Maybe<SocialNetwork>[]>;
}

export interface HowDoYouHearOurBusinessInput {
  isEvents?: InputMaybe<Scalars['Boolean']['input']>;
  isGoogleResearch?: InputMaybe<Scalars['Boolean']['input']>;
  isReference?: InputMaybe<Scalars['Boolean']['input']>;
  isSocialNetwork?: InputMaybe<Scalars['Boolean']['input']>;
  references?: InputMaybe<InputMaybe<OnBoardingReference>[]>;
  socialNetworks?: InputMaybe<InputMaybe<SocialNetwork>[]>;
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

export interface IAppSetting {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  lastValue: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
}

export interface IAppSettings {
  items: IAppSetting[];
  meta: MetaPaginationInterface;
}

export interface IBanner {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isInApp: Scalars['Boolean']['output'];
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IBanners {
  items: IBanner[];
  meta: MetaPaginationInterface;
}

export interface IBooking {
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

export interface IBookingPolicy {
  businessId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  defaultBookingDuration: Scalars['Float']['output'];
  hasSpecialOffer: Scalars['Boolean']['output'];
  isAllowBeyondCapacity: Scalars['Boolean']['output'];
  isAutoConfirm: Scalars['Boolean']['output'];
  isCancelable: Scalars['Boolean']['output'];
  isTaxApplied: Scalars['Boolean']['output'];
  locationId: Scalars['ID']['output'];
  taxPolicies?: Maybe<TaxPolicies>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<BusinessUser>;
  updatedByBusinessUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IBookingRequest {
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

export interface IBookingRequests {
  items: IBookingRequest[];
  meta: MetaPaginationInterface;
}

export interface IBookings {
  items: IBooking[];
  meta: MetaPaginationInterface;
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

export interface IBusinessConfig {
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

export interface IBusinessPaymentInfo {
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

export interface IBusinessPaymentInfos {
  items: IBusinessPaymentInfo[];
  meta: MetaPaginationInterface;
}

export interface IBusinessSummary {
  totalCustomer: Scalars['Float']['output'];
  totalLocation: Scalars['Float']['output'];
  totalRoom: Scalars['Float']['output'];
}

export interface ICalendar {
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
  packageTypeDisplayName?: Maybe<DisplayName>;
  packageTypeName?: Maybe<Scalars['String']['output']>;
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

export interface ICalendarFloorItem {
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
  rooms: ICalendarRoomItem[];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface ICalendarRoomItem {
  amenities?: Maybe<Amenity[]>;
  amenityIds?: Maybe<Scalars['ID']['output'][]>;
  area?: Maybe<Scalars['Float']['output']>;
  availableCapacity?: Maybe<Scalars['Float']['output']>;
  availableTimeFrom?: Maybe<Scalars['DateTime']['output']>;
  bookings: Booking[];
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
  isReserved: Scalars['Boolean']['output'];
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

export interface ICity {
  name: Scalars['String']['output'];
  totalAvailableRooms: Scalars['Float']['output'];
}

export interface ICustomer {
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
  hasBookingsOfTeams?: Maybe<Scalars['String']['output'][]>;
  howYouKnowUs?: Maybe<Maybe<Scalars['String']['output']>[]>;
  id: Scalars['ID']['output'];
  identity?: Maybe<Identity>;
  isActive: Scalars['Boolean']['output'];
  isPrimaryMemberOfTeams?: Maybe<Scalars['String']['output'][]>;
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

export interface ICustomerEvent {
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

export interface ICustomerEvents {
  items: ICustomerEvent[];
  meta: MetaPaginationInterface;
}

export interface ICustomers {
  items: ICustomer[];
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

export interface IExtraServiceOrder {
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

export interface IExtraServiceOrders {
  items: IExtraServiceOrder[];
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

export interface IGetUploadingCitizenIcRequest {
  hasUploadedCitizenIDCard?: Maybe<Scalars['Boolean']['output']>;
  isReupload?: Maybe<Scalars['Boolean']['output']>;
  reuploadReason?: Maybe<Scalars['String']['output']>;
}

export interface IInbox {
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

export interface IInboxes {
  items: IInbox[];
  meta: MetaPaginationInterface;
}

export interface IIncident {
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

export interface IIncidentType {
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

export interface IIncidentTypes {
  items: IIncidentType[];
  meta: MetaPaginationInterface;
}

export interface IIncidents {
  items: IIncident[];
  meta: MetaPaginationInterface;
}

export interface IInstallation {
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId?: Maybe<Scalars['ID']['output']>;
  deviceToken: Scalars['String']['output'];
  deviceType?: Maybe<Scalars['String']['output']>;
  firebaseToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface IInstallations {
  items: IInstallation[];
  meta: MetaPaginationInterface;
}

export interface IInvoice {
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

export interface IInvoices {
  items: IInvoice[];
  meta: MetaPaginationInterface;
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

export interface IMembershipSubscription {
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
  unpaidInvoiceAmount?: Maybe<Scalars['Float']['output']>;
  unpausedAt?: Maybe<Scalars['DateTime']['output']>;
  unsubscribedDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IMembershipSubscriptions {
  items: MembershipSubscription[];
  meta: MetaPaginationInterface;
}

export interface IMessage {
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

export interface IMessages {
  items: IMessage[];
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

export interface IPackages {
  items: IPackage[];
  meta: MetaPaginationInterface;
}

export interface IPayment {
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

export interface IPaymentProof {
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

export interface IPaymentProofs {
  items: IPaymentProof[];
  meta: MetaPaginationInterface;
}

export interface IPostBlog {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  postCategoryBlog?: Maybe<PostCategoryBlog>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IPostBlogs {
  items: IPostBlog[];
  meta: MetaPaginationInterface;
}

export interface IPostCategoryBlog {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  postBlogs?: Maybe<PostBlog[]>;
  priority: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface IPostCategoryBlogs {
  items: IPostCategoryBlog[];
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

export interface IPostReport {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  post?: Maybe<PostCommunity>;
  postCommentId?: Maybe<Scalars['ID']['output']>;
  postId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
}

export interface IPreSignUrl {
  fileName: Scalars['String']['output'];
  uploadUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
}

export interface IPreviewInvoiceData {
  bankInfo: BankTransferInformation[];
  bookingCreditAmount: Scalars['String']['output'];
  bookingDeposit?: Maybe<Scalars['String']['output']>;
  businessLogo?: Maybe<Scalars['String']['output']>;
  businessName?: Maybe<Scalars['String']['output']>;
  cashInfo: CashTransferInformation[];
  code: Scalars['String']['output'];
  customerAddress: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  customerPhone: Scalars['String']['output'];
  deposit?: Maybe<Scalars['String']['output']>;
  dueDate: Scalars['DateTime']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  invoiceCode: Scalars['String']['output'];
  invoiceItems: InvoiceItem[];
  invoicePeriod: Scalars['String']['output'];
  invoiceType: Scalars['String']['output'];
  isTaxIncluded?: Maybe<Scalars['Boolean']['output']>;
  issueDate: Scalars['DateTime']['output'];
  itemNotes?: Maybe<Scalars['String']['output']>;
  locationAddress?: Maybe<Scalars['String']['output']>;
  locationEmailContact?: Maybe<Scalars['String']['output']>;
  locationName: Scalars['String']['output'];
  locationPhoneContact: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  oldDebt?: Maybe<Scalars['String']['output']>;
  refundDeposit?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalAmount: Scalars['String']['output'];
  totalAmountByWord: DisplayName;
  totalAmountWithoutTax: Scalars['String']['output'];
  totalPaidAmount: Scalars['String']['output'];
  totalPayment?: Maybe<Scalars['String']['output']>;
  totalTaxAmount: Scalars['String']['output'];
}

export interface IRate {
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  describe?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rating?: Maybe<ReferenceData>;
  /** referenceDataId */
  ratingId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
}

export interface IRates {
  items: IRate[];
  meta: MetaPaginationInterface;
}

export interface IReferenceData {
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

export interface IReferenceDatas {
  items: IReferenceData[];
  meta: MetaPaginationInterface;
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

export interface IRoomReview {
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

export interface IRoomReviews {
  items: IRoomReview[];
  meta: MetaPaginationInterface;
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

export interface IttLockLog {
  action?: Maybe<TtLockLogAction>;
  businessId: Scalars['ID']['output'];
  businessUser?: Maybe<BusinessUser>;
  businessUserId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  lockTime?: Maybe<Scalars['Float']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  ttlockEKeyId?: Maybe<Scalars['ID']['output']>;
  ttlockError?: Maybe<Scalars['String']['output']>;
  ttlockId: Scalars['ID']['output'];
  ttlockUserId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface IttLockLogs {
  items: IttLockLog[];
  meta: MetaPaginationInterface;
}

export interface ITeam {
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

export interface ITeams {
  items: ITeam[];
  meta: MetaPaginationInterface;
}

export interface IUserNotification {
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  notificationType: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
}

export interface IUserNotifications {
  items: IUserNotification[];
  meta: MetaPaginationInterface;
}

export interface IVisitTour {
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

export interface IVisitTours {
  items: IVisitTour[];
  meta: MetaPaginationInterface;
}

export interface IwlaIdentity {
  FaceIdImage: Scalars['String']['input'];
  backCitizenImage: Scalars['String']['input'];
  dateOfExpiry?: InputMaybe<Scalars['Date']['input']>;
  dateOfIssue?: InputMaybe<Scalars['Date']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  faceSimilarity?: InputMaybe<Scalars['Float']['input']>;
  frontCitizenImage: Scalars['String']['input'];
  isReupload?: InputMaybe<Scalars['Boolean']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  placeOfIssue?: InputMaybe<Scalars['String']['input']>;
  reuploadReason?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  temporaryResidenceImages?: InputMaybe<Scalars['String']['input'][]>;
  type?: InputMaybe<IdentityDocumentType>;
}

export interface IWhiteLabelAppConfig {
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

export interface IWlaUser {
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
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  userRoles?: Maybe<UserRole[]>;
  username?: Maybe<Scalars['String']['output']>;
  verifyCode?: Maybe<Scalars['String']['output']>;
  verifyCodeExpire?: Maybe<Scalars['DateTime']['output']>;
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

export enum LocationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Verified = 'VERIFIED',
}

export interface LocationWhiteLabelQueryDto {
  cityFilter?: InputMaybe<Scalars['String']['input'][]>;
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
}

export interface LoginInputDto {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface LogoutInputDto {
  refreshToken: Scalars['String']['input'];
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

export interface MembershipSubscriptionSummary {
  currentMembershipSubscription?: Maybe<CurrentMembershipSubscription>;
  nextBillingInvoice?: Maybe<NextInvoice>;
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

export interface Metadata {
  error?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
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

export interface MonthlyBilling {
  extraServices?: Maybe<MonthlyBillingExtraServices[]>;
  plan?: Maybe<MonthlyBillingPlan>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
}

export interface MonthlyBillingExtraServices {
  amount?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface MonthlyBillingPlan {
  displayName?: Maybe<DisplayName>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
}

export interface Mutation {
  addAdditionalInformation: ResponseMessageBase;
  calculateBooking: CalculatePriceModel;
  cancelBooking: IBooking;
  cancelMembershipSubscription: ResponseMessageBase;
  cancelVisitTour: IVisitTour;
  changePassword: ResponseMessageBase;
  chargeMembershipSubscription: ResponseMessageBase;
  createAppInAppMomoPayment: CreateMomoPaymentResponse;
  createBankTransferPayment: IPayment;
  createBlockedCommunityUser: ResponseMessageBase;
  createBooking: IBooking;
  createBookingRequest: IBookingRequest;
  createComment: IPostComment;
  createExtraServiceOrder: IExtraServiceOrder;
  createIncident: IIncident;
  createInstallation: IInstallation;
  createMailbox: IInbox;
  createMomoPayment: PaymentMomoResponse;
  createPaymentProof: IPaymentProof;
  createPost: IPostCommunity;
  createReport: IPostReport;
  createReportedCommunityUser: ResponseMessageBase;
  createRoomReview: IRoomReview;
  createServicePreference: IServicePreference;
  createTTLockLog: IttLockLog;
  createVisitTour: IVisitTour;
  createVisitTourPublicly: IVisitTour;
  deleteComment: IPostComment;
  deleteCustomerEvent: ResponseMessageBase;
  deleteInbox: ResponseMessageBase;
  deleteMe: ResponseMessageBase;
  deleteMessage: ResponseMessageBase;
  deletePost: IPostCommunity;
  deleteRate: ResponseMessageBase;
  deleteReferenceData: ResponseMessageBase;
  deleteReview: ResponseMessageBase;
  feedbackIncident: ResponseMessageBase;
  forgotPassword: ResponseMessageBase;
  hideCommunityPost: ResponseMessageBase;
  hideCommunityPostComment: ResponseMessageBase;
  login: ClientLoginResponseDto;
  loginApple: ClientLoginResponseDto;
  loginFacebook: ClientLoginResponseDto;
  loginGoogle: ClientLoginResponseDto;
  loginGoogleByEnoverse: ClientLoginResponseDto;
  logout: ResponseMessageBase;
  markUserNotificationAsRead: IUserNotification;
  presignedUrlS3: IPreSignUrl;
  readMessage: Scalars['ID']['output'][];
  refreshToken: RefreshTokenOutputDto;
  register: RegisterOutputDto;
  resendOtp: ResponseMessageBase;
  resendVerifyOtp: ResponseMessageBase;
  resetPassword: ResponseMessageBase;
  resumeCancelledMembershipSubscription: ResponseMessageBase;
  sendMessage: IMessage;
  /** This API used in IIG whitelabel web */
  sendOtpVerifyEmail: ResponseMessageBase;
  subscribeMembershipPlan: IMembershipPlan;
  toggleLike: IPostLike;
  unHideCommunityPostComment: ResponseMessageBase;
  updateCitizenIDCard: ResponseMessageBase;
  updateComment: IPostComment;
  updateMe: IWlaUser;
  updateNullableFacebookEmail: User;
  updatePaymentProof: IPaymentProof;
  updatePost: IPostCommunity;
  updateReferenceData: IReferenceData;
  updateServicePreference: IServicePreference;
  updateStatusReferenceData: IReferenceData;
  upsertAmenityType: IReferenceData;
  upsertCustomerEvent: ICustomerEvent;
  upsertExtraServiceCategory: IReferenceData;
  upsertExtraServiceUnit: IReferenceData;
  upsertJob: IReferenceData;
  upsertPost: IPostCommunity;
  upsertRate: IRate;
  upsertReplyReview: IReview;
  upsertReview: IReview;
  verifyCode: VerifyCodeOutputDto;
  verifyCodeForgotPassword: VerifyCodeOutputDto;
}

export interface MutationAddAdditionalInformationArgs {
  input?: InputMaybe<AdditionalInformationDto>;
  isSkip: Scalars['Boolean']['input'];
}

export interface MutationCalculateBookingArgs {
  input: CalculateBookingDto;
}

export interface MutationCancelBookingArgs {
  input: CancelBookingDto;
}

export interface MutationCancelMembershipSubscriptionArgs {
  input: CancelMembershipSubscriptionDto;
}

export interface MutationCancelVisitTourArgs {
  input: CancelVisitTourDto;
}

export interface MutationChangePasswordArgs {
  input: UpdatePasswordDto;
}

export interface MutationChargeMembershipSubscriptionArgs {
  input: ChargeMembershipSubscriptionDto;
}

export interface MutationCreateAppInAppMomoPaymentArgs {
  input: AddPaymentDto;
}

export interface MutationCreateBankTransferPaymentArgs {
  input: AddBankTransferPaymentDto;
}

export interface MutationCreateBlockedCommunityUserArgs {
  input: CreateBlockedCommunityUserDto;
}

export interface MutationCreateBookingArgs {
  input: UpsertBookingDto;
}

export interface MutationCreateBookingRequestArgs {
  input: CreateBookingRequestDto;
}

export interface MutationCreateCommentArgs {
  comment: CreatePostCommentDto;
}

export interface MutationCreateExtraServiceOrderArgs {
  input: CreateExtraServiceOrderDto;
}

export interface MutationCreateIncidentArgs {
  input: CreateIncidentDto;
}

export interface MutationCreateInstallationArgs {
  input: CreateInstallationDto;
}

export interface MutationCreateMailboxArgs {
  input: CreateInboxBaseInput;
}

export interface MutationCreateMomoPaymentArgs {
  input: AddPaymentDto;
}

export interface MutationCreatePaymentProofArgs {
  input: CreatePaymentProofDto;
}

export interface MutationCreatePostArgs {
  post: CreatePostDto;
}

export interface MutationCreateReportArgs {
  report: CreatePostReportDto;
}

export interface MutationCreateReportedCommunityUserArgs {
  input: CreateReportedCommunityUserDto;
}

export interface MutationCreateRoomReviewArgs {
  input: CreateRoomReviewDto;
}

export interface MutationCreateServicePreferenceArgs {
  input: CreateServicePreference;
}

export interface MutationCreateTtLockLogArgs {
  input: WlaCreateTtLockLogDto;
}

export interface MutationCreateVisitTourArgs {
  input: CreateVisitTourDto;
}

export interface MutationCreateVisitTourPubliclyArgs {
  input: CreateVisitTourPubliclyDto;
}

export interface MutationDeleteCommentArgs {
  comment: DeletePostCommentDto;
}

export interface MutationDeleteCustomerEventArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteInboxArgs {
  input: Scalars['Float']['input'];
}

export interface MutationDeleteMessageArgs {
  input: ClientDeleteMessageInput;
}

export interface MutationDeletePostArgs {
  post: DeletePostDto;
}

export interface MutationDeleteRateArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteReferenceDataArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteReviewArgs {
  id: Scalars['ID']['input'];
}

export interface MutationFeedbackIncidentArgs {
  input: FeedbackIncidentDto;
}

export interface MutationForgotPasswordArgs {
  input: ForgotPasswordInputDto;
}

export interface MutationHideCommunityPostArgs {
  input: HideCommunityPostDto;
}

export interface MutationHideCommunityPostCommentArgs {
  input: HideCommunityPostCommentDto;
}

export interface MutationLoginArgs {
  input: LoginInputDto;
}

export interface MutationLoginAppleArgs {
  token: Scalars['String']['input'];
}

export interface MutationLoginFacebookArgs {
  token: Scalars['String']['input'];
}

export interface MutationLoginGoogleArgs {
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
}

export interface MutationLoginGoogleByEnoverseArgs {
  token: Scalars['String']['input'];
}

export interface MutationLogoutArgs {
  input: LogoutInputDto;
}

export interface MutationMarkUserNotificationAsReadArgs {
  id: Scalars['ID']['input'];
}

export interface MutationPresignedUrlS3Args {
  input: PresignedUrlDto;
}

export interface MutationReadMessageArgs {
  input: ClientReadMessageInput;
}

export interface MutationRefreshTokenArgs {
  input: RefreshTokenInputDto;
}

export interface MutationRegisterArgs {
  input: RegisterInputDto;
}

export interface MutationResendOtpArgs {
  email: Scalars['String']['input'];
}

export interface MutationResendVerifyOtpArgs {
  email: Scalars['String']['input'];
}

export interface MutationResetPasswordArgs {
  input: ResetPasswordInputDto;
}

export interface MutationResumeCancelledMembershipSubscriptionArgs {
  input: ResumeMembershipSubscriptionDto;
}

export interface MutationSendMessageArgs {
  input: ClientSendMessageInput;
}

export interface MutationSendOtpVerifyEmailArgs {
  input: SendVerifyEmailOtpDto;
}

export interface MutationSubscribeMembershipPlanArgs {
  input: SubscribeMembershipPlanDto;
}

export interface MutationToggleLikeArgs {
  like: CreatePostLikeDto;
}

export interface MutationUnHideCommunityPostCommentArgs {
  input: UnHideCommunityPostCommentDto;
}

export interface MutationUpdateCitizenIdCardArgs {
  input: IwlaIdentity;
}

export interface MutationUpdateCommentArgs {
  comment: UpdatePostCommentDto;
}

export interface MutationUpdateMeArgs {
  input: UpdateWlaUserDto;
}

export interface MutationUpdateNullableFacebookEmailArgs {
  email: Scalars['String']['input'];
  facebookId: Scalars['String']['input'];
}

export interface MutationUpdatePaymentProofArgs {
  input: UpdatePaymentProofDto;
}

export interface MutationUpdatePostArgs {
  post: UpdatePostDto;
}

export interface MutationUpdateReferenceDataArgs {
  input: UpsertReferenceDataDto;
  type: Scalars['String']['input'];
}

export interface MutationUpdateServicePreferenceArgs {
  input: UpdateServicePreference;
}

export interface MutationUpdateStatusReferenceDataArgs {
  input: UpdateStatusReferenceDataDto;
}

export interface MutationUpsertAmenityTypeArgs {
  input: UpsertReferenceDataDto;
}

export interface MutationUpsertCustomerEventArgs {
  input: UpsertCustomerEventDto;
}

export interface MutationUpsertExtraServiceCategoryArgs {
  input: UpsertReferenceDataDto;
}

export interface MutationUpsertExtraServiceUnitArgs {
  input: UpsertReferenceDataDto;
}

export interface MutationUpsertJobArgs {
  input: UpsertReferenceDataDto;
}

export interface MutationUpsertPostArgs {
  post: UpsertPostDto;
}

export interface MutationUpsertRateArgs {
  input: UpsertRateDto;
}

export interface MutationUpsertReplyReviewArgs {
  input: UpsertReplyReviewDto;
}

export interface MutationUpsertReviewArgs {
  input: UpsertReviewDto;
}

export interface MutationVerifyCodeArgs {
  input: VerifyCodeInputDto;
}

export interface MutationVerifyCodeForgotPasswordArgs {
  input: VerifyCodeInputDto;
}

export interface NextInvoice {
  bookingItems?: Maybe<ChargeBillingItem[]>;
  extraServiceItems?: Maybe<ChargeBillingItem[]>;
  nextBillingDate?: Maybe<Scalars['DateTime']['output']>;
  nextInvoiceAmount?: Maybe<Scalars['Float']['output']>;
  numberOfUnpaidInvoice?: Maybe<Scalars['Float']['output']>;
  totalCharge?: Maybe<Scalars['Float']['output']>;
  unpaidInvoiceAmount?: Maybe<Scalars['Float']['output']>;
}

export interface NonWorkingDaysModel {
  nonWorkingDayList: Scalars['String']['output'][];
  nonWorkingWeekdays: Scalars['Float']['output'][];
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

export interface PackageFeeDto {
  price: Scalars['Float']['input'];
  unit: PkgTypeUnit;
}

export interface PackageFilter {
  packageTypeId?: InputMaybe<Scalars['ID']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeNames?: InputMaybe<Scalars['String']['input'][]>;
  serviceGroupId?: InputMaybe<Scalars['ID']['input']>;
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

export interface PartialDisplayNameDto {
  en?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  vi?: InputMaybe<Scalars['String']['input']>;
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

export interface PaymentInfo {
  /** No longer used */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** No longer used */
  isVATInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  /** No longer used */
  payType?: InputMaybe<Scalars['String']['input']>;
}

export interface PaymentMethodDto {
  /** Payment method id */
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  /** Supporting IIG WLW */
  paymentMethodType?: InputMaybe<Scalars['String']['input']>;
  savePaymentMethod?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface PaymentMomoResponse {
  errorCode: Scalars['Float']['output'];
  localMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  payUrl: Scalars['String']['output'];
  requestId: Scalars['String']['output'];
  requestType: Scalars['String']['output'];
  signature: Scalars['String']['output'];
}

export interface PaymentPeriod {
  duration?: InputMaybe<Scalars['Float']['input']>;
  endDay?: InputMaybe<Scalars['Float']['input']>;
  startDay?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<PaymentPeriodUnit>;
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

export interface PostBlog {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  postCategoryBlog?: Maybe<PostCategoryBlog>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface PostCategoryBlog {
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserInfo>;
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  postBlogs?: Maybe<PostBlog[]>;
  priority: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserInfo>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
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

export interface PresignedUrlDto {
  key: Scalars['String']['input'];
  type: Scalars['String']['input'];
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
  checkNonWorkingDaysInRecurringDays: CheckNonWorkingDaysInRecurringDaysModel;
  countActiveMembers: Scalars['JSON']['output'];
  countMembers: Scalars['JSON']['output'];
  countRoomByCity: ICity[];
  downloadInvoiceReceipt: Scalars['String']['output'];
  getActiveMembers: ICustomers;
  getAllAmenities: Amenity[];
  getAmenities: IAmenities;
  getAmenity: IAmenity;
  getAmenityTypes: ReferenceData[];
  getAmenityTypesConfig: IReferenceDatas;
  getAppSetting: IAppSetting;
  getAppSettings: IAppSettings;
  getAuthExtraServiceTypesWla: IExtraServiceTypes;
  getAvailableExtraServiceCategories: IReferenceDatas;
  getAvailableServiceGroups: IServiceGroups;
  getAvailableServiceReferences: IServiceReferences;
  getBanner: IBanner;
  getBanners: IBanners;
  getBooking: IBooking;
  getBookingCalendar: ICalendarFloorItem[];
  getBookingPolicy: IBookingPolicy;
  getBookingRequest: IBookingRequest;
  getBookingRequests: IBookingRequests;
  getBookingStatuses: Scalars['String']['output'][];
  getBookings: IBookings;
  getBusinessConfig: IBusinessConfig;
  getBusinessMe: IBusiness;
  getBusinessPaymentInfo: IBusinessPaymentInfo;
  getBusinessPaymentInfos: IBusinessPaymentInfos;
  getBusinessSummary: IBusinessSummary;
  getCalendar: ICalendar[];
  getCities: Scalars['String']['output'][];
  getCurrentSubscription?: Maybe<MembershipSubscriptionSummary>;
  getCurrentUser: IWlaUser;
  getCurrentUserLocations: ILocations;
  getCustomer: ICustomer;
  getCustomerEvent: ICustomerEvent;
  getCustomerEvents: ICustomerEvents;
  getCustomerStripePaymentMethod?: Maybe<StripePaymentMethod[]>;
  getCustomers: ICustomers;
  getDistricts: Scalars['String']['output'][];
  getEvent: IEvent;
  getEvents: IEvents;
  getExtraServiceCategories: ReferenceData[];
  getExtraServiceCategoriesConfig: IReferenceDatas;
  getExtraServiceOrder: IExtraServiceOrder;
  getExtraServiceOrders: IExtraServiceOrders;
  getExtraServiceType: IExtraServiceType;
  getExtraServiceTypes: IExtraServiceTypes;
  getExtraServiceTypesWla: IExtraServiceTypes;
  getExtraServiceUnits: ReferenceData[];
  getExtraServiceUnitsConfig: IReferenceDatas;
  getFloor: IFloor;
  getFloors: IFloors;
  getInCompleteMembershipSubscription?: Maybe<Scalars['ID']['output']>;
  getInbox: IInbox;
  getInboxes: IInboxes;
  getIncident: IIncident;
  getIncidentType: IIncidentType;
  getIncidentTypes: IIncidentTypes;
  getIncidents: IIncidents;
  getInstallation: IInstallation;
  getInstallations: IInstallations;
  getInvoice: IInvoice;
  getInvoicePublicly: IInvoice;
  getInvoices: IInvoices;
  getInvoicesPublicly: IInvoices;
  getJobs: ReferenceData[];
  getJobsConfig: IReferenceDatas;
  getLatestBookings?: Maybe<IBooking[]>;
  getLatestMessage?: Maybe<IInbox>;
  getLatestUnpaidInvoice?: Maybe<IInvoice>;
  getLocation: ILocation;
  getLocationBySlug: ILocation;
  getLocations: ILocations;
  getMembers: ICustomers;
  getMembershipPlan: IMembershipPlan;
  getMembershipPlanSummary: IGetMembershipPlanSummary;
  getMembershipPlans: IMembershipPlans;
  getMembershipSubscription: IMembershipSubscription;
  getMembershipSubscriptions?: Maybe<IMembershipSubscriptions>;
  getMessages: IMessages;
  getMetadataFromHeader: Metadata;
  getMyEKeys: TtLockEKey[];
  getMyLikeAtPost: IPostLike;
  getMyServicePreference: IServicePreference;
  getNewSBANotificationCount: Scalars['Int']['output'];
  getNewWlaNotificationCount: Scalars['Int']['output'];
  getPackage: IPackage;
  getPackages: IPackages;
  getPackagesByLocation: IPackages;
  getPaymentProof: IPaymentProof;
  getPaymentProofs: IPaymentProofs;
  getPermissionGroups: ReferenceData[];
  getPost: IPostCommunity;
  getPostBlog: IPostBlog;
  getPostBlogs: IPostBlogs;
  getPostCategoryBlog: IPostCategoryBlog;
  getPostCategoryBlogs: IPostCategoryBlogs;
  getPostComment: IPostComment;
  getPostComments: IPostComments;
  getPostCommunities: IPostCommunities;
  getPostCommunity: IPostCommunity;
  getPosts: IPostCommunities;
  getQrCode: Scalars['String']['output'];
  getRate: IRate;
  getRateConfig: ReferenceData[];
  getRateMe?: Maybe<IRate>;
  getRates: IRates;
  getReferenceData: IReferenceData;
  getReferenceDatas: IReferenceDatas;
  getReview: IReview;
  getReviews: IReviews;
  getRoom: IRoom;
  getRoomBySlug?: Maybe<IRoom>;
  getRoomReview: IRoomReview;
  getRoomReviews: IRoomReviews;
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
  getServiceUnits: Scalars['String']['output'][];
  getStatusOnboardingProcess: OnBoardingStatus;
  getStripePublicKey?: Maybe<Scalars['String']['output']>;
  getTTLockLogs: IttLockLogs;
  getTeam: ITeam;
  getTeams: ITeams;
  getTotalUnreadInbox: Scalars['Int']['output'];
  getUploadingCitizenICRequest: IGetUploadingCitizenIcRequest;
  getUserNotification: IUserNotification;
  getUserNotifications: IUserNotifications;
  getVacantRooms: IRooms;
  getVisitTour: IVisitTour;
  getVisitTours: IVisitTours;
  getWLWAmenities: IAmenities;
  getWLWCities: Scalars['String']['output'][];
  getWLWDistricts: Scalars['String']['output'][];
  getWLWEvent: IEvent;
  getWLWEvents: IEvents;
  getWLWReviews: IReviews;
  getWhiteLabelAppConfigMe: IWhiteLabelAppConfig;
  getWlaEvents: IEvents;
  getWlaUserNotifications: IUserNotifications;
  hasActiveEkeyForLocation: Scalars['Boolean']['output'];
  /** @deprecated Should use api getUploadingCitizenICRequest */
  hasUploadedCitizenIDCard: Scalars['Boolean']['output'];
  previewInvoiceData: IPreviewInvoiceData;
  searchPackage: IPackages;
  searchPackageUnitByService: Scalars['String']['output'][];
  searchServiceGroup: IServiceGroups;
  zipInvoiceReceipts: Scalars['String']['output'];
}

export interface QueryCheckNonWorkingDaysInRecurringDaysArgs {
  input: CheckNonWorkingDaysInRecurringDaysDto;
}

export interface QueryCountRoomByCityArgs {
  input: CountAvailableRoomInput;
}

export interface QueryDownloadInvoiceReceiptArgs {
  input: SearchInvoiceDto;
  receiptId: Scalars['ID']['input'];
}

export interface QueryGetActiveMembersArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetAmenitiesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetAmenityArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetAmenityTypesConfigArgs {
  queryParams: ReferenceDataQueryFilterDto;
}

export interface QueryGetAppSettingArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetAppSettingsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetAuthExtraServiceTypesWlaArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetAvailableExtraServiceCategoriesArgs {
  locationId?: InputMaybe<Scalars['ID']['input']>;
  queryParams: QueryFilterDto;
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

export interface QueryGetBannerArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetBannersArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetBookingArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetBookingCalendarArgs {
  input: BookingCalendarDto;
}

export interface QueryGetBookingPolicyArgs {
  locationId: Scalars['ID']['input'];
}

export interface QueryGetBookingRequestArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetBookingRequestsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetBookingsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetBusinessPaymentInfoArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetBusinessPaymentInfosArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetCalendarArgs {
  input: CalendarInput;
}

export interface QueryGetCurrentUserLocationsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetCustomerArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetCustomerEventArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetCustomerEventsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetCustomersArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetDistrictsArgs {
  queryParams?: InputMaybe<DistrictWhiteLabelQueryDto>;
}

export interface QueryGetEventArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetEventsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetExtraServiceCategoriesConfigArgs {
  queryParams: ReferenceDataQueryFilterDto;
}

export interface QueryGetExtraServiceOrderArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetExtraServiceOrdersArgs {
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

export interface QueryGetExtraServiceUnitsConfigArgs {
  queryParams: ReferenceDataQueryFilterDto;
}

export interface QueryGetFloorArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetFloorsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetInboxArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetInboxesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetIncidentArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetIncidentTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetIncidentTypesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetIncidentsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetInstallationArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetInstallationsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetInvoiceArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetInvoicePubliclyArgs {
  id: Scalars['ID']['input'];
  input: SearchInvoiceDto;
}

export interface QueryGetInvoicesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetInvoicesPubliclyArgs {
  input: SearchInvoiceDto;
  queryParams: QueryFilterDto;
}

export interface QueryGetJobsConfigArgs {
  queryParams: ReferenceDataQueryFilterDto;
}

export interface QueryGetLocationArgs {
  coordinates?: InputMaybe<GeoLocationDto>;
  id: Scalars['String']['input'];
}

export interface QueryGetLocationBySlugArgs {
  locationSlug: Scalars['String']['input'];
}

export interface QueryGetLocationsArgs {
  queryParams: LocationWhiteLabelQueryDto;
}

export interface QueryGetMembersArgs {
  queryParams: QueryFilterDto;
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

export interface QueryGetMembershipSubscriptionArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetMembershipSubscriptionsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetMessagesArgs {
  inboxId: Scalars['Float']['input'];
  queryParams: QueryFilterDto;
}

export interface QueryGetMetadataFromHeaderArgs {
  key: Scalars['String']['input'];
}

export interface QueryGetMyEKeysArgs {
  locationId?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryGetMyLikeAtPostArgs {
  like: CreatePostLikeDto;
}

export interface QueryGetMyServicePreferenceArgs {
  deviceId: Scalars['String']['input'];
}

export interface QueryGetPackageArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPackagesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPackagesByLocationArgs {
  id: Scalars['Float']['input'];
  queryParams: QueryFilterDto;
}

export interface QueryGetPaymentProofArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPaymentProofsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPostArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPostBlogArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPostBlogsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPostCategoryBlogArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetPostCategoryBlogsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetPostCommentArgs {
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

export interface QueryGetQrCodeArgs {
  id: Scalars['Float']['input'];
}

export interface QueryGetRateArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetRatesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetReferenceDataArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetReferenceDatasArgs {
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

export interface QueryGetRoomBySlugArgs {
  url: Scalars['String']['input'];
}

export interface QueryGetRoomReviewArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetRoomReviewsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetRoomTypeArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetRoomTypesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetRoomsArgs {
  queryParams: RoomWhiteLabelQueryDto;
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

export interface QueryGetTtLockLogsArgs {
  input: WlaGetTtLockLogsDto;
}

export interface QueryGetTeamArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetTeamsArgs {
  queryParams: TeamFilterDto;
}

export interface QueryGetUserNotificationArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetUserNotificationsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetVacantRoomsArgs {
  queryParams: FilterVacantRoomPublicDto;
}

export interface QueryGetVisitTourArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetVisitToursArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetWlwAmenitiesArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetWlwDistrictsArgs {
  queryParams?: InputMaybe<DistrictWhiteLabelQueryDto>;
}

export interface QueryGetWlwEventArgs {
  id: Scalars['ID']['input'];
}

export interface QueryGetWlwEventsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetWlwReviewsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetWlaEventsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryGetWlaUserNotificationsArgs {
  queryParams: QueryFilterDto;
}

export interface QueryHasActiveEkeyForLocationArgs {
  locationId: Scalars['ID']['input'];
}

export interface QueryPreviewInvoiceDataArgs {
  invoiceId: Scalars['ID']['input'];
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

export interface QueryZipInvoiceReceiptsArgs {
  input: SearchInvoiceDto;
  invoiceId: Scalars['ID']['input'];
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

export interface RatingInfoDo {
  feedback?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input'][]>;
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

export interface ReferenceDataExtraFilterDto {
  displayName?: InputMaybe<PartialDisplayNameDto>;
}

export interface ReferenceDataQueryFilterDto {
  extraFilters?: InputMaybe<ReferenceDataExtraFilterDto>;
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

export interface ReferenceInformation {
  company: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  title: Scalars['String']['output'];
}

export interface ReferenceInformationInput {
  company: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  title: Scalars['String']['input'];
}

export interface RefreshTokenInputDto {
  refreshToken: Scalars['String']['input'];
}

export interface RefreshTokenOutputDto {
  token: Scalars['String']['output'];
}

export interface RegisterInputDto {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  isVerifyCode?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  verifyCode?: InputMaybe<Scalars['String']['input']>;
}

export interface RegisterOutputDto {
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  isVerifyCode?: Maybe<Scalars['Boolean']['output']>;
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  verify: Scalars['String']['output'];
  verifyCode?: Maybe<Scalars['String']['output']>;
}

export interface RequestDeleteInvoiceExtraInfo {
  extraServiceOrderIds?: Maybe<Scalars['ID']['output'][]>;
  transactionIds?: Maybe<Scalars['ID']['output'][]>;
  utilityOrderIds?: Maybe<Scalars['ID']['output'][]>;
}

export interface ResetPasswordInputDto {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  resetCode: Scalars['String']['input'];
}

export interface ResponseMessageBase {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface ResumeMembershipSubscriptionDto {
  id: Scalars['ID']['input'];
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

export interface RoomServiceItemDto {
  displayName?: InputMaybe<DisplayNameDto>;
  extraServiceTypeId?: InputMaybe<Scalars['ID']['input']>;
  price: Scalars['Float']['input'];
  type: RoomServiceType;
  unitDisplayName?: InputMaybe<DisplayNameDto>;
  utilityTypeId?: InputMaybe<Scalars['ID']['input']>;
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

export interface RoomWhiteLabelQueryDto {
  filterAvailableRoomInput?: InputMaybe<CheckRoomAvailabliltyInput>;
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
  locationQ?: InputMaybe<Scalars['String']['input']>;
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
  serviceGroupId?: InputMaybe<Scalars['ID']['input']>;
  showPartialAvailable?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SearchConfigParams {
  /** Search by displayName & locale. Example: "sortByDisplayName":"ASC" */
  sortByDisplayName?: InputMaybe<Scalars['String']['input']>;
}

export interface SearchInvoiceDto {
  code?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
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

export interface SendVerifyEmailOtpDto {
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
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

export interface StripePaymentMethod {
  businessId: Scalars['ID']['output'];
  cardInfo?: Maybe<CardPaymentMethod>;
  createdAt: Scalars['DateTime']['output'];
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  stripePaymentMethodId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
}

export interface SubscribeMembershipPlanDto {
  extraServiceTypeIds?: InputMaybe<Scalars['ID']['input'][]>;
  membershipPlanId: Scalars['ID']['input'];
  savePaymentMethod?: InputMaybe<Scalars['Boolean']['input']>;
  /** format: YYYY/MM/DD */
  startDate: Scalars['String']['input'];
  stripePaymentMethodId: Scalars['String']['input'];
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

export enum SubscriptionCancellationType {
  EndOfCurrentPeriod = 'END_OF_CURRENT_PERIOD',
  Immediately = 'IMMEDIATELY',
  OnACustomDate = 'ON_A_CUSTOM_DATE',
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

export enum TtLockLogAction {
  AdminLocks = 'AdminLocks',
  AdminUnlocks = 'AdminUnlocks',
  SensorAutoLock = 'SensorAutoLock',
  UserLock = 'UserLock',
  UserUnlock = 'UserUnlock',
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

export enum TaxCategory {
  ExtraServiceType = 'EXTRA_SERVICE_TYPE',
  RoomFee = 'ROOM_FEE',
  UtilityType = 'UTILITY_TYPE',
}

export interface TaxPolicies {
  policies: TaxPolicy[];
  scope: TaxPoliciesScope;
}

export enum TaxPoliciesScope {
  All = 'ALL',
  OnUserRequest = 'ON_USER_REQUEST',
}

export interface TaxPolicy {
  appliedService?: Maybe<Scalars['ID']['output']>;
  appliedServiceDisplayName?: Maybe<DisplayName>;
  category: TaxCategory;
  rate: Scalars['Float']['output'];
  type: TaxType;
}

export enum TaxType {
  Gst = 'GST',
  Vat = 'VAT',
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

export interface TeamFilterDto {
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
  primaryContactFilter?: InputMaybe<Scalars['String']['input']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']['input']>;
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

export interface UnHideCommunityPostCommentDto {
  postCommentId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdatePasswordDto {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface UpdatePaymentProofDto {
  id: Scalars['ID']['input'];
  images: Scalars['String']['input'][];
}

export interface UpdatePostCommentDto {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
}

export interface UpdatePostDto {
  content?: InputMaybe<Scalars['String']['input']>;
  /** Give empty array if user does not upload images */
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
}

export enum UpdateRecurringBookingApplyFor {
  All = 'ALL',
  Following = 'FOLLOWING',
  This = 'THIS',
}

export interface UpdateServicePreference {
  deviceId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  serviceReferenceIds: Scalars['ID']['input'][];
}

export interface UpdateStatusReferenceDataDto {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
}

export interface UpdateWlaUserDto {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}

export interface UpsertBookingDto {
  applyFrom?: InputMaybe<Scalars['DateTime']['input']>;
  businessId?: InputMaybe<Scalars['ID']['input']>;
  changeDescription?: InputMaybe<Scalars['String']['input']>;
  /** CRM only */
  checkinInfo?: InputMaybe<CheckinInfo>;
  contractAttachmentUrl?: InputMaybe<Scalars['String']['input']>;
  createContractAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  /** use customerId instead */
  customerCountry?: InputMaybe<Scalars['String']['input']>;
  /** use customerId instead */
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerIds?: InputMaybe<Scalars['ID']['input'][]>;
  /** use customerId instead */
  customerName?: InputMaybe<Scalars['String']['input']>;
  /** CRM only */
  discountUnit?: InputMaybe<Scalars['String']['input']>;
  /** CRM only */
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  /** Use for creating contract attachment */
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  endTime: Scalars['DateTime']['input'];
  extraServices?: InputMaybe<CreateExtraServiceInput[]>;
  files?: InputMaybe<Scalars['String']['input'][]>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Scalars['String']['input'][]>;
  isCheckin?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecialOffer?: InputMaybe<Scalars['Boolean']['input']>;
  isTaxIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  locationId: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  numberOfPeople: Scalars['Float']['input'];
  packageFee?: InputMaybe<Scalars['Float']['input']>;
  packageFees?: InputMaybe<PackageFeeDto[]>;
  packageId: Scalars['ID']['input'];
  payType?: InputMaybe<Scalars['String']['input']>;
  /** No longer used */
  paymentInfo?: InputMaybe<PaymentInfo>;
  /** IIG WLW only */
  paymentMethod?: InputMaybe<PaymentMethodDto>;
  /** CRM only */
  paymentPeriod?: InputMaybe<PaymentPeriod>;
  /** use customerId instead */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  recurringInput?: InputMaybe<RecurringInputDto>;
  roomId: Scalars['ID']['input'];
  roomServices?: InputMaybe<RoomServiceItemDto[]>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['DateTime']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  totalDeposit?: InputMaybe<Scalars['Float']['input']>;
}

export interface UpsertCustomerEventDto {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  eventId: Scalars['ID']['input'];
  responseType: Scalars['String']['input'];
}

export interface UpsertPostDto {
  content: Scalars['String']['input'];
  /** Give empty array if user does not upload images */
  gallery: Scalars['String']['input'][];
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
}

export interface UpsertRateDto {
  describe?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** referenceDataId */
  ratingId: Scalars['ID']['input'];
}

export interface UpsertReferenceDataDto {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName: DisplayNameDto;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Float']['input']>;
}

export interface UpsertReplyReviewDto {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  reviewId?: InputMaybe<Scalars['ID']['input']>;
}

export interface UpsertReviewDto {
  businessId?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<GalleryInput[]>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  locationId: Scalars['ID']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
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

export interface VerifyCodeInputDto {
  email: Scalars['String']['input'];
  verifyCode: Scalars['String']['input'];
}

export interface VerifyCodeOutputDto {
  appleId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookId?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  refreshToken: Scalars['String']['output'];
  roleId?: Maybe<Scalars['ID']['output']>;
  token: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
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

export interface WlaCreateTtLockLogDto {
  action: TtLockLogAction;
  batteryPercentage?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  isSuccess: Scalars['Boolean']['input'];
  lockTime?: InputMaybe<Scalars['Float']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  ttlockEKeyId: Scalars['ID']['input'];
  ttlockError?: InputMaybe<Scalars['String']['input']>;
}

export interface WlaGetTtLockLogsDto {
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']['input']>;
  ttlockEKeyId: Scalars['ID']['input'];
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

export const WorkTimeFragmentFragmentDoc = gql`
  fragment WorkTimeFragment on WorkingTime {
    monday {
      openTime
      closeTime
      isOpen
    }
    tuesday {
      openTime
      closeTime
      isOpen
    }
    wednesday {
      openTime
      closeTime
      isOpen
    }
    thursday {
      openTime
      closeTime
      isOpen
    }
    friday {
      openTime
      closeTime
      isOpen
    }
    saturday {
      openTime
      closeTime
      isOpen
    }
    sunday {
      openTime
      closeTime
      isOpen
    }
  }
`;

export const CreatePublicVisitTourDocument = gql`
  mutation createPublicVisitTour($input: CreateVisitTourPubliclyDto!) {
    createVisitTourPublicly(input: $input) {
      id
    }
  }
`;

export type CreatePublicVisitTourMutationFn = Apollo.MutationFunction<
  CreatePublicVisitTourMutation,
  CreatePublicVisitTourMutationVariables
>;

/**
 * __useCreatePublicVisitTourMutation__
 *
 * To run a mutation, you first call `useCreatePublicVisitTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublicVisitTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublicVisitTourMutation, { data, loading, error }] = useCreatePublicVisitTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePublicVisitTourMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePublicVisitTourMutation,
    CreatePublicVisitTourMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePublicVisitTourMutation,
    CreatePublicVisitTourMutationVariables
  >(CreatePublicVisitTourDocument, options);
}

export type CreatePublicVisitTourMutationHookResult = ReturnType<
  typeof useCreatePublicVisitTourMutation
>;

export type CreatePublicVisitTourMutationResult =
  Apollo.MutationResult<CreatePublicVisitTourMutation>;

export type CreatePublicVisitTourMutationOptions = Apollo.BaseMutationOptions<
  CreatePublicVisitTourMutation,
  CreatePublicVisitTourMutationVariables
>;

export const GetRoomsForLocationDetailDocument = gql`
  query GetRoomsForLocationDetail($queryParams: RoomWhiteLabelQueryDto!) {
    getRooms(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        thumbnail
        displayName
        name
        capacityPeople
        gallery
        availableTimeFrom
        floor {
          name
        }
        packages {
          amount
          originalAmount
          isActive
          packageType {
            unit
          }
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetRoomsForLocationDetailQuery__
 *
 * To run a query within a React component, call `useGetRoomsForLocationDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomsForLocationDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomsForLocationDetailQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetRoomsForLocationDetailQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetRoomsForLocationDetailQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetRoomsForLocationDetailQuery,
      GetRoomsForLocationDetailQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRoomsForLocationDetailQuery,
    GetRoomsForLocationDetailQueryVariables
  >(GetRoomsForLocationDetailDocument, options);
}

export function useGetRoomsForLocationDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomsForLocationDetailQuery,
    GetRoomsForLocationDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRoomsForLocationDetailQuery,
    GetRoomsForLocationDetailQueryVariables
  >(GetRoomsForLocationDetailDocument, options);
}

export function useGetRoomsForLocationDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRoomsForLocationDetailQuery,
    GetRoomsForLocationDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRoomsForLocationDetailQuery,
    GetRoomsForLocationDetailQueryVariables
  >(GetRoomsForLocationDetailDocument, options);
}

export type GetRoomsForLocationDetailQueryHookResult = ReturnType<
  typeof useGetRoomsForLocationDetailQuery
>;

export type GetRoomsForLocationDetailLazyQueryHookResult = ReturnType<
  typeof useGetRoomsForLocationDetailLazyQuery
>;

export type GetRoomsForLocationDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetRoomsForLocationDetailSuspenseQuery
>;

export type GetRoomsForLocationDetailQueryResult = Apollo.QueryResult<
  GetRoomsForLocationDetailQuery,
  GetRoomsForLocationDetailQueryVariables
>;

export function refetchGetRoomsForLocationDetailQuery(
  variables: GetRoomsForLocationDetailQueryVariables,
) {
  return { query: GetRoomsForLocationDetailDocument, variables };
}

export const GetAboutCategoriesDocument = gql`
  query GetAboutCategories($queryParams: QueryFilterDto!) {
    getPostCategoryBlogs(queryParams: $queryParams) {
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
 * __useGetAboutCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAboutCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAboutCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAboutCategoriesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAboutCategoriesQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetAboutCategoriesQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetAboutCategoriesQuery,
      GetAboutCategoriesQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAboutCategoriesQuery,
    GetAboutCategoriesQueryVariables
  >(GetAboutCategoriesDocument, options);
}

export function useGetAboutCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAboutCategoriesQuery,
    GetAboutCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAboutCategoriesQuery,
    GetAboutCategoriesQueryVariables
  >(GetAboutCategoriesDocument, options);
}

export function useGetAboutCategoriesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAboutCategoriesQuery,
    GetAboutCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAboutCategoriesQuery,
    GetAboutCategoriesQueryVariables
  >(GetAboutCategoriesDocument, options);
}

export type GetAboutCategoriesQueryHookResult = ReturnType<
  typeof useGetAboutCategoriesQuery
>;

export type GetAboutCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetAboutCategoriesLazyQuery
>;

export type GetAboutCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useGetAboutCategoriesSuspenseQuery
>;

export type GetAboutCategoriesQueryResult = Apollo.QueryResult<
  GetAboutCategoriesQuery,
  GetAboutCategoriesQueryVariables
>;

export function refetchGetAboutCategoriesQuery(
  variables: GetAboutCategoriesQueryVariables,
) {
  return { query: GetAboutCategoriesDocument, variables };
}

export const GetAmenitiesForLocationDetailDocument = gql`
  query GetAmenitiesForLocationDetail($queryParams: QueryFilterDto!) {
    getAmenities(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        displayName
        icon
        type
        name
        amenityType {
          displayName
          name
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetAmenitiesForLocationDetailQuery__
 *
 * To run a query within a React component, call `useGetAmenitiesForLocationDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAmenitiesForLocationDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAmenitiesForLocationDetailQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAmenitiesForLocationDetailQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetAmenitiesForLocationDetailQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetAmenitiesForLocationDetailQuery,
      GetAmenitiesForLocationDetailQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAmenitiesForLocationDetailQuery,
    GetAmenitiesForLocationDetailQueryVariables
  >(GetAmenitiesForLocationDetailDocument, options);
}

export function useGetAmenitiesForLocationDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAmenitiesForLocationDetailQuery,
    GetAmenitiesForLocationDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAmenitiesForLocationDetailQuery,
    GetAmenitiesForLocationDetailQueryVariables
  >(GetAmenitiesForLocationDetailDocument, options);
}

export function useGetAmenitiesForLocationDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAmenitiesForLocationDetailQuery,
    GetAmenitiesForLocationDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAmenitiesForLocationDetailQuery,
    GetAmenitiesForLocationDetailQueryVariables
  >(GetAmenitiesForLocationDetailDocument, options);
}

export type GetAmenitiesForLocationDetailQueryHookResult = ReturnType<
  typeof useGetAmenitiesForLocationDetailQuery
>;

export type GetAmenitiesForLocationDetailLazyQueryHookResult = ReturnType<
  typeof useGetAmenitiesForLocationDetailLazyQuery
>;

export type GetAmenitiesForLocationDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetAmenitiesForLocationDetailSuspenseQuery
>;

export type GetAmenitiesForLocationDetailQueryResult = Apollo.QueryResult<
  GetAmenitiesForLocationDetailQuery,
  GetAmenitiesForLocationDetailQueryVariables
>;

export function refetchGetAmenitiesForLocationDetailQuery(
  variables: GetAmenitiesForLocationDetailQueryVariables,
) {
  return { query: GetAmenitiesForLocationDetailDocument, variables };
}

export const GetAmenitiesForSearchLocationDocument = gql`
  query GetAmenitiesForSearchLocation($queryParams: QueryFilterDto!) {
    getAmenities(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        displayName
        name
        icon
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetAmenitiesForSearchLocationQuery__
 *
 * To run a query within a React component, call `useGetAmenitiesForSearchLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAmenitiesForSearchLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAmenitiesForSearchLocationQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAmenitiesForSearchLocationQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetAmenitiesForSearchLocationQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetAmenitiesForSearchLocationQuery,
      GetAmenitiesForSearchLocationQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAmenitiesForSearchLocationQuery,
    GetAmenitiesForSearchLocationQueryVariables
  >(GetAmenitiesForSearchLocationDocument, options);
}

export function useGetAmenitiesForSearchLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAmenitiesForSearchLocationQuery,
    GetAmenitiesForSearchLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAmenitiesForSearchLocationQuery,
    GetAmenitiesForSearchLocationQueryVariables
  >(GetAmenitiesForSearchLocationDocument, options);
}

export function useGetAmenitiesForSearchLocationSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAmenitiesForSearchLocationQuery,
    GetAmenitiesForSearchLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAmenitiesForSearchLocationQuery,
    GetAmenitiesForSearchLocationQueryVariables
  >(GetAmenitiesForSearchLocationDocument, options);
}

export type GetAmenitiesForSearchLocationQueryHookResult = ReturnType<
  typeof useGetAmenitiesForSearchLocationQuery
>;

export type GetAmenitiesForSearchLocationLazyQueryHookResult = ReturnType<
  typeof useGetAmenitiesForSearchLocationLazyQuery
>;

export type GetAmenitiesForSearchLocationSuspenseQueryHookResult = ReturnType<
  typeof useGetAmenitiesForSearchLocationSuspenseQuery
>;

export type GetAmenitiesForSearchLocationQueryResult = Apollo.QueryResult<
  GetAmenitiesForSearchLocationQuery,
  GetAmenitiesForSearchLocationQueryVariables
>;

export function refetchGetAmenitiesForSearchLocationQuery(
  variables: GetAmenitiesForSearchLocationQueryVariables,
) {
  return { query: GetAmenitiesForSearchLocationDocument, variables };
}

export const GetAvailableRoomsDocument = gql`
  query GetAvailableRooms($queryParams: RoomWhiteLabelQueryDto!) {
    getRooms(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        location {
          district
          minPrice
        }
        roomType {
          name
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetAvailableRoomsQuery__
 *
 * To run a query within a React component, call `useGetAvailableRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailableRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailableRoomsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAvailableRoomsQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetAvailableRoomsQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetAvailableRoomsQuery,
      GetAvailableRoomsQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAvailableRoomsQuery,
    GetAvailableRoomsQueryVariables
  >(GetAvailableRoomsDocument, options);
}

export function useGetAvailableRoomsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAvailableRoomsQuery,
    GetAvailableRoomsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAvailableRoomsQuery,
    GetAvailableRoomsQueryVariables
  >(GetAvailableRoomsDocument, options);
}

export function useGetAvailableRoomsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAvailableRoomsQuery,
    GetAvailableRoomsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAvailableRoomsQuery,
    GetAvailableRoomsQueryVariables
  >(GetAvailableRoomsDocument, options);
}

export type GetAvailableRoomsQueryHookResult = ReturnType<
  typeof useGetAvailableRoomsQuery
>;

export type GetAvailableRoomsLazyQueryHookResult = ReturnType<
  typeof useGetAvailableRoomsLazyQuery
>;

export type GetAvailableRoomsSuspenseQueryHookResult = ReturnType<
  typeof useGetAvailableRoomsSuspenseQuery
>;

export type GetAvailableRoomsQueryResult = Apollo.QueryResult<
  GetAvailableRoomsQuery,
  GetAvailableRoomsQueryVariables
>;

export function refetchGetAvailableRoomsQuery(
  variables: GetAvailableRoomsQueryVariables,
) {
  return { query: GetAvailableRoomsDocument, variables };
}

export const GetBusinessConfigDocument = gql`
  query GetBusinessConfig {
    getBusinessConfig {
      businessId
      logoMark
      logoType
      primaryButtonTextColor
      primaryColor
      business {
        name
      }
    }
  }
`;

/**
 * __useGetBusinessConfigQuery__
 *
 * To run a query within a React component, call `useGetBusinessConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBusinessConfigQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >(GetBusinessConfigDocument, options);
}

export function useGetBusinessConfigLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >(GetBusinessConfigDocument, options);
}

export function useGetBusinessConfigSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetBusinessConfigQuery,
    GetBusinessConfigQueryVariables
  >(GetBusinessConfigDocument, options);
}

export type GetBusinessConfigQueryHookResult = ReturnType<
  typeof useGetBusinessConfigQuery
>;

export type GetBusinessConfigLazyQueryHookResult = ReturnType<
  typeof useGetBusinessConfigLazyQuery
>;

export type GetBusinessConfigSuspenseQueryHookResult = ReturnType<
  typeof useGetBusinessConfigSuspenseQuery
>;

export type GetBusinessConfigQueryResult = Apollo.QueryResult<
  GetBusinessConfigQuery,
  GetBusinessConfigQueryVariables
>;

export function refetchGetBusinessConfigQuery(
  variables?: GetBusinessConfigQueryVariables,
) {
  return { query: GetBusinessConfigDocument, variables };
}

export const GetBusinessMeDocument = gql`
  query GetBusinessMe {
    getBusinessMe {
      zalo
      messenger
      address
      emailContact
      phoneContact
      youtube
      linkedln
      facebook
      twitter
      description
      tiktok
      coordinates
      businessConfig {
        currency
      }
    }
  }
`;

/**
 * __useGetBusinessMeQuery__
 *
 * To run a query within a React component, call `useGetBusinessMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBusinessMeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBusinessMeQuery,
    GetBusinessMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBusinessMeQuery, GetBusinessMeQueryVariables>(
    GetBusinessMeDocument,
    options,
  );
}

export function useGetBusinessMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBusinessMeQuery,
    GetBusinessMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBusinessMeQuery, GetBusinessMeQueryVariables>(
    GetBusinessMeDocument,
    options,
  );
}

export function useGetBusinessMeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBusinessMeQuery,
    GetBusinessMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetBusinessMeQuery,
    GetBusinessMeQueryVariables
  >(GetBusinessMeDocument, options);
}

export type GetBusinessMeQueryHookResult = ReturnType<
  typeof useGetBusinessMeQuery
>;

export type GetBusinessMeLazyQueryHookResult = ReturnType<
  typeof useGetBusinessMeLazyQuery
>;

export type GetBusinessMeSuspenseQueryHookResult = ReturnType<
  typeof useGetBusinessMeSuspenseQuery
>;

export type GetBusinessMeQueryResult = Apollo.QueryResult<
  GetBusinessMeQuery,
  GetBusinessMeQueryVariables
>;

export function refetchGetBusinessMeQuery(
  variables?: GetBusinessMeQueryVariables,
) {
  return { query: GetBusinessMeDocument, variables };
}

export const GetCityOptionsDocument = gql`
  query GetCityOptions($input: CountAvailableRoomInput!) {
    countRoomByCity(input: $input) {
      name
      totalAvailableRooms
    }
  }
`;

/**
 * __useGetCityOptionsQuery__
 *
 * To run a query within a React component, call `useGetCityOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCityOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCityOptionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCityOptionsQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetCityOptionsQueryVariables }
  ) &
    Apollo.QueryHookOptions<GetCityOptionsQuery, GetCityOptionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCityOptionsQuery, GetCityOptionsQueryVariables>(
    GetCityOptionsDocument,
    options,
  );
}

export function useGetCityOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCityOptionsQuery,
    GetCityOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCityOptionsQuery, GetCityOptionsQueryVariables>(
    GetCityOptionsDocument,
    options,
  );
}

export function useGetCityOptionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCityOptionsQuery,
    GetCityOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCityOptionsQuery,
    GetCityOptionsQueryVariables
  >(GetCityOptionsDocument, options);
}

export type GetCityOptionsQueryHookResult = ReturnType<
  typeof useGetCityOptionsQuery
>;

export type GetCityOptionsLazyQueryHookResult = ReturnType<
  typeof useGetCityOptionsLazyQuery
>;

export type GetCityOptionsSuspenseQueryHookResult = ReturnType<
  typeof useGetCityOptionsSuspenseQuery
>;

export type GetCityOptionsQueryResult = Apollo.QueryResult<
  GetCityOptionsQuery,
  GetCityOptionsQueryVariables
>;

export function refetchGetCityOptionsQuery(
  variables: GetCityOptionsQueryVariables,
) {
  return { query: GetCityOptionsDocument, variables };
}

export const GetDistrictsDocument = gql`
  query GetDistricts($queryParams: DistrictWhiteLabelQueryDto) {
    getDistricts(queryParams: $queryParams)
  }
`;

/**
 * __useGetDistrictsQuery__
 *
 * To run a query within a React component, call `useGetDistrictsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDistrictsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDistrictsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetDistrictsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDistrictsQuery,
    GetDistrictsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDistrictsQuery, GetDistrictsQueryVariables>(
    GetDistrictsDocument,
    options,
  );
}

export function useGetDistrictsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDistrictsQuery,
    GetDistrictsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDistrictsQuery, GetDistrictsQueryVariables>(
    GetDistrictsDocument,
    options,
  );
}

export function useGetDistrictsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetDistrictsQuery,
    GetDistrictsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDistrictsQuery, GetDistrictsQueryVariables>(
    GetDistrictsDocument,
    options,
  );
}

export type GetDistrictsQueryHookResult = ReturnType<
  typeof useGetDistrictsQuery
>;

export type GetDistrictsLazyQueryHookResult = ReturnType<
  typeof useGetDistrictsLazyQuery
>;

export type GetDistrictsSuspenseQueryHookResult = ReturnType<
  typeof useGetDistrictsSuspenseQuery
>;

export type GetDistrictsQueryResult = Apollo.QueryResult<
  GetDistrictsQuery,
  GetDistrictsQueryVariables
>;

export function refetchGetDistrictsQuery(
  variables?: GetDistrictsQueryVariables,
) {
  return { query: GetDistrictsDocument, variables };
}

export const GetLocationDocument = gql`
  query GetLocation($id: String!, $coordinates: GeoLocationDto) {
    getLocation(id: $id, coordinates: $coordinates) {
      id
      name
      phoneContact
      emailContact
      address
      gallery
      thumbnail
      geoLocation
      description
      serviceReferenceIds
      amenityIds
      minPrice
      maxPrice
      country
      city
      district
      coordinates {
        longitude
        latitude
        distance
      }
      establishedAt
      status
      createdAt
    }
  }
`;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      coordinates: // value for 'coordinates'
 *   },
 * });
 */
export function useGetLocationQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetLocationQueryVariables }
  ) &
    Apollo.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}

export function useGetLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}

export function useGetLocationSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}

export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;

export type GetLocationLazyQueryHookResult = ReturnType<
  typeof useGetLocationLazyQuery
>;

export type GetLocationSuspenseQueryHookResult = ReturnType<
  typeof useGetLocationSuspenseQuery
>;

export type GetLocationQueryResult = Apollo.QueryResult<
  GetLocationQuery,
  GetLocationQueryVariables
>;

export function refetchGetLocationQuery(variables: GetLocationQueryVariables) {
  return { query: GetLocationDocument, variables };
}

export const GetLocationOptionsDocument = gql`
  query GetLocationOptions($queryParams: LocationWhiteLabelQueryDto!) {
    getLocations(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        thumbnail
        gallery
        address
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetLocationOptionsQuery__
 *
 * To run a query within a React component, call `useGetLocationOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationOptionsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetLocationOptionsQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetLocationOptionsQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetLocationOptionsQuery,
      GetLocationOptionsQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLocationOptionsQuery,
    GetLocationOptionsQueryVariables
  >(GetLocationOptionsDocument, options);
}

export function useGetLocationOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationOptionsQuery,
    GetLocationOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationOptionsQuery,
    GetLocationOptionsQueryVariables
  >(GetLocationOptionsDocument, options);
}

export function useGetLocationOptionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetLocationOptionsQuery,
    GetLocationOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetLocationOptionsQuery,
    GetLocationOptionsQueryVariables
  >(GetLocationOptionsDocument, options);
}

export type GetLocationOptionsQueryHookResult = ReturnType<
  typeof useGetLocationOptionsQuery
>;

export type GetLocationOptionsLazyQueryHookResult = ReturnType<
  typeof useGetLocationOptionsLazyQuery
>;

export type GetLocationOptionsSuspenseQueryHookResult = ReturnType<
  typeof useGetLocationOptionsSuspenseQuery
>;

export type GetLocationOptionsQueryResult = Apollo.QueryResult<
  GetLocationOptionsQuery,
  GetLocationOptionsQueryVariables
>;

export function refetchGetLocationOptionsQuery(
  variables: GetLocationOptionsQueryVariables,
) {
  return { query: GetLocationOptionsDocument, variables };
}

export const GetOtherLocationsDocument = gql`
  query GetOtherLocations($queryParams: LocationWhiteLabelQueryDto!) {
    getLocations(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        address
        thumbnail
        rating
        minPrice
        maxPrice
        gallery
        numOfAvailableRoom
        amenityIds
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetOtherLocationsQuery__
 *
 * To run a query within a React component, call `useGetOtherLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOtherLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOtherLocationsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetOtherLocationsQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetOtherLocationsQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetOtherLocationsQuery,
      GetOtherLocationsQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOtherLocationsQuery,
    GetOtherLocationsQueryVariables
  >(GetOtherLocationsDocument, options);
}

export function useGetOtherLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOtherLocationsQuery,
    GetOtherLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOtherLocationsQuery,
    GetOtherLocationsQueryVariables
  >(GetOtherLocationsDocument, options);
}

export function useGetOtherLocationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetOtherLocationsQuery,
    GetOtherLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetOtherLocationsQuery,
    GetOtherLocationsQueryVariables
  >(GetOtherLocationsDocument, options);
}

export type GetOtherLocationsQueryHookResult = ReturnType<
  typeof useGetOtherLocationsQuery
>;

export type GetOtherLocationsLazyQueryHookResult = ReturnType<
  typeof useGetOtherLocationsLazyQuery
>;

export type GetOtherLocationsSuspenseQueryHookResult = ReturnType<
  typeof useGetOtherLocationsSuspenseQuery
>;

export type GetOtherLocationsQueryResult = Apollo.QueryResult<
  GetOtherLocationsQuery,
  GetOtherLocationsQueryVariables
>;

export function refetchGetOtherLocationsQuery(
  variables: GetOtherLocationsQueryVariables,
) {
  return { query: GetOtherLocationsDocument, variables };
}

export const GetRoomTypesDocument = gql`
  query getRoomTypes($queryParams: QueryFilterDto!) {
    getRoomTypes(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        displayName
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetRoomTypesQuery__
 *
 * To run a query within a React component, call `useGetRoomTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomTypesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetRoomTypesQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetRoomTypesQueryVariables }
  ) &
    Apollo.QueryHookOptions<GetRoomTypesQuery, GetRoomTypesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoomTypesQuery, GetRoomTypesQueryVariables>(
    GetRoomTypesDocument,
    options,
  );
}

export function useGetRoomTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomTypesQuery,
    GetRoomTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRoomTypesQuery, GetRoomTypesQueryVariables>(
    GetRoomTypesDocument,
    options,
  );
}

export function useGetRoomTypesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRoomTypesQuery,
    GetRoomTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRoomTypesQuery, GetRoomTypesQueryVariables>(
    GetRoomTypesDocument,
    options,
  );
}

export type GetRoomTypesQueryHookResult = ReturnType<
  typeof useGetRoomTypesQuery
>;

export type GetRoomTypesLazyQueryHookResult = ReturnType<
  typeof useGetRoomTypesLazyQuery
>;

export type GetRoomTypesSuspenseQueryHookResult = ReturnType<
  typeof useGetRoomTypesSuspenseQuery
>;

export type GetRoomTypesQueryResult = Apollo.QueryResult<
  GetRoomTypesQuery,
  GetRoomTypesQueryVariables
>;

export function refetchGetRoomTypesQuery(
  variables: GetRoomTypesQueryVariables,
) {
  return { query: GetRoomTypesDocument, variables };
}

export const GetRoomsForVisitTourDocument = gql`
  query GetRoomsForVisitTour($queryParams: RoomWhiteLabelQueryDto!) {
    getRooms(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        area
        thumbnail
        displayName
        name
        capacityPeople
        gallery
        availableTimeFrom
        roomType {
          displayName
          name
        }
        floor {
          name
        }
        packages {
          amount
          originalAmount
          isActive
          packageType {
            unit
          }
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetRoomsForVisitTourQuery__
 *
 * To run a query within a React component, call `useGetRoomsForVisitTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomsForVisitTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomsForVisitTourQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetRoomsForVisitTourQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetRoomsForVisitTourQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetRoomsForVisitTourQuery,
      GetRoomsForVisitTourQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRoomsForVisitTourQuery,
    GetRoomsForVisitTourQueryVariables
  >(GetRoomsForVisitTourDocument, options);
}

export function useGetRoomsForVisitTourLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRoomsForVisitTourQuery,
    GetRoomsForVisitTourQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRoomsForVisitTourQuery,
    GetRoomsForVisitTourQueryVariables
  >(GetRoomsForVisitTourDocument, options);
}

export function useGetRoomsForVisitTourSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRoomsForVisitTourQuery,
    GetRoomsForVisitTourQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRoomsForVisitTourQuery,
    GetRoomsForVisitTourQueryVariables
  >(GetRoomsForVisitTourDocument, options);
}

export type GetRoomsForVisitTourQueryHookResult = ReturnType<
  typeof useGetRoomsForVisitTourQuery
>;

export type GetRoomsForVisitTourLazyQueryHookResult = ReturnType<
  typeof useGetRoomsForVisitTourLazyQuery
>;

export type GetRoomsForVisitTourSuspenseQueryHookResult = ReturnType<
  typeof useGetRoomsForVisitTourSuspenseQuery
>;

export type GetRoomsForVisitTourQueryResult = Apollo.QueryResult<
  GetRoomsForVisitTourQuery,
  GetRoomsForVisitTourQueryVariables
>;

export function refetchGetRoomsForVisitTourQuery(
  variables: GetRoomsForVisitTourQueryVariables,
) {
  return { query: GetRoomsForVisitTourDocument, variables };
}

export const GetSearchLocationsDocument = gql`
  query GetSearchLocations($queryParams: LocationWhiteLabelQueryDto!) {
    getLocations(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        address
        thumbnail
        rating
        minPrice
        maxPrice
        gallery
        numOfAvailableRoom
        amenityIds
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetSearchLocationsQuery__
 *
 * To run a query within a React component, call `useGetSearchLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchLocationsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetSearchLocationsQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetSearchLocationsQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetSearchLocationsQuery,
      GetSearchLocationsQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSearchLocationsQuery,
    GetSearchLocationsQueryVariables
  >(GetSearchLocationsDocument, options);
}

export function useGetSearchLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSearchLocationsQuery,
    GetSearchLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSearchLocationsQuery,
    GetSearchLocationsQueryVariables
  >(GetSearchLocationsDocument, options);
}

export function useGetSearchLocationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetSearchLocationsQuery,
    GetSearchLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSearchLocationsQuery,
    GetSearchLocationsQueryVariables
  >(GetSearchLocationsDocument, options);
}

export type GetSearchLocationsQueryHookResult = ReturnType<
  typeof useGetSearchLocationsQuery
>;

export type GetSearchLocationsLazyQueryHookResult = ReturnType<
  typeof useGetSearchLocationsLazyQuery
>;

export type GetSearchLocationsSuspenseQueryHookResult = ReturnType<
  typeof useGetSearchLocationsSuspenseQuery
>;

export type GetSearchLocationsQueryResult = Apollo.QueryResult<
  GetSearchLocationsQuery,
  GetSearchLocationsQueryVariables
>;

export function refetchGetSearchLocationsQuery(
  variables: GetSearchLocationsQueryVariables,
) {
  return { query: GetSearchLocationsDocument, variables };
}

export const GetServiceGroupOptionsDocument = gql`
  query GetServiceGroupOptions(
    $businessId: ID
    $locationId: ID
    $queryParams: QueryFilterDto!
  ) {
    getAvailableServiceGroups(
      businessId: $businessId
      locationId: $locationId
      queryParams: $queryParams
    ) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        displayName
        isActive
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetServiceGroupOptionsQuery__
 *
 * To run a query within a React component, call `useGetServiceGroupOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceGroupOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceGroupOptionsQuery({
 *   variables: {
 *      businessId: // value for 'businessId'
 *      locationId: // value for 'locationId'
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetServiceGroupOptionsQuery(
  baseOptions: (
    | { skip: boolean }
    | { skip?: boolean; variables: GetServiceGroupOptionsQueryVariables }
  ) &
    Apollo.QueryHookOptions<
      GetServiceGroupOptionsQuery,
      GetServiceGroupOptionsQueryVariables
    >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetServiceGroupOptionsQuery,
    GetServiceGroupOptionsQueryVariables
  >(GetServiceGroupOptionsDocument, options);
}

export function useGetServiceGroupOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServiceGroupOptionsQuery,
    GetServiceGroupOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServiceGroupOptionsQuery,
    GetServiceGroupOptionsQueryVariables
  >(GetServiceGroupOptionsDocument, options);
}

export function useGetServiceGroupOptionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetServiceGroupOptionsQuery,
    GetServiceGroupOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetServiceGroupOptionsQuery,
    GetServiceGroupOptionsQueryVariables
  >(GetServiceGroupOptionsDocument, options);
}

export type GetServiceGroupOptionsQueryHookResult = ReturnType<
  typeof useGetServiceGroupOptionsQuery
>;

export type GetServiceGroupOptionsLazyQueryHookResult = ReturnType<
  typeof useGetServiceGroupOptionsLazyQuery
>;

export type GetServiceGroupOptionsSuspenseQueryHookResult = ReturnType<
  typeof useGetServiceGroupOptionsSuspenseQuery
>;

export type GetServiceGroupOptionsQueryResult = Apollo.QueryResult<
  GetServiceGroupOptionsQuery,
  GetServiceGroupOptionsQueryVariables
>;

export function refetchGetServiceGroupOptionsQuery(
  variables: GetServiceGroupOptionsQueryVariables,
) {
  return { query: GetServiceGroupOptionsDocument, variables };
}

export const GetWhiteLabelConfigDocument = gql`
  query GetWhiteLabelConfig {
    getWhiteLabelAppConfigMe {
      customConfigs
    }
  }
`;

/**
 * __useGetWhiteLabelConfigQuery__
 *
 * To run a query within a React component, call `useGetWhiteLabelConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWhiteLabelConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWhiteLabelConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWhiteLabelConfigQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetWhiteLabelConfigQuery,
    GetWhiteLabelConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWhiteLabelConfigQuery,
    GetWhiteLabelConfigQueryVariables
  >(GetWhiteLabelConfigDocument, options);
}

export function useGetWhiteLabelConfigLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWhiteLabelConfigQuery,
    GetWhiteLabelConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWhiteLabelConfigQuery,
    GetWhiteLabelConfigQueryVariables
  >(GetWhiteLabelConfigDocument, options);
}

export function useGetWhiteLabelConfigSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetWhiteLabelConfigQuery,
    GetWhiteLabelConfigQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetWhiteLabelConfigQuery,
    GetWhiteLabelConfigQueryVariables
  >(GetWhiteLabelConfigDocument, options);
}

export type GetWhiteLabelConfigQueryHookResult = ReturnType<
  typeof useGetWhiteLabelConfigQuery
>;

export type GetWhiteLabelConfigLazyQueryHookResult = ReturnType<
  typeof useGetWhiteLabelConfigLazyQuery
>;

export type GetWhiteLabelConfigSuspenseQueryHookResult = ReturnType<
  typeof useGetWhiteLabelConfigSuspenseQuery
>;

export type GetWhiteLabelConfigQueryResult = Apollo.QueryResult<
  GetWhiteLabelConfigQuery,
  GetWhiteLabelConfigQueryVariables
>;

export function refetchGetWhiteLabelConfigQuery(
  variables?: GetWhiteLabelConfigQueryVariables,
) {
  return { query: GetWhiteLabelConfigDocument, variables };
}

export interface MetaFragmentFragment {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface WorkTimeFragmentFragment {
  friday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
  monday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
  saturday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
  sunday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
  thursday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
  tuesday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
  wednesday?: {
    closeTime?: null | string;
    isOpen?: boolean | null;
    openTime?: null | string;
  } | null;
}

export type CreatePublicVisitTourMutationVariables = Exact<{
  input: CreateVisitTourPubliclyDto;
}>;

export interface CreatePublicVisitTourMutation {
  createVisitTourPublicly: { id: string };
}

export type GetRoomsForLocationDetailQueryVariables = Exact<{
  queryParams: RoomWhiteLabelQueryDto;
}>;

export interface GetRoomsForLocationDetailQuery {
  getRooms: {
    items: {
      availableTimeFrom?: null | string;
      capacityPeople?: null | number;
      displayName?: Record<string, unknown> | null;
      floor?: { name: string } | null;
      gallery?: Record<string, unknown> | null;
      id: string;
      name: string;
      packages?:
        | {
            amount?: null | number;
            isActive: boolean;
            originalAmount?: null | number;
            packageType?: { unit?: PkgTypeUnit | null } | null;
          }[]
        | null;
      thumbnail?: null | string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetAboutCategoriesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export interface GetAboutCategoriesQuery {
  getPostCategoryBlogs: {
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

export type GetAmenitiesForLocationDetailQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export interface GetAmenitiesForLocationDetailQuery {
  getAmenities: {
    items: {
      amenityType?: {
        displayName?: Record<string, unknown> | null;
        name: string;
      } | null;
      displayName?: Record<string, unknown> | null;
      icon?: null | string;
      name: string;
      type: string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetAmenitiesForSearchLocationQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export interface GetAmenitiesForSearchLocationQuery {
  getAmenities: {
    items: {
      displayName?: Record<string, unknown> | null;
      icon?: null | string;
      id: string;
      name: string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetAvailableRoomsQueryVariables = Exact<{
  queryParams: RoomWhiteLabelQueryDto;
}>;

export interface GetAvailableRoomsQuery {
  getRooms: {
    items: {
      id: string;
      location?: { district?: null | string; minPrice?: null | number } | null;
      roomType?: { name: string } | null;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetBusinessConfigQueryVariables = Exact<{ [key: string]: never }>;

export interface GetBusinessConfigQuery {
  getBusinessConfig: {
    business?: { name?: null | string } | null;
    businessId?: null | string;
    logoMark?: null | string;
    logoType?: null | string;
    primaryButtonTextColor?: null | string;
    primaryColor?: null | string;
  };
}

export type GetBusinessMeQueryVariables = Exact<{ [key: string]: never }>;

export interface GetBusinessMeQuery {
  getBusinessMe: {
    address?: null | string;
    businessConfig?: { currency?: Currency | null } | null;
    coordinates?: Record<string, unknown> | null;
    description?: null | string;
    emailContact?: null | string;
    facebook?: null | string;
    linkedln?: null | string;
    messenger?: null | string;
    phoneContact?: null | string;
    tiktok?: null | string;
    twitter?: null | string;
    youtube?: null | string;
    zalo?: null | string;
  };
}

export type GetCityOptionsQueryVariables = Exact<{
  input: CountAvailableRoomInput;
}>;

export interface GetCityOptionsQuery {
  countRoomByCity: { name: string; totalAvailableRooms: number }[];
}

export type GetDistrictsQueryVariables = Exact<{
  queryParams?: InputMaybe<DistrictWhiteLabelQueryDto>;
}>;

export interface GetDistrictsQuery {
  getDistricts: string[];
}

export type GetLocationQueryVariables = Exact<{
  coordinates?: InputMaybe<GeoLocationDto>;
  id: Scalars['String']['input'];
}>;

export interface GetLocationQuery {
  getLocation: {
    address?: null | string;
    amenityIds?: null | string[];
    city?: null | string;
    coordinates?: {
      distance?: null | number;
      latitude: number;
      longitude: number;
    } | null;
    country?: null | string;
    createdAt?: null | string;
    description?: null | string;
    district?: null | string;
    emailContact?: null | string;
    establishedAt?: null | string;
    gallery?: null | string[];
    geoLocation?: Record<string, unknown> | null;
    id: string;
    maxPrice?: null | number;
    minPrice?: null | number;
    name?: null | string;
    phoneContact?: null | string;
    serviceReferenceIds?: null | string[];
    status?: LocationStatus | null;
    thumbnail?: null | string;
  };
}

export type GetLocationOptionsQueryVariables = Exact<{
  queryParams: LocationWhiteLabelQueryDto;
}>;

export interface GetLocationOptionsQuery {
  getLocations: {
    items: {
      address?: null | string;
      gallery?: null | string[];
      id: string;
      name?: null | string;
      thumbnail?: null | string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetOtherLocationsQueryVariables = Exact<{
  queryParams: LocationWhiteLabelQueryDto;
}>;

export interface GetOtherLocationsQuery {
  getLocations: {
    items: {
      address?: null | string;
      amenityIds?: null | string[];
      gallery?: null | string[];
      id: string;
      maxPrice?: null | number;
      minPrice?: null | number;
      name?: null | string;
      numOfAvailableRoom?: null | number;
      rating?: null | number;
      thumbnail?: null | string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetRoomTypesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export interface GetRoomTypesQuery {
  getRoomTypes: {
    items: {
      displayName?: Record<string, unknown> | null;
      id: string;
      name: string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetRoomsForVisitTourQueryVariables = Exact<{
  queryParams: RoomWhiteLabelQueryDto;
}>;

export interface GetRoomsForVisitTourQuery {
  getRooms: {
    items: {
      area?: null | number;
      availableTimeFrom?: null | string;
      capacityPeople?: null | number;
      displayName?: Record<string, unknown> | null;
      floor?: { name: string } | null;
      gallery?: Record<string, unknown> | null;
      id: string;
      name: string;
      packages?:
        | {
            amount?: null | number;
            isActive: boolean;
            originalAmount?: null | number;
            packageType?: { unit?: PkgTypeUnit | null } | null;
          }[]
        | null;
      roomType?: {
        displayName?: Record<string, unknown> | null;
        name: string;
      } | null;
      thumbnail?: null | string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetSearchLocationsQueryVariables = Exact<{
  queryParams: LocationWhiteLabelQueryDto;
}>;

export interface GetSearchLocationsQuery {
  getLocations: {
    items: {
      address?: null | string;
      amenityIds?: null | string[];
      gallery?: null | string[];
      id: string;
      maxPrice?: null | number;
      minPrice?: null | number;
      name?: null | string;
      numOfAvailableRoom?: null | number;
      rating?: null | number;
      thumbnail?: null | string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetServiceGroupOptionsQueryVariables = Exact<{
  businessId?: InputMaybe<Scalars['ID']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  queryParams: QueryFilterDto;
}>;

export interface GetServiceGroupOptionsQuery {
  getAvailableServiceGroups: {
    items: {
      displayName?: Record<string, unknown> | null;
      id: string;
      isActive: boolean;
      name: string;
    }[];
    meta: {
      currentPage: number;
      itemCount: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
}

export type GetWhiteLabelConfigQueryVariables = Exact<{ [key: string]: never }>;

export interface GetWhiteLabelConfigQuery {
  getWhiteLabelAppConfigMe: { customConfigs?: Record<string, unknown> | null };
}
