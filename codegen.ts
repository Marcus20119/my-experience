import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

enum ApolloService {
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

const endpointName = process.env.ENDPOINT_NAME;

const ENDPOINTS = [
  { link: process.env.VITE_PUBLIC_URL, name: ApolloService.Public },
  { link: process.env.VITE_PRIVATE_URL, name: ApolloService.Private },
  { link: process.env.VITE_IDENTITY_SERVICE_URL, name: ApolloService.Identity },
  { link: process.env.VITE_PROPERTY_SERVICE_URL, name: ApolloService.Property },
  { link: process.env.VITE_STORAGE_SERVICE_URL, name: ApolloService.Storage },
  { link: process.env.VITE_CUSTOMER_SERVICE_URL, name: ApolloService.Customer },
  {
    link: process.env.VITE_CUSTOMER_SERVICE_PUBLIC_URL,
    name: ApolloService.CustomerPublic,
  },
  {
    link: process.env.VITE_RESERVATION_SERVICE_URL,
    name: ApolloService.Reservation,
  },
  {
    link: process.env.VITE_PAYMENT_SERVICE_URL,
    name: ApolloService.Payment,
  },
  {
    link: process.env.VITE_NOTIFICATION_SERVICE_URL,
    name: ApolloService.Notification,
  },
  {
    link: process.env.VITE_INTEGRATION_SERVICE_URL,
    name: ApolloService.Integration,
  },
  {
    link: process.env.VITE_AUDIT_SERVICE_URL,
    name: ApolloService.Audit,
  },
  {
    link: process.env.VITE_AUDIT_MAINTENANCE_URL,
    name: ApolloService.Maintenance,
  },
  {
    link: process.env.VITE_CONTRACT_SERVICE_URL,
    name: ApolloService.Contract,
  },
];

const schema = ENDPOINTS.find(
  item => String(item.name) === String(endpointName),
);

if (!schema?.link || !endpointName) {
  console.error(
    'No schema found this. Please check your endpointName, endpointName must include enum::',
    ApolloService,
    schema?.link,
    endpointName,
  );
  process.exit(1);
}

console.log(
  `Start gen type of service ::${endpointName} \nwith endpoint ::${schema?.link}`,
);

const baseGeneratedTypes = `src/shared/api/${endpointName}/schemas.tsx`;
const documents = `src/shared/api/${endpointName}/**/**.{gql,graphql}`;

const config: CodegenConfig = {
  schema: [schema?.link],
  config: {
    namingConvention: {
      transformUnderscore: true,
    },
    scalars: {
      ['ID']: 'string',
      ['Float']: 'number',
      ['ObjectID']: 'string',
      ['DateTime']: 'string',
      ['Date']: 'string',
      ['TimeDate']: 'string',
      ['JSON']: 'Record<string, unknown>',
      ['JSONObject']: 'Record<string, unknown>',
    },
  },
  generates: {
    [baseGeneratedTypes]: {
      config: {
        skipTypename: true,
        withComponent: false,
        withHOC: false,
        withHooks: true,
        withRefetchFn: true,
      },
      documents,
      plugins: [
        'typescript',
        'typescript-react-apollo',
        'typescript-operations',
        {
          add: {
            content: `/* eslint-disable max-lines */
            /* eslint-disable @typescript-eslint/naming-convention */`,
          },
        },
      ],
    },
  },
  hooks: {
    afterAllFileWrite: [
      'npx eslint --ext .tsx src/shared/api/private/ --fix',
      'prettier --write',
    ],
  },
  overwrite: true,
};

export default config;
