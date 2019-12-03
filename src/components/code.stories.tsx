import React from 'react';
import { Code } from './code';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Code',
    component: Code,
    decorators: [withInfo]
};


export const code = () => (
    <>
        <Code kind="normal">holla</Code>
    </>
);
