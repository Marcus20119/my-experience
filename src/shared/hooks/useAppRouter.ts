import { useNavigate, useParams } from 'react-router-dom';
import type { PathProps } from '../types';
import { AppTool } from '../utils';

export type RouterNavigator<T extends RouterPath = RouterPath> = T extends T
  ? {
      param?: PathProps<T>;
      path: T;
    }
  : never;

const getNavigatePath = ({ param, path }: RouterNavigator) => {
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

  const navigate = (nav: RouterNavigator) => {
    const newPath = getNavigatePath(nav);

    navig(newPath);
    AppTool.scrollToTop();
  };

  return {
    navigate,
    param: param as PathProps<P>,
  };
};
