import React from 'react';
import { TextInput } from './textInput';
import { Text } from './text'
import { Button } from './button'
import { Select } from './select'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Input',
    component: TextInput,
    decorators: [withInfo]
};


export const inputs = () => {
    return (
        <form>
            <Text size={0} mt={6}><label htmlFor="input">Label</label></Text>
            <TextInput id="input" error errorMessage="houasdfasdfasdfsdfm" placeholder="this is a placeholder..." />
            <Text size={0} mt={6}><label htmlFor="input2">Label</label></Text>
            <TextInput id="input2" placeholder="this is a placeholder..." />
            <Text size={0} mt={6}><label htmlFor="input2">Label</label></Text>
            <Select items={items} />
            <Button mt={6} kind="primary">Submit</Button>
        </form>
    )
};


const items = [
    "Neptunium",
    "Plutonium",
    "Americium",
    "Curium",
    "Berkelium",
    "Californium",
    "Einsteinium",
    "Fermium",
    "Mendelevium",
    "Nobelium",
    "Lawrencium",
    "Rutherfordium",
    "Dubnium",
    "Seaborgium",
    "Bohrium",
    "Hassium",
    "Meitnerium",
    "Darmstadtium",
    "Roentgenium",
    "Copernicium",
    "Nihonium",
    "Flerovium",
    "Moscovium",
    "Livermorium",
    "Tennessine",
    "Oganesson"
];