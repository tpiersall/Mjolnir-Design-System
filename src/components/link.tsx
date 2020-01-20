import React, { FC } from 'react'
import { Text } from './text'
import css from '@styled-system/css'
import styled from 'styled-components'

export interface LinkProps {
    children?: React.ReactNode
    fontSize?: any
    textColor?: string
    href?: string
    title?: string

}



export const Link: FC<LinkProps> = (props) => {
    return (
        <Text
            {...props}
            as="a"
            size={props.fontSize}
            color={props.textColor}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
        >
            {props.children}
        </Text>

    )
}

Link.defaultProps = {
    fontSize: 3,
    textColor: 'primary'
}


