import React, { FC } from 'react'
import { Icon } from './icon'
import { IconProps } from './icon'



export const ChevronRight: FC<IconProps> = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <path fillRule="nonzero" d="M9.429 17.5l5.5-5.5-5.5-5.5L11 4.93 18.071 12 11 19.071z" />
        </Icon>
    )
}