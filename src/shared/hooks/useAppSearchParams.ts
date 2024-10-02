import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const useAppSearchParams = <T>() => {
  const { search } = useLocation();

  const params = queryString.parse(search, {
    parseBooleans: true,
    parseNumbers: true,
  }) as T;

  return params;
};
