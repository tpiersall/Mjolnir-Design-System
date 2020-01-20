import css from '@styled-system/css'
import { variant, space, layout, compose, color } from 'styled-system'
import styled from 'styled-components'
import { theme } from '../theme'

export interface SideMenuProps {
    px?: number | string
    py?: number | string
    my?: number | string
    mx?: number | string
    mt?: number | string
    ml?: number | string
    mr?: number | string
    mb?: number | string
}

const menuStyleProps = compose(
    space,
    layout,
    color
)

export const SideMenu = styled('nav')<SideMenuProps>(
    css({
        outline: 'none',
        margin: '0px',
        padding: '0px',
    }),
    menuStyleProps
)

export interface SideMenuItemProps {
    variant?: string
    px?: number | string
    py?: number | string
    my?: number | string
    mx?: number | string
    minHeight?: number | string
}

const menuItemStyleProps = compose(
    space,
    layout,
    color
)

export const SideMenuItem = styled('button')<SideMenuItemProps>(
    css({
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        border: 0,
        userSelect: 'none',
        width: '100%',
        textDecoration: 'none',
        outlineStyle: 'solid',
        outlineOffset: '-1px',
        outlineColor: 'transparent',
        position: 'relative',
        textAlign: 'left',
        appearance: 'none',
        listStyleType: 'none',
        paddingX: 3,
        paddingY: 1
    }),
    variant({
        variants: {
            normal: {
                '&:hover': {
                    backgroundColor: 'Mono20',
                    color: 'Primary'
                }
            },
            active: {
                backgroundColor: 'primary',
                color: '#fff',
                '&:active': {
                    backgroundColor: 'primary',
                    color: '#fff'
                }
            },
        }
    }),
    menuItemStyleProps
)




