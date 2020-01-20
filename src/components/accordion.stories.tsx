import React from 'react'
import { Accordion } from './accordion'
import { CheckBox } from './checkbox'

//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Accordion',
    component: Accordion,
    decorators: [withInfo]
};


export const accordion = () => (
    <>
        <Accordion title="Accordion 1" open titleSize={1}>
            Content
        </Accordion>
        <Accordion title="Life Cycle" open titleSize={1}>
            Content
        </Accordion>
    </>
);
