import React from 'react'
import css from '@styled-system/css';
import { variant, color, lineHeight, space, typography } from 'styled-system'
import styled from 'styled-components'


export interface TextProps {
    size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    as?: any
    fontSize?: number
    fontWeight?: 400 | 500
    truncate?: boolean
    color?: string
}

export const Text: React.FC<TextProps> = (props) => (

    <TextWrapper
        {...props}
        size={props.size}
        as={props.as}
        fontSize={props.fontSize}
        truncate={props.truncate}
    />
)

const TextWrapper = styled('div')<TextProps>(
    space,
    typography,
    color,
    lineHeight,
    css({
        fontSize: 'inherit',
        fontFamily: 'normal',
        lineHeight: 1.4,
        opacity: 0.7
    }),
    variant({
        prop: 'size',
        variants: {
            0: {
                fontSize: 1
            },
            1: {
                fontSize: 1,
                lineHeight: 1
            },
            2: {
                fontSize: 2,
                lineHeight: 1
            },
            3: {
                fontSize: 3,
                lineHeight: 2
            }
        }
    }),
    variant({
        prop: 'truncate',
        variants: {
            true: {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            },
        }
    }),
)

Text.defaultProps = {
    as: "p"
}
