import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { space, color, layout, flexbox, typography, border, position, background, grid } from 'styled-system'
import { motion } from 'framer-motion'

export interface BoxProps {
    children?: ReactNode
    position?: string
    color?: string
    top?: number
    left?: number
    right?: number
    bottom?: number
    backgroundColor?: string
    bg?: string
    p?: string | number
    border?: string
    borderRight?: string
    borderColor?: string
    borderRadius?: string | number
    boxShadow?: string
    display?: string
    height?: string | number
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
    mx?: number | string
    my?: number | string
    px?: number | string
    py?: number | string

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
    border
)