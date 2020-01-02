import React, { FC } from 'react'
import { Box } from './box'
import { Menu } from './menu'
import { Button } from './button'
import { PopOver } from './popover'
import styled from 'styled-components'
import css from '@styled-system/css'
import { BoxProps } from './box'

export interface HeaderNavigationProps {
    hasMenu: boolean
}


type SharedProps = HeaderNavigationProps & BoxProps

export const HeaderNavigation: FC<SharedProps> = (props) => {
    return (
        <BaseHeaderNavigation
            hasMenu={props.hasMenu}
            position="absolute"
            bg="#fff"
            height={['56px', '56px', '72px']}
            display="flex"
            px={8}
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            width='100%'
            borderBottom="1px solid"
            borderColor='Mono30'
            boxShadow='0px 2px 5px #00000012'
            zIndex={6000}
        >
            {props.children}
            {props.hasMenu && (
                <PopOver alignment="right" content={<Menu items={items} size={0} />}><Button>Menu</Button></PopOver>
            )}

        </BaseHeaderNavigation>
    )
}

const BaseHeaderNavigation = styled(Box)<HeaderNavigationProps>(

    {}

)


const items = [
    { label: 'Get Help' },
    { label: 'User Settings' },
    { label: 'Log Out' },
];