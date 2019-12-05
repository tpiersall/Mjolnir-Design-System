import React, { FC } from 'react'
import css from '@styled-system/css'
import { variant } from 'styled-system'
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

export const MenuItem = styled('button')<MenuItemProps>(
    css({
        outline: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        appearance: 'none',
        listStyleType: 'none',
        paddingX: 2,
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
        }
    })

)

MenuItem.defaultProps = { variant: 'normal' }


