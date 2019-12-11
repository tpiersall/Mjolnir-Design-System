import React, { FC } from 'react'
import { Icon } from './icon'
import { IconProps } from './icon'



export const Trashcan: FC<IconProps> = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <path fillRule="nonzero" d="M20 6l-3 15H7L4 6h16zm-2.441 2H6.44l2.2 11h6.719l2.2-11zM16 3v2H8V3h8z" />
        </Icon>
    )
}


