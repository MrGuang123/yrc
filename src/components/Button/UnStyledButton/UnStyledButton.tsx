import React, { forwardRef } from 'react'
import { DefaultProps } from '../../../themeStyles'
import useStyles from './UnStyledButton.styles'

export interface UnStyledButtonProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> { }

export const UnstyledButton = forwardRef<HTMLButtonElement, UnStyledButtonProps>(
    ({ className, sx, ...others }: UnStyledButtonProps, ref) => {
        const { classes, cx } = useStyles(null, { sx, name: 'UnstyledButton' });
        return <button ref={ref} className={cx(classes.root, className)} type="button" {...others} />
    }
)