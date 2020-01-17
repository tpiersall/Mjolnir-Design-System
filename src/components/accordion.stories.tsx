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
            <CheckBox labelPosition="left" iconEnhancer={<img src="https://logo.clearbit.com/buxtonco.com" height="18px" />}>BuxtonCo</CheckBox>
            <CheckBox labelPosition="left">Store One</CheckBox>
            <CheckBox labelPosition="left">Store One</CheckBox>
            <CheckBox labelPosition="left">Store One</CheckBox>
            <CheckBox labelPosition="left">Store One</CheckBox>
            <CheckBox labelPosition="left">Store One</CheckBox>
        </Accordion>
        <Accordion title="Life Cycle" open titleSize={1}>
            <CheckBox labelPosition="left">Closed</CheckBox>
            <CheckBox labelPosition="left">Construction / Build Out</CheckBox>
            <CheckBox labelPosition="left">Early Evaluation</CheckBox>
            <CheckBox labelPosition="left">Grand Opening</CheckBox>
            <CheckBox labelPosition="left">Pre-Construction</CheckBox>
            <CheckBox labelPosition="left">Search Site</CheckBox>
            <CheckBox labelPosition="left">Site Rejected</CheckBox>
        </Accordion>
    </>
);
