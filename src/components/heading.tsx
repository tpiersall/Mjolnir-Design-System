import React from 'react'
import css from '@styled-system/css';
import { variant, fontSize, color, fontWeight, lineHeight, space, typography } from 'styled-system'
import styled from 'styled-components'


export interface HeadingProps {

    size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    as?: any
    fontSize?: number
    fontWeight?: 400 | 500 | 700
    truncate?: boolean
    mb?: number | string
    mt?: number | string
    ml?: number | string
    mr?: number | string
    m?: number | string

}

export const Heading: React.FC<HeadingProps> = (props) => (

    <HeadingWrapper
        {...props}
        size={props.size}
        as={props.as}
        fontSize={props.fontSize}
        truncate={props.truncate}
        m={props.m}
        mt={props.mt}
        mb={props.mb}
        ml={props.ml}
        mr={props.mr}
    />
)

const HeadingWrapper = styled('div')(
    space,
    fontSize,
    fontWeight,
    typography,
    color,
    lineHeight,
    css({
        color: 'black',
        fontSize: 'inherit',
        lineHeight: 1.2,
    }),
    variant({
        prop: 'size',
        variants: {
            0: {
                fontSize: 1,
            },
            1: {
                fontSize: 2,
            },
            2: {
                fontSize: 3,
            },
            3: {
                fontSize: 4,
            },
            4: {
                fontSize: 5,
            },
            5: {
                fontSize: 6,
            },
            6: {
                fontSize: 7,
            },
            7: {
                fontSize: 8,
            },
            8: {
                fontSize: 9,
            },
            9: {
                fontSize: 10,
            },
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
