import { CanvaStrokeType } from '../model';

export const getDashValue = (strokeType?: CanvaStrokeType | null): number[] => {
  switch (strokeType) {
    case CanvaStrokeType.Dashed:
      return [8, 8];
    case CanvaStrokeType.Dotted:
      return [2, 4];
    default:
      return [];
  }
};
