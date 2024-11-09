export type MethodNames<T> = Extract<
  keyof T,
  {
    [Method in keyof T]: T[Method] extends Function ? Method : never;
  }[keyof T]
>;
