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
    <>
        <Flex flexDirection="column" alignItems="flex-start"><Box bg="Accent40" width="100%" p={14} /><Box bg="Accent50" width="100%" p={10} /></Flex>
    </>
);