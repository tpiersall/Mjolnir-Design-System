import React from 'react'
import css from '@styled-system/css';
import { variant, fontSize, color, fontWeight, lineHeight, space, typography } from 'styled-system'
import styled from 'styled-components'


export interface HeadingProps {
    size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    as?: any
    fontSize?: number
    color?: string
    fontWeight?: 500 | 700
    children?: React.ReactNode;
    truncate?: boolean
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (

    <HeadingWrapper
        {...props}
        ref={ref}
        as={props.as}
    />
))

const HeadingWrapper = styled('div')<HeadingProps>(
    space,
    typography,
    color,
    lineHeight,
    css({
        fontSize: 'inherit',
        lineHeight: 1.2,
    }),
    variant({
        prop: 'size',
        variants: {
            0: {
                fontSize: 1,
                lineHeight: 2
            },
            1: {
                fontSize: 2,
                lineHeight: 2
            },
            2: {
                fontSize: 3,
                lineHeight: 2
            },
            3: {
                fontSize: 4,
                lineHeight: 3
            },
            4: {
                fontSize: 5,
                lineHeight: 4
            },
            5: {
                fontSize: 6,
                lineHeight: 5
            },
            6: {
                fontSize: 7,
                lineHeight: 6
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

Heading.defaultProps = {
    as: "h1",
    fontWeight: 500
}
