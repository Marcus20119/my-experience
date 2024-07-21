import { ApolloService } from '@/shared/types';

declare module '@apollo/client' {
  interface DefaultContext extends Record<string, any> {
    service: ApolloService;
  }
}
