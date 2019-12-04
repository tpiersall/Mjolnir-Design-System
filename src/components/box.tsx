import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { space, color, layout, flexbox, typography, border } from 'styled-system'

export interface BoxProps {
    children?: ReactNode
    backgroundColor?: string
    bg?: string
    p?: string | number
    border?: string
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

}

export const Box: React.FC<BoxProps> = (props) => {
    return (
        <BoxWrapper {...props}>{props.children}</BoxWrapper>
    )
}

const BoxWrapper = styled.div(
    space,
    color,
    layout,
    flexbox,
    typography,
    border
)