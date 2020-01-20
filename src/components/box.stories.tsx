import React from 'react'
import { Box } from './box'
import { Flex } from './flex'
import { Heading } from './heading'
import { Container } from './container'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Box',
    component: Box,
    decorators: [withInfo]
};


export const box = () => (
    <Box height="100px" width="100px" overflow="hidden" backgroundColor="black" position="relative" />
);
