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
            <MenuItem><Text size={0}>Menu Item One</Text></MenuItem>
            <MenuItem><Text size={0}>Menu Item Two</Text></MenuItem>
            <MenuItem><Text size={0}>Menu Item Three</Text></MenuItem>
        </Menu>
    </>
);
