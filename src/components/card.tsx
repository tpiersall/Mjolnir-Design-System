import React, { FC } from 'react'
import { variant, space, layout, color, border } from 'styled-system'
import css from '@styled-system/css'
import styled from 'styled-components'
import { Box } from './box'
import { BoxProps } from './box'

export interface CardProps {
    children?: React.ReactNode
    kind?: string
    width?: string | number
    bg?: string
    as?: any
    href?: string
    gridColumn?: string
    gridRow?: string
}

type SharedProps = CardProps & BoxProps


export const Card: FC<SharedProps> = (props) => {
    return (
        <BaseCard {...props} as={props.as} href={props.href} kind={props.kind} width={props.width} bg={props.bg}>{props.children}</BaseCard>
    )
}

const BaseCard = styled(Box)<CardProps>(
    css({
        width: '100%',
        color: 'inherit',
        textDecoration: 'none',
        position: 'relative'
    }),
    variant({
        prop: 'kind',
        variants: {
            border: {
                padding: 5,
                backgroundColor: 'Mono10',
                borderWidth: '1px',
                borderStyle: 'transparent',
                position: 'relative',
            },
            shadow: {
                background: '',
                padding: 5,
                borderColor: 'grays.3',
                borderWidth: '1px',
                borderStyle: 'solid',
                position: 'relative',
                boxShadow: '0px 6px 9px 0px #0000001f'
            }
        }
    })
)