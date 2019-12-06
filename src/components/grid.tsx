import React, { FC } from 'react'
import { grid, space } from 'styled-system'
import styled from 'styled-components'

export interface GridProps {
    children?: React.ReactNode
    gridTemplateColumns?: string
    gridGap?: number | string
    gridRowGap?: number | string
    gridColumnGrid?: string
    gridColumn?: number
    gridRow?: number | string
    gridArea?: number
    gridAutoFlow?: number
    gridAutoRows?: number
    gridAutoColumns?: string
    gridTemplateRows?: string
    gridTemplateAreas?: number
}


export const Grid: FC<GridProps> = (props) => {
    return (
        <GridWrapper
            {...props}

        >{props.children}</GridWrapper>
    )
}


const GridWrapper = styled('div')<GridProps>(
    grid,
    space,
    {
        display: 'grid'
    }

)

