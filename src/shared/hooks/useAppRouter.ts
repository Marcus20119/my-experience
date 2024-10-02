import { useNavigate, useParams } from 'react-router-dom';
import type { PathProps } from '../types';
import { AppTool } from '../utils';

export type RouterNavigator<T extends RouterPath = RouterPath> = T extends T
  ? {
      param?: PathProps<T>;
      path?: T;
      hash?: string;
      search?: string;
    }
  : never;

const getNavigatePath = ({ param, path }: RouterNavigator) => {
  if (!path) {
    return undefined;
  }

  let newPath = String(path);

  if (param) {
    for (const key in param) {
      newPath = newPath.replace(`:${key}`, param[key]);
    }

    newPath = `${newPath}`;
  }

  return newPath;
};

export const useAppRouter = <P extends RouterPath>(_?: P) => {
  const navig = useNavigate();
  const param = useParams();

  const navigate = (route: RouterNavigator) => {
    const newPath = getNavigatePath(route);

    navig({
      hash: route.hash,
      pathname: newPath,
      search: route.search,
    });
    AppTool.scrollToTop();
  };

  return {
    navigate,
    param: param as PathProps<P>,
  };
};
