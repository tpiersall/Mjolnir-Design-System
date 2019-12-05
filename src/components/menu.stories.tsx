import React from 'react';
import { Menu, MenuItem } from './menu';
import { Text } from './text'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Menu',
    component: Menu,
    decorators: [withInfo]
};

export const menu = () => (
    <>
        <Menu>
            <MenuItem variant="normal" px={5} minHeight={12}><Text as="span" size={0}>Menu Item One</Text></MenuItem>
            <MenuItem variant="active" px={5} minHeight={12}><Text size={0} as="span" >Menu Item One</Text></MenuItem>
        </Menu>
    </>
);
