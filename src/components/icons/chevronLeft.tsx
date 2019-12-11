import React, { FC } from 'react'
import { Icon } from './icon'
import { IconProps } from './icon'



export const ChevronLeft:FC<IconProps> = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <path fillRule="nonzero" d="M14.571 6.5l-5.5 5.5 5.5 5.5L13 19.07 5.929 12 13 4.929z" />
        </Icon>
    )
}
