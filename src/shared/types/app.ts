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

export type PathProps<T> = T extends `${infer _}:${infer U}/${infer R}`
  ? PathProps<R> & Record<U, string>
  : T extends `${infer _}:${infer U}`
    ? Record<U, string>
    : Record<string, string>;
