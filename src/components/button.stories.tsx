import React from 'react';
import { Button } from './button';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Button',
    component: Button,
    decorators: [withInfo]
};

function sayHello() {
    alert('Hello!');
}

export const buttons = () => (
    <>
        <Button onClick={action('clicked')} kind="primary" m={2}>Positive</Button>
        <Button kind="secondary" m={2}>Secondary</Button>
        <Button kind="warning" m={2}>Warning</Button>
    </>
);


/* Button */
export const sizes = () => (
    <>
        <Button size="small" m={2}>Small</Button>
        <Button m={2}>Default</Button>
        <Button size="large" m={2}>Large</Button>
    </>
);

export const fullWidth = () => (
    <>
        <Button kind="primary" fullWidth m={2}>Button</Button>
    </>
);

export const withEnhancer = () => (
    <>
        <Button startEnhancer={() => <span>sdf</span>} m={2}>Button</Button>
    </>
);