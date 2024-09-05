import { createQueryKeys } from '@lukemorales/query-key-factory';
import { countryApi } from '../api';

export const countries = createQueryKeys('countries', {
  all: (props: Parameters<typeof countryApi.getAllCountries>[0]) => ({
    queryFn: () => countryApi.getAllCountries(props),
    queryKey: [props],
  }),
});
