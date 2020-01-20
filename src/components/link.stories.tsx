import React from 'react';
import { Link } from './link';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Link',
    component: Link,
    decorators: [withInfo]
};

export const link = () => (
    <>
        <Link href="https://www.buxtonco.com/" >Next</Link>
    </>
);
