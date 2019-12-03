import React from 'react';
import { Heading } from './heading';

//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | Heading',
    component: Heading,
    decorators: [withInfo]
};

export const tags = () => (
    <>
        <Heading size={7} fontWeight={700}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={6}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={5}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={4}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={3}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={3}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={2}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={1}>The spectacle before us was indeed sublime.</Heading>
        <Heading size={0}>The spectacle before us was indeed sublime.</Heading>
    </>
);
