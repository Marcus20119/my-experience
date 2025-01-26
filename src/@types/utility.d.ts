export {};

declare global {
  type OmitPartial<T, K extends keyof T> = {
    [P in keyof T as P extends K ? P : never]: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]?: T[P];
  };
}
