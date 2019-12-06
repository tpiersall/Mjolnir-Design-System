import React, { FC } from 'react'
import { variant, space, layout, color } from 'styled-system'
import styled from 'styled-components'
import { Box } from './box'

interface CardProps {
    children?: React.ReactNode
    kind?: string
    width?: string | number
    bg?: string
}

export const Card: FC<CardProps> = (props) => {
    return (
        <BaseCard {...props} kind={props.kind} width={props.width} bg={props.bg}>{props.children}</BaseCard>
    )

}

const BaseCard = styled(Box)<CardProps>(
    space,
    layout,
    color,
    variant({
        prop: 'kind',
        variants: {
            border: {
                background: 'white',
                padding: 5,
                borderColor: 'grays.3',
                borderWidth: '1px',
                borderStyle: 'solid',
                position: 'relative',
                borderRadius: '4px'
            },
            shadow: {
                background: '',
                padding: 5,
                borderColor: 'grays.3',
                borderWidth: '1px',
                borderStyle: 'solid',
                position: 'relative',
                borderRadius: '4px',
                boxShadow: '0px 6px 9px 0px #0000001f'
            }
        }
    })
)