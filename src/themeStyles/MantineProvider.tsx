import type { Options as EmotionCacheOptions } from '@emotion/cache'
import { createContext, useContext } from 'react';
import { DEFAULT_THEME } from './default-theme';
import { CSSObject, MantineTheme } from './types'

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

export function useMantineEmotionOptions(): EmotionCacheOptions {
    return useContext(MantineThemeContext)?.emotionOptions || { key: 'mantine', prepend: true }
}