import { useParams } from 'react-router-dom';

export type PathProps<T> = T extends `${infer _}:${infer U}/${infer R}`
  ? PathProps<R> & Record<U, string>
  : T extends `${infer _}:${infer U}`
    ? Record<U, string>
    : Record<string, string>;

export const useAppParams = <P extends RouterPath>(_?: P) => {
  const params = useParams();

  return params as PathProps<P>;
};
