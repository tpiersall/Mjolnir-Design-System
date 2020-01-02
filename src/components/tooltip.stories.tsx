import React from 'react';
import { Box } from './box'
import { Button } from './button'
import { ChevronLeft, ChevronRight, ArrowRight, Trashcan } from './icons'
//@ts-ignore
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { ToolTip } from './tooltip';


export default {
    title: 'Components | Tool Tip',
    component: ToolTip,
    decorators: [withInfo]
};

export const buttons = () => (
    <>
        <Box display="flex" height="100vh" alignItems="center" justifyContent="center" my={4} width="100%">
            <ToolTip orientation="left" position="bottom" content="Click Me asdfasdfasdf" size={0}><Button>Button</Button></ToolTip>
        </Box>
    </>
);
