import React from 'react';
import { Card } from './card';
import { Grid } from './grid'
import { Button } from './button'
import { ArrowRight } from './icons'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import { Heading } from './heading'


export default {
    title: 'Components | Card',
    component: Card,
    decorators: [withInfo]
};

export const cards = () => (
    <>
        <Card kind="border" gridColumn="1/span 4"><Heading size={2}>25,213</Heading><Heading size={0}>Total Households</Heading></Card>
    </>
);

export const linkcard = () => (
    <>
        <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={2}>
            <Card as="a" href="https://www.w3schools.com/html/" kind="border"><Heading size={4}>123,213</Heading><Heading size={0}>Total Population</Heading></Card>
        </Grid>
    </>
);
