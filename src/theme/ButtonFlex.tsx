import React from 'react'
import { MatchedVariants, useCustomStyles, matchToVariant } from './useCustomStyles/index'
import Button, { ButtonProps } from '@material-ui/core/Button'

export interface ButtonFlexProps extends Omit<ButtonProps, 'color'> {
    color?: MatchedVariants
    disableUppercase?: boolean
}

const ButtonFlex = ({ color, children, disableUppercase, ...buttonProps }: ButtonFlexProps) => {
    const classes = useCustomStyles()
    const className = color ? classes[color] : ""
    const variant = matchToVariant(color)
    let styles: React.CSSProperties = {

    }
    if (disableUppercase) {
        styles.textTransform = 'inherit'
    }
    return (
        <Button variant={variant} {...buttonProps} className={`${className} ${buttonProps.className || ''}`}
            style={
                {
                    ...styles,
                    ...buttonProps.style,
                }
            }
        >
            {children}
        </Button>
    )
}

export default ButtonFlex
