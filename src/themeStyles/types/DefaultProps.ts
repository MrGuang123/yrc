import type { CSSProperties } from "react";
import type { CSSObject } from "./CssObject";
import type { MantineMargins } from "./MantineMargins";
import type { MantineTheme } from "./MantineTheme";

export interface DefaultProps<T extends string = never> extends MantineMargins {
    className?: string;
    classNames?: Partial<Record<T, string>>;
    style?: CSSProperties;
    styles?: Partial<Record<T, CSSObject>> | ((theme: MantineTheme) => Partial<Record<T, CSSObject>>);
    sx?: CSSObject | ((theme: MantineTheme) => CSSObject);
}