import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { space, color, layout, flexbox, typography, border, position, background, grid, boxShadow } from 'styled-system'
import { motion } from 'framer-motion'

export interface BoxProps {
    children?: ReactNode
    position?: string
    color?: string
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
    backgroundColor?: string
    bg?: string
    p?: string | number
    borderColor?: string
    border?: string
    borderRight?: string
    borderBottom?: string
    borderTop?: string
    borderLeft?: string
    borderRadius?: string | number
    boxShadow?: string
    display?: string
    height?: string | number | object
    maxHeight?: string | number
    minHeight?: string | number
    maxWidth?: string | number
    width?: string | number
    minWidth?: string | number
    margin?: string | number
    opacity?: number
    overflow?: string
    padding?: string | number
    size?: string | number
    alignItems?: string
    alignContent?: string
    justifyItems?: string
    justifyContent?: string
    flexWrap?: string
    flexDirection?: string
    flex?: string
    flexGrow?: number
    flexShrink?: number
    flexBasis?: number
    justifySelf?: string
    alignSelf?: string
    order?: string
    animate?: object
    transition?: object
    backgroundImage?: string
    backgroundSize?: string
    backgroundPosition?: string
    backgroundRepeat?: string
    gridColum?: string
    gridRow?: string
    mb?: number | string
    mt?: number | string
    ml?: number | string
    mr?: number | string
    mx?: number | string
    my?: number | string
    px?: number | string
    py?: number | string
    paddingTop?: number | string
    zIndex?: number
    css?: any
    onClick?: any
    style?: any

}

export const Box: React.FC<BoxProps> = (props) => {
    return (
        <BoxWrapper {...props}>{props.children}</BoxWrapper>
    )
}

const BoxWrapper = styled(motion.div)<BoxProps>(
    position,
    background,
    grid,
    space,
    color,
    layout,
    flexbox,
    typography,
    boxShadow,
    border
)