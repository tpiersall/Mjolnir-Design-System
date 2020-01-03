import React from 'react';
import { Flex } from './flex'
import { Slider } from './slider'

//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Slider',
    component: Slider,
    decorators: [withInfo]
};


export const sliderx = () => (

    <Slider />


);