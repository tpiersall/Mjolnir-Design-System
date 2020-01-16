import React from 'react';
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, Favorites, ActiveItemIcon } from './index'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoresIcon } from './storesIcon'



export default {
    title: 'Components | Icons',
    component: ChevronLeft,
    decorators: [withInfo]
};


export const icons = () => (
    <>
        <ChevronLeft />
        <ChevronRight />
        <ArrowLeft />
        <ArrowRight />
        <Favorites />
        <ActiveItemIcon />
        <StoresIcon />
 
    </>
);