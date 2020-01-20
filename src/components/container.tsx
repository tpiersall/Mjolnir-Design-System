import React, { FC } from 'react'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import styled from 'styled-components'

interface ContainerProps {
    size?: "small" | "medium" | "large"
    children?: React.ReactNode
    as?: any;
}

export const Container: FC<ContainerProps> = (props) => {
    return (
        <BaseContainer {...props} size={props.size}>{props.children}</BaseContainer>
    )
}

const BaseContainer = styled(`section`)<ContainerProps>(
    css({
        marginLeft: 'auto',
        marginRight: 'auto',
        flex: 1,
        paddingX: 5,
    }),
    variant({
        prop: 'size',
        variants: {
            small: {
                maxWidth: '25rem'
            },
            medium: {
                maxWidth: '40rem'
            },
            large: {
                maxWidth: '65rem'
            }
        }
    })
)