type AnyFunction = (...args: any[]) => any;
type AnyObject = Record<string | number | symbol, any>;
type AnyArray = any[];
type MappedById<T> = Record<number, T>;
type MappedByString<T> = Record<string, T>;
type Nullable<T> = T | null;
type NonUndefined<A> = A extends undefined ? never : A;
type UnDef = null | undefined;
type Maybe<T> = T | UnDef;
