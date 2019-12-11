import React from 'react';
import { TextInput } from './textInput';
import { Text } from './text'
import { Button } from './button'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Input',
    component: TextInput,
    decorators: [withInfo]
};


export const buttons = () => (
    <form>
        <Text size={0} mt={6}><label for="input">Label</label></Text>
        <TextInput id="input" error errorMessage="houasdfasdfasdfsdfm" placeholder="this is a placeholder..." />
        <Text size={0} mt={6}><label for="input2">Label</label></Text>
        <TextInput id="input2" placeholder="this is a placeholder..." />
        <Button mt={6} kind="primary">Submit</Button>
    </form>
);