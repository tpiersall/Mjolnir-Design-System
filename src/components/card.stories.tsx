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
        <Grid gridTemplateColumns="repeat(3, 1fr)" gridAutoRows="auto" gridGap="2px">
            <Card kind="border"><Heading size={2}>123,213</Heading><Heading size={0}>Total Population</Heading><img width="24px" height="24px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkRCMzAwIiBkPSJNOC4xLDQuMUwxNiwzLjNsNy45LDAuOGw2LjEsOC4yTDE2LDI4LjdMMiwxMi40TDguMSw0LjF6Ii8+Cgk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS4wMDAwMDAsIDIxMS44ODEwODQpIj4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0VBNkMwMCIgcG9pbnRzPSItNTEuMywtMTk5LjkgLTQzLC0xODMuNiAtNTcsLTE5OS45IAkJIi8+CgkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNFQTZDMDAiIHBvaW50cz0iLTM0LjcsLTE5OS45IC00MywtMTgzLjYgLTI5LC0xOTkuOSAJCSIvPgoJCTxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkRBRDAwIiBwb2ludHM9Ii01MS4zLC0xOTkuOSAtMzQuNywtMTk5LjkgLTQzLC0xODMuNiAJCSIvPgoJPC9nPgoJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkuMDAwMDAwLCA4NS4wMDAwMDApIj4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZERDIzMSIgcG9pbnRzPSItNDMsLTgxLjcgLTUwLjksLTgwLjkgLTUxLjMsLTcyLjYgCQkiLz4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZERDIzMSIgcG9pbnRzPSItNDMsLTgxLjcgLTM1LjEsLTgwLjkgLTM0LjcsLTcyLjYgCQkiLz4KCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZEQUQwMCIgcG9pbnRzPSItMjksLTczIC0zNS4xLC04MS4yIC0zNC43LC03MyAJCSIvPgoJCTxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkRBRDAwIiBwb2ludHM9Ii01NywtNzMgLTUwLjksLTgxLjIgLTUxLjMsLTczIAkJIi8+CgkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRUVFQjciIHBvaW50cz0iLTQzLC04MiAtNTEuMywtNzMgLTM0LjcsLTczIAkJIi8+Cgk8L2c+CjwvZz4KPHJlY3QgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPgo8L3N2Zz4K" /></Card>
            <Card kind="border"><Heading size={2}>25,213</Heading><Heading size={0}>Total Households</Heading></Card>
            <Card kind="border" gridColumn="3"><Heading size={2}>25,213</Heading><Heading size={0}>Total Householasdasdds</Heading><ArrowRight /></Card>
            <Card kind="border" gridColumn="1/span 4"><Heading size={2}>25,213</Heading><Heading size={0}>Total Househpoopolds</Heading></Card>
        </Grid>
    </>
);

export const linkcard = () => (
    <>
        <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={2}>
            <Card as="a" href="https://www.w3schools.com/html/" kind="border"><Heading size={4}>123,213</Heading><Heading size={0}>Total Population</Heading></Card>
        </Grid>
    </>
);
