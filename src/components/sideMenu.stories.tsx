import React from 'react';
import { SideMenu, SideMenuItem } from './sideMenu'
import { Divider } from './divider'
import { Text } from './text'
import { Heading } from './heading'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Side Menu Panel',
    component: SideMenu,
    decorators: [withInfo]
};

export const sideMenu = () => (
    <>
        <SideMenu>
            <Heading size={1} fontWeight={500} my={5} mx={5}>Introduction</Heading>
            <SideMenuItem variant="normal" px={10} minHeight={12}><Text as="span" size={2}>Theme</Text></SideMenuItem>
            <SideMenuItem variant="normal" px={10} minHeight={12}><Text size={2} as="span" >Icons</Text></SideMenuItem>
        </SideMenu>
        <Divider mt={4} />
        <SideMenu>
            <Heading size={1} fontWeight={500} my={5} mx={5}>Components</Heading>
            <SideMenuItem variant="normal" px={10} minHeight={12}><Text as="span" size={2}>Buttons</Text></SideMenuItem>
            <SideMenuItem variant="normal" px={10} minHeight={12}><Text size={2} as="span" >Inputs</Text></SideMenuItem>
        </SideMenu>
    </>
);
