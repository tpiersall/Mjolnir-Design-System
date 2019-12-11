import React, { FC } from 'react'
import { Icon } from './icon'
import { IconProps } from './icon'



export const ArrowRight: FC<IconProps> = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <path fillRule="nonzero" d="M15 4.929L22.071 12 15 19.071l-1.286-1.286 4.714-4.714H2v-2h16.57l-4.856-4.856L15 4.929z" />
        </Icon>
    )
}
