import React from 'react';
import { Map } from './map'

//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Map',
    component: Map,
    decorators: [withInfo]
};


export const map = () => (
    <>
        <Map />
    </>
);
