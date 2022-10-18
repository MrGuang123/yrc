export { useSx } from './use-sx'
export { getSizeValue } from './get-size-value'
export { useGuaranteedMemo } from './use-guaranteed-memo'
export { useExtractedMargins } from './use-extracted-margis'
export { mergeTheme } from './merge-theme'
export { fromEntries } from './from-entries'
export { mergeClassNames } from './merge-class-names'
export { getFocusStyles } from './get-focus-styles'
export { getFontStyles } from './get-font-styles'

export type Tuple<T, N extends number, V extends unknown[] = []> = V['length'] extends N ? V : Tuple<T, N, [T, ...V]>;

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
}