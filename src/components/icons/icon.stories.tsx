import React from 'react';
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight } from './index'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


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
    </>
);