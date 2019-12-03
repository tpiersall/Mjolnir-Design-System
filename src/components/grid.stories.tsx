import React from 'react';
import { Grid } from './grid';
import { Box } from './box'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Grid',
    component: Grid,
    decorators: [withInfo]
};

export const grid = () => (
    <>
        <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={2}><Box bg="Accent40" p={14} /><Box bg="Accent50" p={14} /></Grid>
    </>
);