import React from 'react'
import { Select, SearchSelect } from './select'
import { Box } from '../components/box'

//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Select',
    component: Select,
    decorators: [withInfo]
};


export const SelectComponent = () => {

    return (
        <Box display="flex">
            <Select mr={3} items={items} />
            <SearchSelect items={items} />
        </Box>
    )
};

// export const select = () => {

//     return (
//         <SearchSelect
//             items={items}
//         />
//     )
// };


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


