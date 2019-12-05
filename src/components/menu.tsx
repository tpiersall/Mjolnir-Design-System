import React, { FC } from 'react'
import css from '@styled-system/css'
import { variant, space, layout, compose, color } from 'styled-system'
import styled from 'styled-components'

export interface MenuProps {

}

export const Menu = styled('nav')<MenuProps>(
    css({
        outline: 'none',
        margin: '0px',
        padding: '0px'
    }),
    {}
)

export interface MenuItemProps {
    variant?: string
}

const menuItemStyleProps = compose(
    space,
    layout,
    color
)

export const MenuItem = styled('a')<MenuItemProps>(
    color,
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


