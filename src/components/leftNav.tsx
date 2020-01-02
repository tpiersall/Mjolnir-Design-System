import React, { FC } from 'react'
import { Box } from './box'
import { ChevronLeft, ChevronRight } from '../components/icons/index'
import css from '@styled-system/css'
import styled from 'styled-components'

export interface LeftNavProps {

}


const BoxIcon = () => {
    return (
        <IconLink
            height='56px'
            width='100%'
            display="flex"
            alignItems="center"
            justifyContent="center" >
            <ChevronLeft />
        </IconLink >
    )
}

export const LeftNav: FC<LeftNavProps> = (LeftNavPanel, props) => {
    return (
        <Box
            width="56px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="Mono5"
            height="100vh"
            borderRight="1px solid"
            borderColor="Mono20"
            paddingTop="68px"
            zIndex="1"
        >
            <BoxIcon onClick={() => LeftNavPanel(true)} />
            <BoxIcon />
            <BoxIcon />
            <BoxIcon />
        </Box>
    )
}

const IconLink = styled(Box)(
    css({
        '&:hover': {
            bg: 'Mono70',
            fill: '#fff',
            cursor: 'pointer'
        },
    })
)

