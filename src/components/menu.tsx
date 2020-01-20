import React, { FC } from 'react'
import styled from 'styled-components'
import { Text } from './text'
import { typography, space, color } from 'styled-system'
import { Box } from './box'
import css from '@styled-system/css';
import { action } from '@storybook/addon-actions'

export interface MenuProps {
    numbers?: any
    items?: any
    size?: any
    item?: any
}

export const Menu: FC<MenuProps> = (props) => {

    const listItem = (
        <>
            {props.items.map((item) =>
                <ListItemWrapper>
                    <Text size={props.size} p={4}>
                        {item.label}
                    </Text>
                </ListItemWrapper>
            )}
        </>
    )
    return (
        <BaseMenu>
            {listItem}
        </BaseMenu>
    );
}


const BaseMenu = styled(Box)<MenuProps>(
    css({
        boxShadow: '0px 6px 9px 0px #0000001f',
        maxHeight: '200px',
        overflow: 'scroll',
        position: 'relative',
        bg: '#fff',
        border: '1px solid',
        borderColor: 'Mono30',
        borderRadius: '4px'
    }),
)

const ListItemWrapper = styled.div(
    space,
    typography,
    color,
    css({
        cursor: 'pointer',
        '&:hover': {
            bg: 'Mono20',
        },
    })
)
