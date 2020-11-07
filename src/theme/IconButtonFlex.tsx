import React from 'react'
import { MatchedVariants, useCustomStyles } from './useCustomStyles/index'
import { IconButton, IconButtonProps } from '@material-ui/core'

export interface IconButtonFlexProps extends Omit<IconButtonProps, 'color'> {
    color?: MatchedVariants
}

const IconButtonFlex = ({ color, children, ...buttonProps }: IconButtonFlexProps) => {
    const classes = useCustomStyles()
    const className = color ? classes[color] : ""
    return (
        <IconButton  {...buttonProps} className={`${className} ${buttonProps.className || ''}`}>
            {children}
        </IconButton>
    )
}

export default IconButtonFlex
