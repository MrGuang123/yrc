import type { Options as EmotionCacheOptions } from '@emotion/cache'
import React, { createContext, useContext } from 'react';
import { DEFAULT_THEME } from './default-theme';
import { CSSObject, MantineTheme, MantineThemeOverride } from './types'
import { mergeTheme } from './utils'

type ProviderStyles = Record<
    string,
    Record<string, CSSObject> | ((theme: MantineTheme) => Record<string, CSSObject>)
>;

interface MantineThemeContextType {
    theme: MantineTheme;
    styles: ProviderStyles;
    emotionOptions: EmotionCacheOptions;
}

const MantineThemeContext = createContext<MantineThemeContextType>({
    theme: DEFAULT_THEME,
    styles: {},
    emotionOptions: { key: 'mantine', prepend: true }
})

export function useMantineTheme() {
    return useContext(MantineThemeContext)?.theme || DEFAULT_THEME;
}

export function useMantineThemeStyles() {
    return useContext(MantineThemeContext)?.styles || {}
}

export function useMantineEmotionOptions(): EmotionCacheOptions {
    return useContext(MantineThemeContext)?.emotionOptions || { key: 'mantine', prepend: true }
}

interface MantineProviderProps {
    theme?: MantineThemeOverride;
    styles?: ProviderStyles;
    emotionOptions?: EmotionCacheOptions;
    children: React.ReactNode;
}

export function mantineProvider({
    theme,
    styles = {},
    emotionOptions,
    children
}: MantineProviderProps) {
    return (
        <MantineThemeContext.Provider
            value={{ theme: mergeTheme(DEFAULT_THEME, theme), styles, emotionOptions }}
        >{children}</MantineThemeContext.Provider>
    )
}