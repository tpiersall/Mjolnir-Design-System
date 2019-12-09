import React from 'react';
import { Text } from './text';

//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | Text',
    component: Text,
    decorators: [withInfo]
};

export const text = () => (
    <>
        <Text as="p" size={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text as="p" size={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text as="p" size={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text as="p" size={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </>
);
