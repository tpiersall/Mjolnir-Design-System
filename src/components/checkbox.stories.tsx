import React from 'react';
import { CheckBox } from './checkbox';
import { ChevronLeft, ChevronRight, ArrowRight, Trashcan } from './icons'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | CheckBox',
    component: CheckBox,
    decorators: [withInfo]
};

export const checkbox = () => (
    <div>
        <CheckBox labelPosition="right">BuxtonCo</CheckBox>
    </div>
);

export const checkboxWithEnhancer = () => (
    <div>
        <CheckBox labelPosition="left" iconEnhancer={<img src="https://logo.clearbit.com/buxtonco.com" height="18px" />}>BuxtonCo</CheckBox>
    </div>
);

export const checkboxLabelPosition = () => (
    <div>
        <CheckBox>BuxtonCo</CheckBox>
        <CheckBox labelPosition="left">BuxtonCo</CheckBox>
    </div>
);