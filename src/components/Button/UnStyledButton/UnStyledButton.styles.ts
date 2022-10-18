import { createStyles, getFocusStyles, getFontStyles } from "../../../themeStyles"

export default createStyles(theme => ({
    root: {
        ...getFocusStyles(theme),
        ...getFocusStyles(theme),
        cursor: 'pointer',
        border: 0,
        padding: 0,
        appearance: 'none',
        fontSize: theme.fontSizes.md,
        backgroundColor: 'transparent',
        textAlign: 'left'
    }
}))