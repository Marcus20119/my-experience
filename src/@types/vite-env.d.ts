/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
  readonly VITE_STAGE: string;
  readonly VITE_ENV_NODE: string;
  readonly VITE_IDENTITY_SERVICE_URL: string;
  readonly VITE_PROPERTY_SERVICE_URL: string;
  readonly VITE_STORAGE_SERVICE_URL: string;
  readonly VITE_CUSTOMER_SERVICE_URL: string;
  readonly VITE_CUSTOMER_SERVICE_PUBLIC_URL: string;
  readonly VITE_RESERVATION_SERVICE_URL: string;
  readonly VITE_PAYMENT_SERVICE_URL: string;
  readonly VITE_NOTIFICATION_SERVICE_URL: string;
  readonly VITE_INTEGRATION_SERVICE_URL: string;
  readonly VITE_AUDIT_SERVICE_URL: string;
  readonly VITE_AUDIT_MAINTENANCE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
