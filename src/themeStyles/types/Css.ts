import type { CSSInterpolation } from "./CssObject"

export interface CSS {
    (template: TemplateStringsArray, ...args: CSSInterpolation[]): string;
    (...args: CSSInterpolation[]): string;
}