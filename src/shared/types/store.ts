export type RemoveStates<T extends object> = (keys: (keyof T)[]) => void;

export type SetStates<T extends object> = (param: {
  [key in keyof T]?: T[key];
}) => void;
