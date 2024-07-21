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
  DateTime: { input: string; output: string };
  Float: { input: number; output: number };
  ID: { input: string; output: string };
  Int: { input: number; output: number };
  JSON: { input: Record<string, unknown>; output: Record<string, unknown> };
  ObjectID: { input: string; output: string };
  String: { input: string; output: string };
}

export interface BaseAuditedEntityCreatedByIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BaseAuditedEntityUpdatedByIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BaseBusinessUserBasicFilterInput {
  and?: InputMaybe<BaseBusinessUserBasicFilterInput[]>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseBusinessUserBasicFilterInput>;
  or?: InputMaybe<BaseBusinessUserBasicFilterInput[]>;
}

export interface BaseBusinessUserEntity {
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export interface BaseBusinessUserFilterInput {
  and?: InputMaybe<BaseBusinessUserBasicFilterInput[]>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseBusinessUserBasicFilterInput>;
  or?: InputMaybe<BaseBusinessUserBasicFilterInput[]>;
}

export interface BaseBusinessUserSortInput {
  id?: InputMaybe<SortDirection>;
}

export interface BaseCustomerBasicFilterInput {
  and?: InputMaybe<BaseCustomerBasicFilterInput[]>;
  email?: InputMaybe<BaseCustomerEmailOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseCustomerBasicFilterInput>;
  or?: InputMaybe<BaseCustomerBasicFilterInput[]>;
  searchText?: InputMaybe<BaseCustomerSearchTextOperatorInput>;
}

export interface BaseCustomerEmailOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface BaseCustomerEntity {
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  searchText: Scalars['String']['output'];
  type: CustomerType;
  userId?: Maybe<Scalars['ObjectID']['output']>;
}

export interface BaseCustomerFilterInput {
  and?: InputMaybe<BaseCustomerBasicFilterInput[]>;
  email?: InputMaybe<BaseCustomerEmailOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseCustomerBasicFilterInput>;
  or?: InputMaybe<BaseCustomerBasicFilterInput[]>;
  searchText?: InputMaybe<BaseCustomerSearchTextOperatorInput>;
}

export interface BaseCustomerReferenceArrayFilterInput {
  every?: InputMaybe<BaseCustomerBasicFilterInput>;
  none?: InputMaybe<BaseCustomerBasicFilterInput>;
  some?: InputMaybe<BaseCustomerBasicFilterInput>;
}

export interface BaseCustomerSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface BaseCustomerSortInput {
  fullName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
}

export interface BaseEntityCreatedAtOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface BaseEntityIdIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BaseEntityUpdatedAtOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface BaseRoomBasicFilterInput {
  and?: InputMaybe<BaseRoomBasicFilterInput[]>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseRoomBasicFilterInput>;
  or?: InputMaybe<BaseRoomBasicFilterInput[]>;
  searchText?: InputMaybe<BaseRoomSearchTextOperatorInput>;
}

export interface BaseRoomEntity {
  id: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  searchText: Scalars['String']['output'];
}

export interface BaseRoomFilterInput {
  and?: InputMaybe<BaseRoomBasicFilterInput[]>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseRoomBasicFilterInput>;
  or?: InputMaybe<BaseRoomBasicFilterInput[]>;
  searchText?: InputMaybe<BaseRoomSearchTextOperatorInput>;
}

export interface BaseRoomSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface BaseRoomSortInput {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface BaseServiceBasicFilterInput {
  and?: InputMaybe<BaseServiceBasicFilterInput[]>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseServiceBasicFilterInput>;
  or?: InputMaybe<BaseServiceBasicFilterInput[]>;
  searchText?: InputMaybe<BaseServiceSearchTextOperatorInput>;
}

export interface BaseServiceEntity {
  id: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  searchText?: Maybe<Scalars['String']['output']>;
}

export interface BaseServiceFilterInput {
  and?: InputMaybe<BaseServiceBasicFilterInput[]>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BaseServiceBasicFilterInput>;
  or?: InputMaybe<BaseServiceBasicFilterInput[]>;
  searchText?: InputMaybe<BaseServiceSearchTextOperatorInput>;
}

export interface BaseServiceSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface BaseServiceSortInput {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
}

export interface BookedDeskEntity {
  id: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  subBundles: SubBundleEntity[];
}

export interface Booking {
  applyTax: Scalars['Boolean']['output'];
  breakdownBookings: BreakdownBooking[];
  bundles: BundleEntity[];
  businessId: Scalars['ObjectID']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  customerIds: Scalars['ObjectID']['output'][];
  customers: BaseCustomerEntity[];
  deleteRequest?: Maybe<DeleteRequestEntity>;
  deskIds?: Maybe<Scalars['ObjectID']['output'][]>;
  desks?: Maybe<BookedDeskEntity[]>;
  discount?: Maybe<Discount>;
  discountAmount: Scalars['Float']['output'];
  endTime: Scalars['DateTime']['output'];
  estimatedAmount: Scalars['Float']['output'];
  exceptDays?: Maybe<Scalars['Float']['output'][]>;
  id: Scalars['ObjectID']['output'];
  invoiceIds: Scalars['ObjectID']['output'][];
  isCheckedIn?: Maybe<Scalars['Boolean']['output']>;
  isFixedDesks: Scalars['Boolean']['output'];
  latestChangeReason?: Maybe<Scalars['String']['output']>;
  latestCheckInTime?: Maybe<Scalars['DateTime']['output']>;
  latestCheckOutTime?: Maybe<Scalars['DateTime']['output']>;
  locationId: Scalars['ObjectID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  numberOfPeople: Scalars['Float']['output'];
  paymentSettings?: Maybe<PaymentSettings>;
  paymentStatus: PaymentStatus;
  platform: Platform;
  primaryCustomer: BaseCustomerEntity;
  primaryCustomerId: Scalars['ObjectID']['output'];
  requiredDepositAmount: Scalars['Float']['output'];
  room: BaseRoomEntity;
  roomId: Scalars['ObjectID']['output'];
  service: BaseServiceEntity;
  serviceId: Scalars['ObjectID']['output'];
  startTime: Scalars['DateTime']['output'];
  status: BookingStatus;
  taxAmount: Scalars['Float']['output'];
  totalAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
  utilityRecords?: Maybe<UtilityRecord[]>;
}

export interface BookingBasicFilterInput {
  and?: InputMaybe<BookingBasicFilterInput[]>;
  code?: InputMaybe<BookingCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customerIds?: InputMaybe<BookingCustomerIdsOperatorInput>;
  deskIds?: InputMaybe<BookingDeskIdsOperatorInput>;
  endTime?: InputMaybe<BookingEndTimeOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceIds?: InputMaybe<BookingInvoiceIdsOperatorInput>;
  latestCheckInTime?: InputMaybe<BookingLatestCheckInTimeOperatorInput>;
  latestCheckOutTime?: InputMaybe<BookingLatestCheckOutTimeOperatorInput>;
  locationId?: InputMaybe<BookingLocationIdOperatorInput>;
  not?: InputMaybe<BookingBasicFilterInput>;
  or?: InputMaybe<BookingBasicFilterInput[]>;
  paymentStatus?: InputMaybe<BookingPaymentStatusOperatorInput>;
  platform?: InputMaybe<BookingPlatformOperatorInput>;
  primaryCustomer?: InputMaybe<BaseCustomerBasicFilterInput>;
  primaryCustomerId?: InputMaybe<BookingPrimaryCustomerIdOperatorInput>;
  room?: InputMaybe<BaseRoomBasicFilterInput>;
  roomId?: InputMaybe<BookingRoomIdOperatorInput>;
  serviceId?: InputMaybe<BookingServiceIdOperatorInput>;
  startTime?: InputMaybe<BookingStartTimeOperatorInput>;
  status?: InputMaybe<BookingStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface BookingCalendarRecord {
  bookingCode: Scalars['String']['output'];
  bookingId: Scalars['ObjectID']['output'];
  endTime: Scalars['DateTime']['output'];
  packageUnits: PackageUnit[];
  primaryCustomerAvatar?: Maybe<Scalars['String']['output']>;
  primaryCustomerName: Scalars['String']['output'];
  roomId: Scalars['ObjectID']['output'];
  startTime: Scalars['DateTime']['output'];
  status: BookingStatus;
}

export interface BookingChangelog {
  applyFrom: Scalars['DateTime']['output'];
  bookingId: Scalars['ObjectID']['output'];
  businessId: Scalars['ObjectID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entries?: Maybe<BookingChangelogEntry[]>;
  id: Scalars['ObjectID']['output'];
  timestamp: Scalars['DateTime']['output'];
  updatedById: Scalars['ObjectID']['output'];
}

export interface BookingChangelogBasicFilterInput {
  and?: InputMaybe<BookingChangelogBasicFilterInput[]>;
  bookingId?: InputMaybe<BookingChangelogBookingIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BookingChangelogBasicFilterInput>;
  or?: InputMaybe<BookingChangelogBasicFilterInput[]>;
}

export interface BookingChangelogBookingIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingChangelogEntry {
  extraInfo?: Maybe<Scalars['JSON']['output']>;
  fieldName: BookingChangelogFieldName;
  newValue?: Maybe<Scalars['JSON']['output']>;
  oldValue?: Maybe<Scalars['JSON']['output']>;
}

export enum BookingChangelogFieldName {
  EndTime = 'END_TIME',
  Note = 'NOTE',
  NumberOfPeople = 'NUMBER_OF_PEOPLE',
  RequiredDepositAmount = 'REQUIRED_DEPOSIT_AMOUNT',
  StartTime = 'START_TIME',
}

export interface BookingChangelogFilterInput {
  and?: InputMaybe<BookingChangelogBasicFilterInput[]>;
  bookingId?: InputMaybe<BookingChangelogBookingIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  not?: InputMaybe<BookingChangelogBasicFilterInput>;
  or?: InputMaybe<BookingChangelogBasicFilterInput[]>;
}

export interface BookingChangelogList {
  items: BookingChangelog[];
  meta: PaginationMeta;
}

export interface BookingChangelogQueryInput {
  filter?: InputMaybe<BookingChangelogFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<BookingChangelogSortInput[]>;
}

export interface BookingChangelogSortInput {
  applyFrom?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
}

export interface BookingCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface BookingCustomerIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingDeskIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingDetailSummary {
  actualRevenue: Scalars['Float']['output'];
  paidAmount: Scalars['Float']['output'];
  unpaidAmount: Scalars['Float']['output'];
}

export interface BookingEndTimeOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface BookingFilterInput {
  and?: InputMaybe<BookingBasicFilterInput[]>;
  code?: InputMaybe<BookingCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customerIds?: InputMaybe<BookingCustomerIdsOperatorInput>;
  customers?: InputMaybe<BaseCustomerReferenceArrayFilterInput>;
  deleteRequest?: InputMaybe<DeleteRequestFilterInput>;
  deskIds?: InputMaybe<BookingDeskIdsOperatorInput>;
  endTime?: InputMaybe<BookingEndTimeOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceIds?: InputMaybe<BookingInvoiceIdsOperatorInput>;
  latestCheckInTime?: InputMaybe<BookingLatestCheckInTimeOperatorInput>;
  latestCheckOutTime?: InputMaybe<BookingLatestCheckOutTimeOperatorInput>;
  locationId?: InputMaybe<BookingLocationIdOperatorInput>;
  not?: InputMaybe<BookingBasicFilterInput>;
  or?: InputMaybe<BookingBasicFilterInput[]>;
  paymentStatus?: InputMaybe<BookingPaymentStatusOperatorInput>;
  platform?: InputMaybe<BookingPlatformOperatorInput>;
  primaryCustomer?: InputMaybe<BaseCustomerFilterInput>;
  primaryCustomerId?: InputMaybe<BookingPrimaryCustomerIdOperatorInput>;
  room?: InputMaybe<BaseRoomFilterInput>;
  roomId?: InputMaybe<BookingRoomIdOperatorInput>;
  serviceId?: InputMaybe<BookingServiceIdOperatorInput>;
  startTime?: InputMaybe<BookingStartTimeOperatorInput>;
  status?: InputMaybe<BookingStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface BookingInvoiceIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingInvoicePreCreate {
  applyTax: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  customerId: Scalars['ObjectID']['output'];
  endTime: Scalars['DateTime']['output'];
  id: Scalars['ObjectID']['output'];
  invoiceItems: InvoiceItemPreCreate[];
  paidDepositAmount: Scalars['Float']['output'];
  requiredDepositAmount: Scalars['Float']['output'];
  roomId: Scalars['ObjectID']['output'];
  roomName: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
}

export interface BookingLatestCheckInTimeOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface BookingLatestCheckOutTimeOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface BookingList {
  items: Booking[];
  meta: PaginationMeta;
}

export interface BookingLocationIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingPaymentStatusOperatorInput {
  eq?: InputMaybe<PaymentStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<PaymentStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<PaymentStatus>;
  nin?: InputMaybe<PaymentStatus[]>;
}

export interface BookingPlatformOperatorInput {
  eq?: InputMaybe<Platform>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Platform[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Platform>;
  nin?: InputMaybe<Platform[]>;
}

export interface BookingPolicy {
  businessId: Scalars['ObjectID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  id: Scalars['ObjectID']['output'];
  isAutoConfirm: Scalars['Boolean']['output'];
  isCancelable: Scalars['Boolean']['output'];
  isTaxApplied: Scalars['Boolean']['output'];
  locationId: Scalars['ObjectID']['output'];
  taxPolicies?: Maybe<TaxPolicies>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface BookingPreCompleteInfo {
  unpaidExtraServiceCount: Scalars['Float']['output'];
  unpaidPaymentPeriodsCount: Scalars['Float']['output'];
  unpaidUtilityCount: Scalars['Float']['output'];
}

export interface BookingPrimaryCustomerIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingQueryInput {
  filter?: InputMaybe<BookingFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<BookingSortInput[]>;
}

export interface BookingRoomIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingServiceIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface BookingSortInput {
  code?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  endTime?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  latestCheckInTime?: InputMaybe<SortDirection>;
  latestCheckOutTime?: InputMaybe<SortDirection>;
  primaryCustomer?: InputMaybe<BaseCustomerSortInput>;
  room?: InputMaybe<BaseRoomSortInput>;
  roomId?: InputMaybe<SortDirection>;
  service?: InputMaybe<BaseServiceSortInput>;
  startTime?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface BookingStartTimeOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export enum BookingStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  InProgress = 'IN_PROGRESS',
  Unconfirmed = 'UNCONFIRMED',
}

export interface BookingStatusOperatorInput {
  eq?: InputMaybe<BookingStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<BookingStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<BookingStatus>;
  nin?: InputMaybe<BookingStatus[]>;
}

export interface BreakdownBooking {
  endTime: Scalars['DateTime']['output'];
  startTime: Scalars['DateTime']['output'];
}

export interface BundleEntity {
  amount: Scalars['Float']['output'];
  id: Scalars['ObjectID']['output'];
  priceType: PriceType;
  quantity: Scalars['Float']['output'];
  roomId: Scalars['ObjectID']['output'];
  totalAmount: Scalars['Float']['output'];
  unit: PackageUnit;
}

export interface CalculateBookingDeskInput {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
  subPackages?: InputMaybe<CalculateBookingSubPackageInput[]>;
}

export interface CalculateBookingPackageInput {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ObjectID']['input'];
}

export interface CalculateBookingQueryInput {
  desks?: InputMaybe<CalculateBookingDeskInput[]>;
  discount?: InputMaybe<DiscountInput>;
  endTime: Scalars['DateTime']['input'];
  locationId: Scalars['ObjectID']['input'];
  numberOfPeople: Scalars['Float']['input'];
  packages: CalculateBookingPackageInput[];
  roomId: Scalars['ObjectID']['input'];
  selectTime: Scalars['Boolean']['input'];
  startTime: Scalars['DateTime']['input'];
}

export interface CalculateBookingResponse {
  breakdownBookings: BreakdownBooking[];
  bundles: BundleEntity[];
  desks?: Maybe<BookedDeskEntity[]>;
  discountAmount: Scalars['Float']['output'];
  endTime: Scalars['DateTime']['output'];
  estimatedAmount: Scalars['Float']['output'];
  room: BaseRoomEntity;
  startTime: Scalars['DateTime']['output'];
  totalAmount: Scalars['Float']['output'];
}

export interface CalculateBookingSubPackageInput {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ObjectID']['input'];
}

export interface ChangePaymentPeriodCommandInput {
  applyFrom: Scalars['DateTime']['input'];
  bookingId: Scalars['ObjectID']['input'];
  items: ChangePaymentPeriodItemInput[];
  paymentSettings?: InputMaybe<PaymentSettingsInput>;
}

export interface ChangePaymentPeriodItemInput {
  discountAmount: Scalars['Float']['input'];
  endDate: Scalars['DateTime']['input'];
  estimatedAmount: Scalars['Float']['input'];
  paymentEndDate: Scalars['DateTime']['input'];
  paymentStartDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
}

export interface CheckIn {
  bookingId: Scalars['ObjectID']['output'];
  businessId: Scalars['ObjectID']['output'];
  checkInTime: Scalars['DateTime']['output'];
  checkOutTime?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  id: Scalars['ObjectID']['output'];
  images?: Maybe<Scalars['String']['output'][]>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface CheckInBookingCommandInput {
  id: Scalars['ObjectID']['input'];
  images?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
  utilityRecords?: InputMaybe<UtilityRecordInput[]>;
}

export interface CheckOutBookingCommandInput {
  id: Scalars['ObjectID']['input'];
  time?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface CreateBookingCommandInput {
  checkedInTime?: InputMaybe<Scalars['DateTime']['input']>;
  customerIds: Scalars['ObjectID']['input'][];
  deposit?: InputMaybe<CreateBookingDepositInput>;
  desks?: InputMaybe<CreateBookingDeskInput[]>;
  discount?: InputMaybe<DiscountInput>;
  endTime: Scalars['DateTime']['input'];
  isFixedDesks?: Scalars['Boolean']['input'];
  locationId: Scalars['ObjectID']['input'];
  markAsConfirmed?: Scalars['Boolean']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  numberOfPeople: Scalars['Float']['input'];
  packages: CreateBookingPackageInput[];
  paymentSettings?: InputMaybe<PaymentSettingsInput>;
  primaryCustomerId: Scalars['ObjectID']['input'];
  roomId: Scalars['ObjectID']['input'];
  selectTime: Scalars['Boolean']['input'];
  startTime: Scalars['DateTime']['input'];
}

export interface CreateBookingDepositInput {
  images?: InputMaybe<Scalars['String']['input'][]>;
  paidAmount?: InputMaybe<Scalars['Float']['input']>;
  paymentInfoId?: InputMaybe<Scalars['ObjectID']['input']>;
  paymentMethodId?: InputMaybe<Scalars['ObjectID']['input']>;
  requiredAmount: Scalars['Float']['input'];
  transactionDate?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface CreateBookingDeskInput {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
  subPackages?: InputMaybe<CreateBookingSubPackageInput[]>;
}

export interface CreateBookingPackageInput {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ObjectID']['input'];
}

export interface CreateBookingSubPackageInput {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ObjectID']['input'];
}

export interface CreateExtraServiceOrderCommandInput {
  applyTax?: Scalars['Boolean']['input'];
  bookingId?: InputMaybe<Scalars['ObjectID']['input']>;
  customerId: Scalars['ObjectID']['input'];
  extraServices: CreateExtraServicesInput[];
  locationId: Scalars['ObjectID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateExtraServiceTypeCommandInput {
  extraServiceCategoryId: Scalars['ObjectID']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  isActive?: Scalars['Boolean']['input'];
  isDefaultRoomService?: Scalars['Boolean']['input'];
  isInApp?: Scalars['Boolean']['input'];
  locationId: Scalars['ObjectID']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  unitId: Scalars['ObjectID']['input'];
}

export interface CreateExtraServicesInput {
  discountAmount: Scalars['Float']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  extraServiceTypeId: Scalars['ObjectID']['input'];
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  quantity: Scalars['Float']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  unitPrice: Scalars['Float']['input'];
}

export interface CreatePaymentPeriodCommandInput {
  bookingId: Scalars['ObjectID']['input'];
  discountAmount: Scalars['Float']['input'];
  endDate: Scalars['DateTime']['input'];
  estimatedAmount: Scalars['Float']['input'];
  paymentEndDate: Scalars['DateTime']['input'];
  paymentStartDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
}

export interface CreateUtilitiesInput {
  currentNumber?: InputMaybe<Scalars['Float']['input']>;
  discountAmount: Scalars['Float']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  formerNumber?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  quantity: Scalars['Float']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  unitPrice: Scalars['Float']['input'];
  utilityTypeId: Scalars['ObjectID']['input'];
}

export interface CreateUtilityOrderCommandInput {
  applyTax?: Scalars['Boolean']['input'];
  bookingId?: InputMaybe<Scalars['ObjectID']['input']>;
  customerId: Scalars['ObjectID']['input'];
  locationId: Scalars['ObjectID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  utilities: CreateUtilitiesInput[];
}

export interface CreateUtilityTypeCommandInput {
  icon?: InputMaybe<Scalars['String']['input']>;
  isActive?: Scalars['Boolean']['input'];
  isDefaultRoomService?: Scalars['Boolean']['input'];
  kind: RoomServiceType;
  locationId: Scalars['ObjectID']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  unitId: Scalars['ObjectID']['input'];
}

export interface CreateVisitTourCommandInput {
  arrivalTime?: InputMaybe<Scalars['DateTime']['input']>;
  assigneeId?: InputMaybe<Scalars['ObjectID']['input']>;
  customerId?: InputMaybe<Scalars['ObjectID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['ObjectID']['input'];
  roomId?: InputMaybe<Scalars['ObjectID']['input']>;
  serviceId?: InputMaybe<Scalars['ObjectID']['input']>;
  visitorEmail: Scalars['String']['input'];
  visitorFullName: Scalars['String']['input'];
  visitorPhoneNumber: Scalars['String']['input'];
}

export enum CustomerType {
  Individual = 'INDIVIDUAL',
  Team = 'TEAM',
}

export interface DeleteRequestBasicFilterInput {
  and?: InputMaybe<DeleteRequestBasicFilterInput[]>;
  not?: InputMaybe<DeleteRequestBasicFilterInput>;
  or?: InputMaybe<DeleteRequestBasicFilterInput[]>;
  requesterUserId?: InputMaybe<DeleteRequestRequesterUserIdOperatorInput>;
}

export interface DeleteRequestEntity {
  requestedAt: Scalars['DateTime']['output'];
  requesterName?: Maybe<Scalars['String']['output']>;
  requesterUserId?: Maybe<Scalars['ObjectID']['output']>;
}

export interface DeleteRequestFilterInput {
  and?: InputMaybe<DeleteRequestBasicFilterInput[]>;
  not?: InputMaybe<DeleteRequestBasicFilterInput>;
  or?: InputMaybe<DeleteRequestBasicFilterInput[]>;
  requesterUserId?: InputMaybe<DeleteRequestRequesterUserIdOperatorInput>;
}

export interface DeleteRequestRequesterUserIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface Discount {
  type: DiscountType;
  value: Scalars['Float']['output'];
}

export interface DiscountInput {
  type: DiscountType;
  value: Scalars['Float']['input'];
}

export enum DiscountType {
  Number = 'NUMBER',
  Percent = 'PERCENT',
}

export interface ExtraService {
  bookingId?: Maybe<Scalars['ObjectID']['output']>;
  businessId: Scalars['ObjectID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  customerId: Scalars['ObjectID']['output'];
  discountAmount: Scalars['Float']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  estimatedAmount: Scalars['Float']['output'];
  extraServiceOrderId: Scalars['ObjectID']['output'];
  extraServiceTypeId: Scalars['ObjectID']['output'];
  gallery?: Maybe<Scalars['String']['output'][]>;
  id: Scalars['ObjectID']['output'];
  invoiceCode?: Maybe<Scalars['String']['output']>;
  invoiceId?: Maybe<Scalars['ObjectID']['output']>;
  isGenerated?: Maybe<Scalars['Boolean']['output']>;
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  locationId: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status: PaymentStatus;
  totalAmount: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
  unitPrice: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface ExtraServiceBasicFilterInput {
  and?: InputMaybe<ExtraServiceBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceCode?: InputMaybe<ExtraServiceInvoiceCodeOperatorInput>;
  invoiceId?: InputMaybe<ExtraServiceInvoiceIdOperatorInput>;
  not?: InputMaybe<ExtraServiceBasicFilterInput>;
  or?: InputMaybe<ExtraServiceBasicFilterInput[]>;
  status?: InputMaybe<ExtraServiceStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceCategory {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  searchText: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface ExtraServiceCategoryBasicFilterInput {
  and?: InputMaybe<ExtraServiceCategoryBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<ExtraServiceCategoryIsActiveOperatorInput>;
  name?: InputMaybe<ExtraServiceCategoryNameOperatorInput>;
  not?: InputMaybe<ExtraServiceCategoryBasicFilterInput>;
  or?: InputMaybe<ExtraServiceCategoryBasicFilterInput[]>;
  searchText?: InputMaybe<ExtraServiceCategorySearchTextOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceCategoryFilterInput {
  and?: InputMaybe<ExtraServiceCategoryBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<ExtraServiceCategoryIsActiveOperatorInput>;
  name?: InputMaybe<ExtraServiceCategoryNameOperatorInput>;
  not?: InputMaybe<ExtraServiceCategoryBasicFilterInput>;
  or?: InputMaybe<ExtraServiceCategoryBasicFilterInput[]>;
  searchText?: InputMaybe<ExtraServiceCategorySearchTextOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceCategoryIsActiveOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ExtraServiceCategoryList {
  items: ExtraServiceCategory[];
  meta: PaginationMeta;
}

export interface ExtraServiceCategoryNameOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceCategoryQueryInput {
  filter?: InputMaybe<ExtraServiceCategoryFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<ExtraServiceCategorySortInput[]>;
}

export interface ExtraServiceCategorySearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceCategorySortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  isActive?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  priority?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface ExtraServiceFilterInput {
  and?: InputMaybe<ExtraServiceBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceCode?: InputMaybe<ExtraServiceInvoiceCodeOperatorInput>;
  invoiceId?: InputMaybe<ExtraServiceInvoiceIdOperatorInput>;
  not?: InputMaybe<ExtraServiceBasicFilterInput>;
  or?: InputMaybe<ExtraServiceBasicFilterInput[]>;
  status?: InputMaybe<ExtraServiceStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceInvoiceCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceInvoiceIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceList {
  items: ExtraService[];
  meta: PaginationMeta;
}

export interface ExtraServiceOrder {
  applyTax: Scalars['Boolean']['output'];
  bookingCode?: Maybe<Scalars['String']['output']>;
  bookingId?: Maybe<Scalars['ObjectID']['output']>;
  businessId: Scalars['ObjectID']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  customer: BaseCustomerEntity;
  customerId: Scalars['ObjectID']['output'];
  extraServiceTypeIds?: Maybe<Scalars['ObjectID']['output'][]>;
  extraServices: ExtraService[];
  id: Scalars['ObjectID']['output'];
  invoiceIds: Scalars['ObjectID']['output'][];
  locationId: Scalars['ObjectID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  paidAmount: Scalars['Float']['output'];
  paymentStatus: PaymentStatus;
  room?: Maybe<BaseRoomEntity>;
  roomId?: Maybe<Scalars['ObjectID']['output']>;
  totalAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface ExtraServiceOrderBasicFilterInput {
  and?: InputMaybe<ExtraServiceOrderBasicFilterInput[]>;
  bookingCode?: InputMaybe<ExtraServiceOrderBookingCodeOperatorInput>;
  bookingId?: InputMaybe<ExtraServiceOrderBookingIdOperatorInput>;
  code?: InputMaybe<ExtraServiceOrderCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customer?: InputMaybe<BaseCustomerBasicFilterInput>;
  customerId?: InputMaybe<ExtraServiceOrderCustomerIdOperatorInput>;
  extraServiceTypeIds?: InputMaybe<ExtraServiceOrderExtraServiceTypeIdsOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceIds?: InputMaybe<ExtraServiceOrderInvoiceIdsOperatorInput>;
  locationId?: InputMaybe<ExtraServiceOrderLocationIdOperatorInput>;
  not?: InputMaybe<ExtraServiceOrderBasicFilterInput>;
  or?: InputMaybe<ExtraServiceOrderBasicFilterInput[]>;
  paymentStatus?: InputMaybe<ExtraServiceOrderPaymentStatusOperatorInput>;
  room?: InputMaybe<BaseRoomBasicFilterInput>;
  roomId?: InputMaybe<ExtraServiceOrderRoomIdOperatorInput>;
  totalAmount?: InputMaybe<ExtraServiceOrderTotalAmountOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceOrderBookingCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceOrderBookingIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceOrderCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceOrderCustomerIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceOrderExtraServiceTypeIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceOrderFilterInput {
  and?: InputMaybe<ExtraServiceOrderBasicFilterInput[]>;
  bookingCode?: InputMaybe<ExtraServiceOrderBookingCodeOperatorInput>;
  bookingId?: InputMaybe<ExtraServiceOrderBookingIdOperatorInput>;
  code?: InputMaybe<ExtraServiceOrderCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customer?: InputMaybe<BaseCustomerFilterInput>;
  customerId?: InputMaybe<ExtraServiceOrderCustomerIdOperatorInput>;
  extraServiceTypeIds?: InputMaybe<ExtraServiceOrderExtraServiceTypeIdsOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceIds?: InputMaybe<ExtraServiceOrderInvoiceIdsOperatorInput>;
  locationId?: InputMaybe<ExtraServiceOrderLocationIdOperatorInput>;
  not?: InputMaybe<ExtraServiceOrderBasicFilterInput>;
  or?: InputMaybe<ExtraServiceOrderBasicFilterInput[]>;
  paymentStatus?: InputMaybe<ExtraServiceOrderPaymentStatusOperatorInput>;
  room?: InputMaybe<BaseRoomFilterInput>;
  roomId?: InputMaybe<ExtraServiceOrderRoomIdOperatorInput>;
  totalAmount?: InputMaybe<ExtraServiceOrderTotalAmountOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceOrderInvoiceIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceOrderInvoicePreCreate {
  applyTax: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  customerId: Scalars['ObjectID']['output'];
  id: Scalars['ObjectID']['output'];
  invoiceItems: InvoiceItemPreCreate[];
}

export interface ExtraServiceOrderList {
  items: ExtraServiceOrder[];
  meta: PaginationMeta;
}

export interface ExtraServiceOrderLocationIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceOrderPaymentStatusOperatorInput {
  eq?: InputMaybe<PaymentStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<PaymentStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<PaymentStatus>;
  nin?: InputMaybe<PaymentStatus[]>;
}

export interface ExtraServiceOrderQueryInput {
  filter?: InputMaybe<ExtraServiceOrderFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<ExtraServiceOrderSortInput[]>;
}

export interface ExtraServiceOrderRoomIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceOrderSortInput {
  bookingCode?: InputMaybe<SortDirection>;
  code?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  customer?: InputMaybe<BaseCustomerSortInput>;
  id?: InputMaybe<SortDirection>;
  paymentStatus?: InputMaybe<SortDirection>;
  room?: InputMaybe<BaseRoomSortInput>;
  totalAmount?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface ExtraServiceOrderTotalAmountOperatorInput {
  eq?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Scalars['Float']['input'][]>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Scalars['Float']['input'][]>;
}

export interface ExtraServiceQueryInput {
  filter?: InputMaybe<ExtraServiceFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<ExtraServiceSortInput[]>;
}

export interface ExtraServiceSortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  invoiceCode?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface ExtraServiceStatusOperatorInput {
  eq?: InputMaybe<PaymentStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<PaymentStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<PaymentStatus>;
  nin?: InputMaybe<PaymentStatus[]>;
}

export interface ExtraServiceType {
  businessId: Scalars['ObjectID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  extraServiceCategoryId: Scalars['ObjectID']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectID']['output'];
  isActive: Scalars['Boolean']['output'];
  isDefaultRoomService: Scalars['Boolean']['output'];
  isInApp: Scalars['Boolean']['output'];
  locationId: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  searchText: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  unitId: Scalars['ObjectID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface ExtraServiceTypeBasicFilterInput {
  and?: InputMaybe<ExtraServiceTypeBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<ExtraServiceTypeIsActiveOperatorInput>;
  isDefaultRoomService?: InputMaybe<ExtraServiceTypeIsDefaultRoomServiceOperatorInput>;
  isInApp?: InputMaybe<ExtraServiceTypeIsInAppOperatorInput>;
  locationId?: InputMaybe<ExtraServiceTypeLocationIdOperatorInput>;
  name?: InputMaybe<ExtraServiceTypeNameOperatorInput>;
  not?: InputMaybe<ExtraServiceTypeBasicFilterInput>;
  or?: InputMaybe<ExtraServiceTypeBasicFilterInput[]>;
  price?: InputMaybe<ExtraServiceTypePriceOperatorInput>;
  searchText?: InputMaybe<ExtraServiceTypeSearchTextOperatorInput>;
  unit?: InputMaybe<ExtraServiceTypeUnitOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceTypeFilterInput {
  and?: InputMaybe<ExtraServiceTypeBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<ExtraServiceTypeIsActiveOperatorInput>;
  isDefaultRoomService?: InputMaybe<ExtraServiceTypeIsDefaultRoomServiceOperatorInput>;
  isInApp?: InputMaybe<ExtraServiceTypeIsInAppOperatorInput>;
  locationId?: InputMaybe<ExtraServiceTypeLocationIdOperatorInput>;
  name?: InputMaybe<ExtraServiceTypeNameOperatorInput>;
  not?: InputMaybe<ExtraServiceTypeBasicFilterInput>;
  or?: InputMaybe<ExtraServiceTypeBasicFilterInput[]>;
  price?: InputMaybe<ExtraServiceTypePriceOperatorInput>;
  searchText?: InputMaybe<ExtraServiceTypeSearchTextOperatorInput>;
  unit?: InputMaybe<ExtraServiceTypeUnitOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface ExtraServiceTypeIsActiveOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ExtraServiceTypeIsDefaultRoomServiceOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ExtraServiceTypeIsInAppOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ExtraServiceTypeList {
  items: ExtraServiceType[];
  meta: PaginationMeta;
}

export interface ExtraServiceTypeLocationIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface ExtraServiceTypeNameOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceTypePriceOperatorInput {
  eq?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Scalars['Float']['input'][]>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Scalars['Float']['input'][]>;
}

export interface ExtraServiceTypeQueryInput {
  filter?: InputMaybe<ExtraServiceTypeFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<ExtraServiceTypeSortInput[]>;
}

export interface ExtraServiceTypeSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface ExtraServiceTypeSortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  isActive?: InputMaybe<SortDirection>;
  isDefaultRoomService?: InputMaybe<SortDirection>;
  isInApp?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface ExtraServiceTypeUnitOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface GetBookingCalendarRecordsQueryInput {
  endTime: Scalars['DateTime']['input'];
  roomIds: Scalars['ObjectID']['input'][];
  startTime: Scalars['DateTime']['input'];
}

export interface GetBookingInvoicesPreCreateQueryInput {
  bookingId?: InputMaybe<Scalars['ObjectID']['input']>;
  locationId: Scalars['ObjectID']['input'];
  periodEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  periodStartDate?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface GetPaymentPeriodInvoicePreCreateQueryInput {
  bookingId: Scalars['ObjectID']['input'];
  paymentPeriodId: Scalars['ObjectID']['input'];
}

export interface GetPreChangePaymentPeriodInfoQueryInput {
  applyFrom: Scalars['DateTime']['input'];
  bookingId: Scalars['ObjectID']['input'];
  paymentSettings?: InputMaybe<PaymentSettingsInput>;
}

export enum InvoiceItemCategory {
  ExtraService = 'EXTRA_SERVICE',
  ExtraServiceType = 'EXTRA_SERVICE_TYPE',
  MembershipSubscription = 'MEMBERSHIP_SUBSCRIPTION',
  PaymentPeriod = 'PAYMENT_PERIOD',
  Utility = 'UTILITY',
}

export interface InvoiceItemMetadata {
  numberOfPeople?: Maybe<Scalars['Float']['output']>;
  packageUnit?: Maybe<Scalars['String']['output']>;
  utilityCurrentNumber?: Maybe<Scalars['Float']['output']>;
  utilityFormerNumber?: Maybe<Scalars['Float']['output']>;
}

export interface InvoiceItemPreCreate {
  category: InvoiceItemCategory;
  discountAmount: Scalars['Float']['output'];
  endTime?: Maybe<Scalars['DateTime']['output']>;
  estimatedAmount: Scalars['Float']['output'];
  extraServiceId?: Maybe<Scalars['ObjectID']['output']>;
  extraServiceTypeId?: Maybe<Scalars['ObjectID']['output']>;
  metadata: InvoiceItemMetadata;
  name: Scalars['String']['output'];
  paymentPeriodId?: Maybe<Scalars['ObjectID']['output']>;
  quantity: Scalars['Float']['output'];
  startTime?: Maybe<Scalars['DateTime']['output']>;
  totalAmount: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
  unitPrice: Scalars['Float']['output'];
  utilityId?: Maybe<Scalars['ObjectID']['output']>;
  utilityTypeId?: Maybe<Scalars['ObjectID']['output']>;
}

export interface MeasurementUnit {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  id: Scalars['ObjectID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  searchText: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface MeasurementUnitBasicFilterInput {
  and?: InputMaybe<MeasurementUnitBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<MeasurementUnitIsActiveOperatorInput>;
  name?: InputMaybe<MeasurementUnitNameOperatorInput>;
  not?: InputMaybe<MeasurementUnitBasicFilterInput>;
  or?: InputMaybe<MeasurementUnitBasicFilterInput[]>;
  searchText?: InputMaybe<MeasurementUnitSearchTextOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface MeasurementUnitFilterInput {
  and?: InputMaybe<MeasurementUnitBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<MeasurementUnitIsActiveOperatorInput>;
  name?: InputMaybe<MeasurementUnitNameOperatorInput>;
  not?: InputMaybe<MeasurementUnitBasicFilterInput>;
  or?: InputMaybe<MeasurementUnitBasicFilterInput[]>;
  searchText?: InputMaybe<MeasurementUnitSearchTextOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface MeasurementUnitIsActiveOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MeasurementUnitList {
  items: MeasurementUnit[];
  meta: PaginationMeta;
}

export interface MeasurementUnitNameOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface MeasurementUnitQueryInput {
  filter?: InputMaybe<MeasurementUnitFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<MeasurementUnitSortInput[]>;
}

export interface MeasurementUnitSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface MeasurementUnitSortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  isActive?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface Mutation {
  bulkDeleteExtraServices: SimpleResponse;
  bulkDeleteUtilities: SimpleResponse;
  cancelBooking: SimpleResponse;
  changePaymentPeriod: PaymentPeriod[];
  checkInBooking: CheckIn;
  checkOutBooking: CheckIn;
  completeBooking: SimpleResponse;
  confirmBooking: SimpleResponse;
  createBooking: Booking;
  createExtraServiceOrder: ExtraServiceOrder;
  createExtraServiceType: ExtraServiceType;
  createPaymentPeriod: PaymentPeriod;
  createUtilityOrder: UtilityOrder;
  createUtilityType: UtilityType;
  createVisitTour: VisitTour;
  deleteBooking: SimpleResponse;
  deleteExtraServiceOrder: SimpleResponse;
  deleteExtraServiceType: SimpleResponse;
  deletePaymentPeriod: SimpleResponse;
  deleteUtilityOrder: SimpleResponse;
  deleteUtilityType: SimpleResponse;
  deleteVisitTour: SimpleResponse;
  rejectBookingDeletion: SimpleResponse;
  updateBooking: Booking;
  updateBookingBasicInfo: Booking;
  updateBookingPolicy: BookingPolicy;
  updateExtraServiceOrder: ExtraServiceOrder;
  updateExtraServiceType: ExtraServiceType;
  updatePaymentPeriod: PaymentPeriod;
  updateStatusExtraServiceType: ExtraServiceType;
  updateStatusUtilityType: UtilityType;
  updateUtilityOrder: UtilityOrder;
  updateUtilityType: UtilityType;
  updateVisitTour: VisitTour;
  updateVisitTourArrivalTime: VisitTour;
  updateVisitTourAssignee: SimpleResponse;
  updateVisitTourStatus: VisitTour;
}

export interface MutationBulkDeleteExtraServicesArgs {
  ids: Scalars['ObjectID']['input'][];
}

export interface MutationBulkDeleteUtilitiesArgs {
  ids: Scalars['ObjectID']['input'][];
}

export interface MutationCancelBookingArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationChangePaymentPeriodArgs {
  input: ChangePaymentPeriodCommandInput;
}

export interface MutationCheckInBookingArgs {
  input: CheckInBookingCommandInput;
}

export interface MutationCheckOutBookingArgs {
  input: CheckOutBookingCommandInput;
}

export interface MutationCompleteBookingArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationConfirmBookingArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationCreateBookingArgs {
  input: CreateBookingCommandInput;
}

export interface MutationCreateExtraServiceOrderArgs {
  input: CreateExtraServiceOrderCommandInput;
}

export interface MutationCreateExtraServiceTypeArgs {
  input: CreateExtraServiceTypeCommandInput;
}

export interface MutationCreatePaymentPeriodArgs {
  input: CreatePaymentPeriodCommandInput;
}

export interface MutationCreateUtilityOrderArgs {
  input: CreateUtilityOrderCommandInput;
}

export interface MutationCreateUtilityTypeArgs {
  input: CreateUtilityTypeCommandInput;
}

export interface MutationCreateVisitTourArgs {
  input: CreateVisitTourCommandInput;
}

export interface MutationDeleteBookingArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationDeleteExtraServiceOrderArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationDeleteExtraServiceTypeArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationDeletePaymentPeriodArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationDeleteUtilityOrderArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationDeleteUtilityTypeArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationDeleteVisitTourArgs {
  ids: Scalars['ObjectID']['input'][];
}

export interface MutationRejectBookingDeletionArgs {
  id: Scalars['ObjectID']['input'];
}

export interface MutationUpdateBookingArgs {
  input: UpdateBookingCommandInput;
}

export interface MutationUpdateBookingBasicInfoArgs {
  input: UpdateBookingBasicInfoCommandInput;
}

export interface MutationUpdateBookingPolicyArgs {
  input: UpdateBookingPolicyCommandInput;
}

export interface MutationUpdateExtraServiceOrderArgs {
  input: UpdateExtraServiceOrderCommandInput;
}

export interface MutationUpdateExtraServiceTypeArgs {
  input: UpdateExtraServiceTypeCommandInput;
}

export interface MutationUpdatePaymentPeriodArgs {
  input: UpdatePaymentPeriodCommandInput;
}

export interface MutationUpdateStatusExtraServiceTypeArgs {
  input: UpdateStatusExtraServiceTypeCommandInput;
}

export interface MutationUpdateStatusUtilityTypeArgs {
  input: UpdateStatusUtilityTypeCommandInput;
}

export interface MutationUpdateUtilityOrderArgs {
  input: UpdateUtilityOrderCommandInput;
}

export interface MutationUpdateUtilityTypeArgs {
  input: UpdateUtilityTypeCommandInput;
}

export interface MutationUpdateVisitTourArgs {
  input: UpdateVisitTourCommandInput;
}

export interface MutationUpdateVisitTourArrivalTimeArgs {
  input: UpdateVisitTourArrivalTimeCommandInput;
}

export interface MutationUpdateVisitTourAssigneeArgs {
  input: UpdateVisitTourAssigneeCommandInput;
}

export interface MutationUpdateVisitTourStatusArgs {
  input: UpdateVisitTourStatusCommandInput;
}

export enum PackageUnit {
  Days = 'DAYS',
  Hours = 'HOURS',
  Months = 'MONTHS',
  Weeks = 'WEEKS',
  Years = 'YEARS',
}

export interface PaginationInput {
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
}

export interface PaginationMeta {
  page: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
}

export interface PaymentPeriod {
  bookingId: Scalars['ObjectID']['output'];
  businessId: Scalars['ObjectID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  discountAmount: Scalars['Float']['output'];
  endDate: Scalars['DateTime']['output'];
  estimatedAmount: Scalars['Float']['output'];
  id: Scalars['ObjectID']['output'];
  invoiceCode?: Maybe<Scalars['String']['output']>;
  invoiceId?: Maybe<Scalars['ObjectID']['output']>;
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  locationId: Scalars['ObjectID']['output'];
  paymentEndDate: Scalars['DateTime']['output'];
  paymentStartDate: Scalars['DateTime']['output'];
  startDate: Scalars['DateTime']['output'];
  status: PaymentPeriodStatus;
  totalAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface PaymentPeriodBasicFilterInput {
  and?: InputMaybe<PaymentPeriodBasicFilterInput[]>;
  bookingId?: InputMaybe<PaymentPeriodBookingIdOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  endDate?: InputMaybe<PaymentPeriodEndDateOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceCode?: InputMaybe<PaymentPeriodInvoiceCodeOperatorInput>;
  invoiceId?: InputMaybe<PaymentPeriodInvoiceIdOperatorInput>;
  not?: InputMaybe<PaymentPeriodBasicFilterInput>;
  or?: InputMaybe<PaymentPeriodBasicFilterInput[]>;
  paymentEndDate?: InputMaybe<PaymentPeriodPaymentEndDateOperatorInput>;
  paymentStartDate?: InputMaybe<PaymentPeriodPaymentStartDateOperatorInput>;
  startDate?: InputMaybe<PaymentPeriodStartDateOperatorInput>;
  status?: InputMaybe<PaymentPeriodStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface PaymentPeriodBookingIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface PaymentPeriodEndDateOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface PaymentPeriodFilterInput {
  and?: InputMaybe<PaymentPeriodBasicFilterInput[]>;
  bookingId?: InputMaybe<PaymentPeriodBookingIdOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  endDate?: InputMaybe<PaymentPeriodEndDateOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceCode?: InputMaybe<PaymentPeriodInvoiceCodeOperatorInput>;
  invoiceId?: InputMaybe<PaymentPeriodInvoiceIdOperatorInput>;
  not?: InputMaybe<PaymentPeriodBasicFilterInput>;
  or?: InputMaybe<PaymentPeriodBasicFilterInput[]>;
  paymentEndDate?: InputMaybe<PaymentPeriodPaymentEndDateOperatorInput>;
  paymentStartDate?: InputMaybe<PaymentPeriodPaymentStartDateOperatorInput>;
  startDate?: InputMaybe<PaymentPeriodStartDateOperatorInput>;
  status?: InputMaybe<PaymentPeriodStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface PaymentPeriodInvoiceCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface PaymentPeriodInvoiceIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface PaymentPeriodInvoicePreCreate {
  applyTax: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  customerId: Scalars['ObjectID']['output'];
  endTime: Scalars['DateTime']['output'];
  id: Scalars['ObjectID']['output'];
  invoiceItems: InvoiceItemPreCreate[];
  paidDepositAmount: Scalars['Float']['output'];
  requiredDepositAmount: Scalars['Float']['output'];
  roomId: Scalars['ObjectID']['output'];
  roomName: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
}

export interface PaymentPeriodList {
  items: PaymentPeriod[];
  meta: PaginationMeta;
}

export interface PaymentPeriodPaymentEndDateOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface PaymentPeriodPaymentStartDateOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface PaymentPeriodQueryInput {
  filter?: InputMaybe<PaymentPeriodFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<PaymentPeriodSortInput[]>;
}

export interface PaymentPeriodSortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  endDate?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  invoiceCode?: InputMaybe<SortDirection>;
  paymentEndDate?: InputMaybe<SortDirection>;
  paymentStartDate?: InputMaybe<SortDirection>;
  startDate?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface PaymentPeriodStartDateOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export enum PaymentPeriodStatus {
  Debt = 'DEBT',
  Paid = 'PAID',
  PartialPaid = 'PARTIAL_PAID',
  Unpaid = 'UNPAID',
}

export interface PaymentPeriodStatusOperatorInput {
  eq?: InputMaybe<PaymentPeriodStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<PaymentPeriodStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<PaymentPeriodStatus>;
  nin?: InputMaybe<PaymentPeriodStatus[]>;
}

export enum PaymentPeriodUnit {
  Months = 'MONTHS',
  Years = 'YEARS',
}

export interface PaymentSettings {
  duration: Scalars['Float']['output'];
  firstPeriodPaymentEndDate: Scalars['DateTime']['output'];
  firstPeriodPaymentStartDate: Scalars['DateTime']['output'];
  unit: PaymentPeriodUnit;
}

export interface PaymentSettingsInput {
  duration: Scalars['Float']['input'];
  firstPeriodPaymentEndDate: Scalars['DateTime']['input'];
  firstPeriodPaymentStartDate: Scalars['DateTime']['input'];
  unit: PaymentPeriodUnit;
}

export enum PaymentStatus {
  Paid = 'PAID',
  PartialPaid = 'PARTIAL_PAID',
  Unpaid = 'UNPAID',
}

export enum Platform {
  Pms = 'PMS',
  Public = 'PUBLIC',
  Sba = 'SBA',
  SuperAdmin = 'SUPER_ADMIN',
  Wls = 'WLS',
}

export interface PreChangePaymentPeriodInfo {
  discountAmount: Scalars['Float']['output'];
  endDate: Scalars['DateTime']['output'];
  estimatedAmount: Scalars['Float']['output'];
  paymentEndDate: Scalars['DateTime']['output'];
  paymentStartDate: Scalars['DateTime']['output'];
  startDate: Scalars['DateTime']['output'];
}

export interface PreCheckInInfo {
  utilityRecords: UtilityRecordInfo[];
}

export interface PreCreateUtilitiesQueryInput {
  bookingId: Scalars['ObjectID']['input'];
  locationId: Scalars['ObjectID']['input'];
}

export interface PreCreateUtilitiesQueryResponse {
  utilityRecords: UtilityRecord[];
}

export interface PreCreateUtilityQueryInput {
  bookingId: Scalars['ObjectID']['input'];
  locationId: Scalars['ObjectID']['input'];
  utilityTypeId: Scalars['ObjectID']['input'];
}

export interface PreCreateUtilityQueryResponse {
  formerNumber: Scalars['Float']['output'];
}

export enum PriceType {
  PerPerson = 'PER_PERSON',
  PerRoom = 'PER_ROOM',
}

export interface Query {
  booking: Booking;
  bookingCalendarRecords: BookingCalendarRecord[];
  bookingDetailSummary: BookingDetailSummary;
  bookingInvoicesPreCreate: BookingInvoicePreCreate[];
  bookingPolicy: BookingPolicy;
  bookingPreCompleteInfo: BookingPreCompleteInfo;
  bookingchangelogs: BookingChangelogList;
  bookings: BookingList;
  calculateBooking: CalculateBookingResponse;
  extraService: ExtraService;
  extraServiceCategories: ExtraServiceCategoryList;
  extraServiceCategory: ExtraServiceCategory;
  extraServiceOrder: ExtraServiceOrder;
  extraServiceOrderInvoicePreCreate: ExtraServiceOrderInvoicePreCreate;
  extraServiceOrders: ExtraServiceOrderList;
  extraServiceType: ExtraServiceType;
  extraServiceTypes: ExtraServiceTypeList;
  extraServices: ExtraServiceList;
  measurementUnit: MeasurementUnit;
  measurementUnits: MeasurementUnitList;
  paymentPeriod: PaymentPeriod;
  paymentPeriodInvoicesPreCreate: PaymentPeriodInvoicePreCreate;
  paymentPeriods: PaymentPeriodList;
  preChangePaymentPeriodInfo: PreChangePaymentPeriodInfo[];
  preCheckInInfo: PreCheckInInfo;
  preCreateUtilities: PreCreateUtilitiesQueryResponse;
  preCreateUtility: PreCreateUtilityQueryResponse;
  utilities: UtilityList;
  utility: Utility;
  utilityOrder: UtilityOrder;
  utilityOrderInvoicePreCreate: UtilityOrderInvoicePreCreate;
  utilityOrders: UtilityOrderList;
  utilityType: UtilityType;
  utilityTypes: UtilityTypeList;
  visitTour: VisitTour;
  visitTours: VisitTourList;
}

export interface QueryBookingArgs {
  id: Scalars['ObjectID']['input'];
  locationId?: InputMaybe<Scalars['ObjectID']['input']>;
}

export interface QueryBookingCalendarRecordsArgs {
  input: GetBookingCalendarRecordsQueryInput;
}

export interface QueryBookingDetailSummaryArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryBookingInvoicesPreCreateArgs {
  input: GetBookingInvoicesPreCreateQueryInput;
}

export interface QueryBookingPolicyArgs {
  locationId: Scalars['ObjectID']['input'];
}

export interface QueryBookingPreCompleteInfoArgs {
  bookingId: Scalars['ObjectID']['input'];
}

export interface QueryBookingchangelogsArgs {
  input: BookingChangelogQueryInput;
}

export interface QueryBookingsArgs {
  input: BookingQueryInput;
}

export interface QueryCalculateBookingArgs {
  input: CalculateBookingQueryInput;
}

export interface QueryExtraServiceArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryExtraServiceCategoriesArgs {
  input: ExtraServiceCategoryQueryInput;
}

export interface QueryExtraServiceCategoryArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryExtraServiceOrderArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryExtraServiceOrderInvoicePreCreateArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryExtraServiceOrdersArgs {
  input: ExtraServiceOrderQueryInput;
}

export interface QueryExtraServiceTypeArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryExtraServiceTypesArgs {
  input: ExtraServiceTypeQueryInput;
}

export interface QueryExtraServicesArgs {
  input: ExtraServiceQueryInput;
}

export interface QueryMeasurementUnitArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryMeasurementUnitsArgs {
  input: MeasurementUnitQueryInput;
}

export interface QueryPaymentPeriodArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryPaymentPeriodInvoicesPreCreateArgs {
  input: GetPaymentPeriodInvoicePreCreateQueryInput;
}

export interface QueryPaymentPeriodsArgs {
  input: PaymentPeriodQueryInput;
}

export interface QueryPreChangePaymentPeriodInfoArgs {
  input: GetPreChangePaymentPeriodInfoQueryInput;
}

export interface QueryPreCheckInInfoArgs {
  bookingId: Scalars['ObjectID']['input'];
}

export interface QueryPreCreateUtilitiesArgs {
  input: PreCreateUtilitiesQueryInput;
}

export interface QueryPreCreateUtilityArgs {
  input: PreCreateUtilityQueryInput;
}

export interface QueryUtilitiesArgs {
  input: UtilityQueryInput;
}

export interface QueryUtilityArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryUtilityOrderArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryUtilityOrderInvoicePreCreateArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryUtilityOrdersArgs {
  input: UtilityOrderQueryInput;
}

export interface QueryUtilityTypeArgs {
  id: Scalars['ObjectID']['input'];
}

export interface QueryUtilityTypesArgs {
  input: UtilityTypeQueryInput;
}

export interface QueryVisitTourArgs {
  id: Scalars['ObjectID']['input'];
  locationId?: InputMaybe<Scalars['ObjectID']['input']>;
}

export interface QueryVisitToursArgs {
  input: VisitTourQueryInput;
}

export enum ReferenceResource {
  Coworker = 'COWORKER',
  Facebook = 'FACEBOOK',
  Fanpage = 'FANPAGE',
  Friends = 'FRIENDS',
  Google = 'GOOGLE',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  OfflineBanner = 'OFFLINE_BANNER',
  Others = 'OTHERS',
  Twitter = 'TWITTER',
  Website = 'WEBSITE',
}

export enum RoomServiceType {
  Fixed = 'FIXED',
  PerUsage = 'PER_USAGE',
}

export interface SimpleResponse {
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export interface SubBundleEntity {
  amount: Scalars['Float']['output'];
  deskId: Scalars['ObjectID']['output'];
  id: Scalars['ObjectID']['output'];
  packageId: Scalars['ObjectID']['output'];
  quantity: Scalars['Float']['output'];
  totalAmount: Scalars['Float']['output'];
  unit: PackageUnit;
}

export enum TaxCategory {
  ExtraServiceType = 'EXTRA_SERVICE_TYPE',
  RoomFee = 'ROOM_FEE',
  UtilityType = 'UTILITY_TYPE',
}

export enum TaxCategoryInput {
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

export enum TaxPoliciesScopeInput {
  All = 'ALL',
  OnUserRequest = 'ON_USER_REQUEST',
}

export interface TaxPolicy {
  category: TaxCategory;
  extraServiceTypeIds?: Maybe<Scalars['ObjectID']['output']>;
  rate: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  utilityTypeIds?: Maybe<Scalars['ObjectID']['output']>;
}

export interface UpdateBookingBasicInfoCommandInput {
  id: Scalars['ObjectID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateBookingCommandInput {
  changeReason?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id: Scalars['ObjectID']['input'];
  requiredDepositAmount: Scalars['Float']['input'];
  startTime: Scalars['DateTime']['input'];
}

export interface UpdateBookingPolicyCommandInput {
  isAutoConfirm: Scalars['Boolean']['input'];
  isCancelable: Scalars['Boolean']['input'];
  isTaxApplied: Scalars['Boolean']['input'];
  locationId: Scalars['ObjectID']['input'];
  taxPolicies?: InputMaybe<UpdateBookingPolicyTaxPoliciesInput>;
}

export interface UpdateBookingPolicyTaxPoliciesInput {
  policies: UpdateBookingPolicyTaxPolicyInput[];
  scope: TaxPoliciesScopeInput;
}

export interface UpdateBookingPolicyTaxPolicyInput {
  category: TaxCategoryInput;
  extraServiceTypeIds?: InputMaybe<Scalars['ObjectID']['input']>;
  rate: Scalars['Float']['input'];
  type: Scalars['String']['input'];
  utilityTypeIds?: InputMaybe<Scalars['ObjectID']['input']>;
}

export interface UpdateExtraServiceOrderCommandInput {
  applyTax?: InputMaybe<Scalars['Boolean']['input']>;
  extraServices: UpdateExtraServicesInput[];
  id: Scalars['ObjectID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateExtraServiceTypeCommandInput {
  extraServiceCategoryId: Scalars['ObjectID']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ObjectID']['input'];
  isActive?: Scalars['Boolean']['input'];
  isDefaultRoomService?: Scalars['Boolean']['input'];
  isInApp?: Scalars['Boolean']['input'];
  locationId: Scalars['ObjectID']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  unitId: Scalars['ObjectID']['input'];
}

export interface UpdateExtraServicesInput {
  discountAmount: Scalars['Float']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  extraServiceTypeId: Scalars['ObjectID']['input'];
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  id?: InputMaybe<Scalars['ObjectID']['input']>;
  quantity: Scalars['Float']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  unitPrice: Scalars['Float']['input'];
}

export interface UpdatePaymentPeriodCommandInput {
  discountAmount: Scalars['Float']['input'];
  endDate: Scalars['DateTime']['input'];
  estimatedAmount: Scalars['Float']['input'];
  id: Scalars['ObjectID']['input'];
  paymentEndDate: Scalars['DateTime']['input'];
  paymentStartDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
}

export interface UpdateStatusExtraServiceTypeCommandInput {
  id: Scalars['ObjectID']['input'];
  isActive: Scalars['Boolean']['input'];
}

export interface UpdateStatusUtilityTypeCommandInput {
  id: Scalars['ObjectID']['input'];
  isActive: Scalars['Boolean']['input'];
}

export interface UpdateUtilitiesInput {
  currentNumber?: InputMaybe<Scalars['Float']['input']>;
  discountAmount: Scalars['Float']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  formerNumber?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['String']['input'][]>;
  id?: InputMaybe<Scalars['ObjectID']['input']>;
  quantity: Scalars['Float']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  unitPrice: Scalars['Float']['input'];
  utilityTypeId: Scalars['ObjectID']['input'];
}

export interface UpdateUtilityOrderCommandInput {
  applyTax?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ObjectID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  utilities: UpdateUtilitiesInput[];
}

export interface UpdateUtilityTypeCommandInput {
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ObjectID']['input'];
  isActive?: Scalars['Boolean']['input'];
  isDefaultRoomService?: Scalars['Boolean']['input'];
  kind: RoomServiceType;
  locationId: Scalars['ObjectID']['input'];
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  unitId: Scalars['ObjectID']['input'];
}

export interface UpdateVisitTourArrivalTimeCommandInput {
  arrivalTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ObjectID']['input'];
}

export interface UpdateVisitTourAssigneeCommandInput {
  assigneeId: Scalars['ObjectID']['input'];
  ids: Scalars['ObjectID']['input'][];
}

export interface UpdateVisitTourCommandInput {
  arrivalTime?: InputMaybe<Scalars['DateTime']['input']>;
  assigneeId?: InputMaybe<Scalars['ObjectID']['input']>;
  customerId?: InputMaybe<Scalars['ObjectID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ObjectID']['input'];
  locationId: Scalars['ObjectID']['input'];
  roomId?: InputMaybe<Scalars['ObjectID']['input']>;
  serviceId?: InputMaybe<Scalars['ObjectID']['input']>;
  visitorEmail: Scalars['String']['input'];
  visitorFullName: Scalars['String']['input'];
  visitorPhoneNumber: Scalars['String']['input'];
}

export interface UpdateVisitTourStatusCommandInput {
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ObjectID']['input'];
  status: VisitTourStatus;
}

export interface Utility {
  bookingId?: Maybe<Scalars['ObjectID']['output']>;
  businessId: Scalars['ObjectID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  currentNumber?: Maybe<Scalars['Float']['output']>;
  customerId: Scalars['ObjectID']['output'];
  discountAmount: Scalars['Float']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  estimatedAmount: Scalars['Float']['output'];
  formerNumber?: Maybe<Scalars['Float']['output']>;
  gallery?: Maybe<Scalars['String']['output'][]>;
  id: Scalars['ObjectID']['output'];
  invoiceCode?: Maybe<Scalars['String']['output']>;
  invoiceId?: Maybe<Scalars['ObjectID']['output']>;
  isGenerated?: Maybe<Scalars['Boolean']['output']>;
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  kind: RoomServiceType;
  locationId: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  roomId?: Maybe<Scalars['ObjectID']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status: PaymentStatus;
  totalAmount: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
  unitPrice: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
  utilityOrderId: Scalars['ObjectID']['output'];
  utilityTypeId: Scalars['ObjectID']['output'];
}

export interface UtilityBasicFilterInput {
  and?: InputMaybe<UtilityBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceCode?: InputMaybe<UtilityInvoiceCodeOperatorInput>;
  invoiceId?: InputMaybe<UtilityInvoiceIdOperatorInput>;
  kind?: InputMaybe<UtilityKindOperatorInput>;
  not?: InputMaybe<UtilityBasicFilterInput>;
  or?: InputMaybe<UtilityBasicFilterInput[]>;
  status?: InputMaybe<UtilityStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface UtilityFilterInput {
  and?: InputMaybe<UtilityBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceCode?: InputMaybe<UtilityInvoiceCodeOperatorInput>;
  invoiceId?: InputMaybe<UtilityInvoiceIdOperatorInput>;
  kind?: InputMaybe<UtilityKindOperatorInput>;
  not?: InputMaybe<UtilityBasicFilterInput>;
  or?: InputMaybe<UtilityBasicFilterInput[]>;
  status?: InputMaybe<UtilityStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface UtilityInvoiceCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface UtilityInvoiceIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityKindOperatorInput {
  eq?: InputMaybe<RoomServiceType>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<RoomServiceType[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<RoomServiceType>;
  nin?: InputMaybe<RoomServiceType[]>;
}

export interface UtilityList {
  items: Utility[];
  meta: PaginationMeta;
}

export interface UtilityOrder {
  applyTax: Scalars['Boolean']['output'];
  bookingCode?: Maybe<Scalars['String']['output']>;
  bookingId?: Maybe<Scalars['ObjectID']['output']>;
  businessId: Scalars['ObjectID']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  customer: BaseCustomerEntity;
  customerId: Scalars['ObjectID']['output'];
  id: Scalars['ObjectID']['output'];
  invoiceIds: Scalars['ObjectID']['output'][];
  locationId: Scalars['ObjectID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  paidAmount: Scalars['Float']['output'];
  paymentStatus: PaymentStatus;
  room?: Maybe<BaseRoomEntity>;
  roomId?: Maybe<Scalars['ObjectID']['output']>;
  totalAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
  utilities: Utility[];
  utilityTypeIds?: Maybe<Scalars['ObjectID']['output'][]>;
}

export interface UtilityOrderBasicFilterInput {
  and?: InputMaybe<UtilityOrderBasicFilterInput[]>;
  bookingCode?: InputMaybe<UtilityOrderBookingCodeOperatorInput>;
  bookingId?: InputMaybe<UtilityOrderBookingIdOperatorInput>;
  code?: InputMaybe<UtilityOrderCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customer?: InputMaybe<BaseCustomerBasicFilterInput>;
  customerId?: InputMaybe<UtilityOrderCustomerIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceIds?: InputMaybe<UtilityOrderInvoiceIdsOperatorInput>;
  locationId?: InputMaybe<UtilityOrderLocationIdOperatorInput>;
  not?: InputMaybe<UtilityOrderBasicFilterInput>;
  or?: InputMaybe<UtilityOrderBasicFilterInput[]>;
  paymentStatus?: InputMaybe<UtilityOrderPaymentStatusOperatorInput>;
  room?: InputMaybe<BaseRoomBasicFilterInput>;
  roomId?: InputMaybe<UtilityOrderRoomIdOperatorInput>;
  totalAmount?: InputMaybe<UtilityOrderTotalAmountOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
  utilityTypeIds?: InputMaybe<UtilityOrderUtilityTypeIdsOperatorInput>;
}

export interface UtilityOrderBookingCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface UtilityOrderBookingIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityOrderCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface UtilityOrderCustomerIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityOrderFilterInput {
  and?: InputMaybe<UtilityOrderBasicFilterInput[]>;
  bookingCode?: InputMaybe<UtilityOrderBookingCodeOperatorInput>;
  bookingId?: InputMaybe<UtilityOrderBookingIdOperatorInput>;
  code?: InputMaybe<UtilityOrderCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customer?: InputMaybe<BaseCustomerFilterInput>;
  customerId?: InputMaybe<UtilityOrderCustomerIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  invoiceIds?: InputMaybe<UtilityOrderInvoiceIdsOperatorInput>;
  locationId?: InputMaybe<UtilityOrderLocationIdOperatorInput>;
  not?: InputMaybe<UtilityOrderBasicFilterInput>;
  or?: InputMaybe<UtilityOrderBasicFilterInput[]>;
  paymentStatus?: InputMaybe<UtilityOrderPaymentStatusOperatorInput>;
  room?: InputMaybe<BaseRoomFilterInput>;
  roomId?: InputMaybe<UtilityOrderRoomIdOperatorInput>;
  totalAmount?: InputMaybe<UtilityOrderTotalAmountOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
  utilityTypeIds?: InputMaybe<UtilityOrderUtilityTypeIdsOperatorInput>;
}

export interface UtilityOrderInvoiceIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityOrderInvoicePreCreate {
  applyTax: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  customerId: Scalars['ObjectID']['output'];
  id: Scalars['ObjectID']['output'];
  invoiceItems: InvoiceItemPreCreate[];
}

export interface UtilityOrderList {
  items: UtilityOrder[];
  meta: PaginationMeta;
}

export interface UtilityOrderLocationIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityOrderPaymentStatusOperatorInput {
  eq?: InputMaybe<PaymentStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<PaymentStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<PaymentStatus>;
  nin?: InputMaybe<PaymentStatus[]>;
}

export interface UtilityOrderQueryInput {
  filter?: InputMaybe<UtilityOrderFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<UtilityOrderSortInput[]>;
}

export interface UtilityOrderRoomIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityOrderSortInput {
  bookingCode?: InputMaybe<SortDirection>;
  code?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  customer?: InputMaybe<BaseCustomerSortInput>;
  id?: InputMaybe<SortDirection>;
  paymentStatus?: InputMaybe<SortDirection>;
  room?: InputMaybe<BaseRoomSortInput>;
  totalAmount?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface UtilityOrderTotalAmountOperatorInput {
  eq?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Scalars['Float']['input'][]>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Scalars['Float']['input'][]>;
}

export interface UtilityOrderUtilityTypeIdsOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityQueryInput {
  filter?: InputMaybe<UtilityFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<UtilitySortInput[]>;
}

export interface UtilityRecord {
  currentNumber: Scalars['Float']['output'];
  id: Scalars['ObjectID']['output'];
}

export interface UtilityRecordInfo {
  currentNumber: Scalars['Float']['output'];
  id: Scalars['ObjectID']['output'];
  type: Scalars['String']['output'];
  unit: Scalars['String']['output'];
}

export interface UtilityRecordInput {
  currentNumber: Scalars['Float']['input'];
  id: Scalars['ObjectID']['input'];
}

export interface UtilitySortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  invoiceCode?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface UtilityStatusOperatorInput {
  eq?: InputMaybe<PaymentStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<PaymentStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<PaymentStatus>;
  nin?: InputMaybe<PaymentStatus[]>;
}

export interface UtilityType {
  businessId: Scalars['ObjectID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectID']['output'];
  isActive: Scalars['Boolean']['output'];
  isDefaultRoomService: Scalars['Boolean']['output'];
  kind: RoomServiceType;
  locationId: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  searchText: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  unitId: Scalars['ObjectID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
}

export interface UtilityTypeBasicFilterInput {
  and?: InputMaybe<UtilityTypeBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<UtilityTypeIsActiveOperatorInput>;
  isDefaultRoomService?: InputMaybe<UtilityTypeIsDefaultRoomServiceOperatorInput>;
  kind?: InputMaybe<UtilityTypeKindOperatorInput>;
  locationId?: InputMaybe<UtilityTypeLocationIdOperatorInput>;
  name?: InputMaybe<UtilityTypeNameOperatorInput>;
  not?: InputMaybe<UtilityTypeBasicFilterInput>;
  or?: InputMaybe<UtilityTypeBasicFilterInput[]>;
  price?: InputMaybe<UtilityTypePriceOperatorInput>;
  searchText?: InputMaybe<UtilityTypeSearchTextOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface UtilityTypeFilterInput {
  and?: InputMaybe<UtilityTypeBasicFilterInput[]>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isActive?: InputMaybe<UtilityTypeIsActiveOperatorInput>;
  isDefaultRoomService?: InputMaybe<UtilityTypeIsDefaultRoomServiceOperatorInput>;
  kind?: InputMaybe<UtilityTypeKindOperatorInput>;
  locationId?: InputMaybe<UtilityTypeLocationIdOperatorInput>;
  name?: InputMaybe<UtilityTypeNameOperatorInput>;
  not?: InputMaybe<UtilityTypeBasicFilterInput>;
  or?: InputMaybe<UtilityTypeBasicFilterInput[]>;
  price?: InputMaybe<UtilityTypePriceOperatorInput>;
  searchText?: InputMaybe<UtilityTypeSearchTextOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
}

export interface UtilityTypeIsActiveOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface UtilityTypeIsDefaultRoomServiceOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface UtilityTypeKindOperatorInput {
  eq?: InputMaybe<RoomServiceType>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<RoomServiceType[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<RoomServiceType>;
  nin?: InputMaybe<RoomServiceType[]>;
}

export interface UtilityTypeList {
  items: UtilityType[];
  meta: PaginationMeta;
}

export interface UtilityTypeLocationIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface UtilityTypeNameOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface UtilityTypePriceOperatorInput {
  eq?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Scalars['Float']['input'][]>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Scalars['Float']['input'][]>;
}

export interface UtilityTypeQueryInput {
  filter?: InputMaybe<UtilityTypeFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<UtilityTypeSortInput[]>;
}

export interface UtilityTypeSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface UtilityTypeSortInput {
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  isActive?: InputMaybe<SortDirection>;
  isDefaultRoomService?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
}

export interface VisitTour {
  arrivalTime?: Maybe<Scalars['DateTime']['output']>;
  assignee?: Maybe<BaseBusinessUserEntity>;
  assigneeId?: Maybe<Scalars['ObjectID']['output']>;
  businessId?: Maybe<Scalars['ObjectID']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ObjectID']['output']>;
  customer?: Maybe<BaseCustomerEntity>;
  customerId?: Maybe<Scalars['ObjectID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectID']['output'];
  isDeposited?: Maybe<Scalars['Boolean']['output']>;
  locationId?: Maybe<Scalars['ObjectID']['output']>;
  referenceResource?: Maybe<ReferenceResource[]>;
  room?: Maybe<BaseRoomEntity>;
  roomId?: Maybe<Scalars['ObjectID']['output']>;
  service?: Maybe<BaseServiceEntity>;
  serviceId?: Maybe<Scalars['ObjectID']['output']>;
  status: VisitTourStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['ObjectID']['output']>;
  visitorEmail?: Maybe<Scalars['String']['output']>;
  visitorFullName?: Maybe<Scalars['String']['output']>;
  visitorPhoneNumber?: Maybe<Scalars['String']['output']>;
  visitorSearchText: Scalars['String']['output'];
}

export interface VisitTourArrivalTimeOperatorInput {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface VisitTourAssigneeIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface VisitTourBasicFilterInput {
  and?: InputMaybe<VisitTourBasicFilterInput[]>;
  arrivalTime?: InputMaybe<VisitTourArrivalTimeOperatorInput>;
  assignee?: InputMaybe<BaseBusinessUserBasicFilterInput>;
  assigneeId?: InputMaybe<VisitTourAssigneeIdOperatorInput>;
  businessId?: InputMaybe<VisitTourBusinessIdOperatorInput>;
  code?: InputMaybe<VisitTourCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customer?: InputMaybe<BaseCustomerBasicFilterInput>;
  customerId?: InputMaybe<VisitTourCustomerIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isDeposited?: InputMaybe<VisitTourIsDepositedOperatorInput>;
  locationId?: InputMaybe<VisitTourLocationIdOperatorInput>;
  not?: InputMaybe<VisitTourBasicFilterInput>;
  or?: InputMaybe<VisitTourBasicFilterInput[]>;
  referenceResource?: InputMaybe<VisitTourReferenceResourceOperatorInput>;
  room?: InputMaybe<BaseRoomBasicFilterInput>;
  roomId?: InputMaybe<VisitTourRoomIdOperatorInput>;
  service?: InputMaybe<BaseServiceBasicFilterInput>;
  serviceId?: InputMaybe<VisitTourServiceIdOperatorInput>;
  status?: InputMaybe<VisitTourStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
  visitorSearchText?: InputMaybe<VisitTourVisitorSearchTextOperatorInput>;
}

export interface VisitTourBusinessIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface VisitTourCodeOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export interface VisitTourCustomerIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface VisitTourFilterInput {
  and?: InputMaybe<VisitTourBasicFilterInput[]>;
  arrivalTime?: InputMaybe<VisitTourArrivalTimeOperatorInput>;
  assignee?: InputMaybe<BaseBusinessUserFilterInput>;
  assigneeId?: InputMaybe<VisitTourAssigneeIdOperatorInput>;
  businessId?: InputMaybe<VisitTourBusinessIdOperatorInput>;
  code?: InputMaybe<VisitTourCodeOperatorInput>;
  createdAt?: InputMaybe<BaseEntityCreatedAtOperatorInput>;
  createdById?: InputMaybe<BaseAuditedEntityCreatedByIdOperatorInput>;
  customer?: InputMaybe<BaseCustomerFilterInput>;
  customerId?: InputMaybe<VisitTourCustomerIdOperatorInput>;
  id?: InputMaybe<BaseEntityIdIdOperatorInput>;
  isDeposited?: InputMaybe<VisitTourIsDepositedOperatorInput>;
  locationId?: InputMaybe<VisitTourLocationIdOperatorInput>;
  not?: InputMaybe<VisitTourBasicFilterInput>;
  or?: InputMaybe<VisitTourBasicFilterInput[]>;
  referenceResource?: InputMaybe<VisitTourReferenceResourceOperatorInput>;
  room?: InputMaybe<BaseRoomFilterInput>;
  roomId?: InputMaybe<VisitTourRoomIdOperatorInput>;
  service?: InputMaybe<BaseServiceFilterInput>;
  serviceId?: InputMaybe<VisitTourServiceIdOperatorInput>;
  status?: InputMaybe<VisitTourStatusOperatorInput>;
  updatedAt?: InputMaybe<BaseEntityUpdatedAtOperatorInput>;
  updatedById?: InputMaybe<BaseAuditedEntityUpdatedByIdOperatorInput>;
  visitorSearchText?: InputMaybe<VisitTourVisitorSearchTextOperatorInput>;
}

export interface VisitTourIsDepositedOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface VisitTourList {
  items: VisitTour[];
  meta: PaginationMeta;
}

export interface VisitTourLocationIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface VisitTourQueryInput {
  filter?: InputMaybe<VisitTourFilterInput>;
  paginate?: PaginationInput;
  sort?: InputMaybe<VisitTourSortInput[]>;
}

export interface VisitTourReferenceResourceOperatorInput {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersect?: InputMaybe<ReferenceResource[][]>;
}

export interface VisitTourRoomIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface VisitTourServiceIdOperatorInput {
  eq?: InputMaybe<Scalars['ObjectID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['ObjectID']['input'][]>;
  neq?: InputMaybe<Scalars['ObjectID']['input']>;
  nin?: InputMaybe<Scalars['ObjectID']['input'][]>;
}

export interface VisitTourSortInput {
  arrivalTime?: InputMaybe<SortDirection>;
  assignee?: InputMaybe<BaseBusinessUserSortInput>;
  code?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  createdById?: InputMaybe<SortDirection>;
  customer?: InputMaybe<BaseCustomerSortInput>;
  id?: InputMaybe<SortDirection>;
  isDeposited?: InputMaybe<SortDirection>;
  room?: InputMaybe<BaseRoomSortInput>;
  service?: InputMaybe<BaseServiceSortInput>;
  status?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  updatedById?: InputMaybe<SortDirection>;
  visitorFullName?: InputMaybe<SortDirection>;
}

export enum VisitTourStatus {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Done = 'DONE',
  Waiting = 'WAITING',
}

export interface VisitTourStatusOperatorInput {
  eq?: InputMaybe<VisitTourStatus>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<VisitTourStatus[]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<VisitTourStatus>;
  nin?: InputMaybe<VisitTourStatus[]>;
}

export interface VisitTourVisitorSearchTextOperatorInput {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  like?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Scalars['String']['input'][]>;
}

export const CreateBookingDocument = gql`
  mutation CreateBooking($input: CreateBookingCommandInput!) {
    createBooking(input: $input) {
      id
    }
  }
`;

export type CreateBookingMutationFn = Apollo.MutationFunction<
  CreateBookingMutation,
  CreateBookingMutationVariables
>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookingMutation,
    CreateBookingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateBookingMutation,
    CreateBookingMutationVariables
  >(CreateBookingDocument, options);
}

export type CreateBookingMutationHookResult = ReturnType<
  typeof useCreateBookingMutation
>;

export type CreateBookingMutationResult =
  Apollo.MutationResult<CreateBookingMutation>;

export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<
  CreateBookingMutation,
  CreateBookingMutationVariables
>;

export type CreateBookingMutationVariables = Exact<{
  input: CreateBookingCommandInput;
}>;

export interface CreateBookingMutation {
  createBooking: { id: string };
}
