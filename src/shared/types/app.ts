import type { RouterNavigator } from '../hooks';

export enum ApolloService {
  Audit = 'audit',
  Contract = 'contract',
  Customer = 'customer',
  CustomerPublic = 'customerPublic',
  Identity = 'identity',
  Integration = 'integration',
  Maintenance = 'maintenance',
  Notification = 'notification',
  Payment = 'payment',
  Private = 'private',
  Property = 'property',
  Public = 'public',
  Reservation = 'reservation',
  Storage = 'storage',
}

export interface BreadCrumbItem {
  onClick?: () => void;
  route?: RouterNavigator;
  title: string;
}

export interface PaginationEntity {
  currentPage?: number;
  pageSize?: number;
  total?: number;
}
