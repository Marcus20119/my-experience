import { useNavigate } from 'react-router-dom';
import type { PathProps } from './useAppParams';
import { AppTool } from '../utils';

export type RouterNavigator<T extends RouterPath = RouterPath> = T extends T
  ? {
      param?: PathProps<T>;
      path: T;
    }
  : never;

export const useAppNavigate = () => {
  const navig = useNavigate();

  const getNavigatePath = ({ param, path }: RouterNavigator) => {
    let newPath = String(path);

    if (param) {
      for (const key in param) {
        newPath = newPath.replace(`:${key}`, param[key as keyof typeof param]);
      }

      newPath = `${newPath}`;
    }

    return newPath;
  };

  const navigate = (nav: RouterNavigator) => {
    const newPath = getNavigatePath(nav);

    navig(newPath);
    AppTool.scrollToTop();
  };

  return {
    navigate,
  };
};
