import React from 'react';
import { Menu, MenuItem } from './menu';
import { Divider } from './divider'
import { Text } from './text'
import { Heading } from './heading'
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
            <Heading size={1} fontWeight={500} my={5} mx={5}>Introduction</Heading>
            <MenuItem variant="normal" px={10} minHeight={12}><Text as="span" size={0}>Theme</Text></MenuItem>
            <MenuItem variant="normal" px={10} minHeight={12}><Text size={0} as="span" >Icons</Text></MenuItem>
        </Menu>
        <Divider mt={4} />
        <Menu>
            <Heading size={1} fontWeight={500} my={5} mx={5}>Components</Heading>
            <MenuItem variant="normal" px={10} minHeight={12}><Text as="span" size={0}>Buttons</Text></MenuItem>
            <MenuItem variant="normal" px={10} minHeight={12}><Text size={0} as="span" >Inputs</Text></MenuItem>
        </Menu>
    </>
);
