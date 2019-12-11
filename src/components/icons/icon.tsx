import React, { FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { space, layout, color, flex } from 'styled-system'

export interface IconProps {
    children?: React.ReactNode
    viewBox?: string
    size?: number | string
    fill?: string
}

export const Icon: FC<IconProps> = (props) => {
    return (
        <BaseSvg
            {...props}
        >
            {props.children}
        </BaseSvg>
    )
}

Icon.defaultProps = {
    size: 9
}

const BaseSvg = styled('svg')<IconProps>(
    space, layout, color,
    {}
)


