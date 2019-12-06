import React from 'react';
import { Box } from './box';
import { Grid } from './grid';
import { Card } from './card';
import { Text } from './text'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import { theme } from '../theme'


export default {
    title: 'Components | Colors',
    component: Box,
    decorators: [withInfo]
};



const ColorGrid = props => (
    <Grid
        gridGap={4}
        p={14}
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']}
        mt={2}
        {...props}
    />
);

const ColorSwatch = ({ color, name, props }) => (
    <Box>
        <Card kind="shadow" bg={color} height="108px" />
        <Text size={0}>{name}</Text>
    </Box>
)
export const colors = () => (
    <ColorGrid>
        {Object.entries(theme.colors).map(([key, value]) => {
            return !Array.isArray(value) && <ColorSwatch color={value} name={key} key={key} />;
        })}
    </ColorGrid>
);