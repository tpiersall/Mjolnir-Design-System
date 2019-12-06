import React, { FC } from 'react'
import { flexbox, layout, space } from 'styled-system'
import styled from 'styled-components'

export interface FlexProps {
    children?: React.ReactNode
    alignItems?: "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "baseline" | "first baseline" | "last baseline" | "safe center" | "unsafe center" | "inherit" | "initial" | "unset"
    alignContent?: "center" | "start" | "end" | "flex-start" | "flex-end" | "normal" | "baseline" | "first baseline" | "last baseline" | "space-between" | "space-around" | "space-evenly" | "stretch" | "safe center" | "unsafe center" | "inherit" | "initial" | "unset"
    justifyItems?: "center" | "start" | "end" | "flex-start" | "flex-end" | "normal" | "baseline" | "first baseline" | "last baseline" | "inherit" | "initial" | "unset"
    justifyContent?: "center" | "start" | "end" | "flex-start" | "flex-end" | "right" | "left" | "space-between" | "space-evenly" | "stretch"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse"
    flex?: string | number
    flexGrow?: number
    flexShrink?: number
    flexbasis?: string | number
    justifySelf?: "center" | "start" | "end" | "flex-start" | "flex-end" | "right" | "left" | "space-between" | "space-evenly" | "stretch"
    alignSelf?: "center" | "start" | "end" | "flex-start" | "flex-end" | "right" | "left" | "space-between" | "space-evenly" | "stretch"
    order?: number

}

export const Flex: FC<FlexProps> = (props) => {
    return (
        <FlexWrapper {...props}>{props.children}</FlexWrapper>
    )
}


const FlexWrapper = styled('div')<FlexProps>(
    flexbox,
    layout,
    space,
    {
        display: 'flex'
    }

)

