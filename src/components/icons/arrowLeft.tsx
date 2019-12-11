import React, { FC } from 'react'
import { Icon } from './icon'



export const ArrowLeft: FC = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <path fillRule="nonzero" d="M9.071 4.929L2 12l7.071 7.071 1.286-1.286-4.714-4.714h16.428v-2H5.501l4.856-4.856L9.07 4.929z" />
        </Icon>
    )
}
