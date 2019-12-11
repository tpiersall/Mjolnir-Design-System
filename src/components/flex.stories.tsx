import React from 'react';
import { Flex } from './flex';
import { Box } from './box'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Flex',
    component: Flex,
    decorators: [withInfo]
};

export const flex = () => (
    <Flex>
        <Box flex="1" height={35} bg="primary" />
        <Box flex="1" height={35} bg="primary" mx={6} />
        <Box flex="1" height={35} bg="primary" />
    </Flex>
);