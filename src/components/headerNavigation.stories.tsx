import React from 'react';
import { HeaderNavigation } from './headerNavigation';
import { LeftNav } from './leftNav';
import { SideMenu, SideMenuItem } from './sideMenu'
import { Text } from './text'
import { Box } from './box'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Header Navigation',
    component: HeaderNavigation,
    decorators: [withInfo]
};




export const Blorb = () => {
    return (
        <>
            <HeaderNavigation hasMenu><div>Logo</div></HeaderNavigation>
        </>
    )
};

