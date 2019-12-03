import React from 'react';
import { Text } from './text';

//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | Text',
    component: Text,
    decorators: [withInfo]
};

export const tags = () => (
    <>
        <Text size={6}>The spectacle before us was indeed sublime.</Text>
    </>
);
