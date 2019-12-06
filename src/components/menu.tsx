import css from '@styled-system/css'
import { variant, space, layout, compose, color } from 'styled-system'
import styled from 'styled-components'

export interface MenuProps {
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

export const Menu = styled('nav')<MenuProps>(
    css({
        outline: 'none',
        margin: '0px',
        padding: '0px'
    }),
    menuStyleProps
)

export interface MenuItemProps {
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

export const MenuItem = styled('button')<MenuItemProps>(
    css({
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        border: 0,
        userSelect: 'none',
        width: '100%',
        textDecoration: 'none',
        position: 'relative',
        textAlign: 'left',
        appearance: 'none',
        listStyleType: 'none',
        paddingX: 3,
        paddingY: 1,
    }),
    variant({
        variants: {
            normal: {
                ':hover': {
                    backgroundColor: 'Mono20',
                    color: 'Primary'
                }
            },
            active: {
                ':hover': {
                    backgroundColor: 'Accent50',
                    color: '#fff'
                },
                ':active': {
                    backgroundColor: 'Accent50',
                    color: '#fff'
                }
            },
        }
    }),
    menuItemStyleProps
)

MenuItem.defaultProps = { variant: 'normal' }


