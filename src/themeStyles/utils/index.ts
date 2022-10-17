export { useSx } from './use-sx'
export { getSizeValue } from './get-size-value'
export { useGuaranteedMemo } from './use-guaranteed-memo'
export { useExtractedMargins } from './use-extracted-margis'

export type Tuple<T, N extends number, V extends unknown[] = []> = V['length'] extends N ? V : Tuple<T, N, [T, ...V]>;

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
}