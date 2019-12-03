import React from 'react';
import { Table, Td, Thead, Tr, Tfoot, Tbody, Th } from './table';
import { Text } from './text'
import { Code } from './code'
import { Box } from './box'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Table',
    component: Table,
    decorators: [withInfo]
};

export const table = () => (

    <Box maxWidth="600px" backgroundColor="Mono0" border="1px solid" borderColor="Mono20" >
        <Table>
            <Thead>
                <Tr>
                    <Th>Prop</Th>
                    <Th>Type</Th>
                    <Th>Description</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td><Text color="Accent50"><Code kind="fade">children</Code></Text></Td>
                    <Td><Text color="Accent50"><Code kind="normal">string</Code></Text></Td>
                    <Td>font size</Td>
                </Tr>
                <Tr>
                    <Td><Text color="Accent50"><Code kind="fade">size</Code></Text></Td>
                    <Td><Text color="Accent50"><Code kind="normal">small | large</Code></Text></Td>
                    <Td>The size of a button</Td>
                </Tr>
            </Tbody>
        </Table>
    </Box>

);