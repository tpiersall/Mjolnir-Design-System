import React from 'react'
import { Box } from './box'
import { Flex } from './flex'
import { Heading } from './heading'
import { Container } from './container'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'


export default {
    title: 'Components | Box',
    component: Box,
    decorators: [withInfo]
};


export const box = () => (
    <Container size="medium">
        <Box height="400px" overflow="hidden" backgroundColor="black" position="relative">
            <Box
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 2 }}
                backgroundImage="linear-gradient(173deg, rgba(8,8,8,0.00) 9%, rgba(79,60,202,0.56) 81%), url(https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2533&q=80)"
                backgroundSize="cover"
                height="100%"
                backgroundPosition="center"
                backgroundRepeat="none">
            </Box>
            <Box position="absolute" right={0} left={0} top={0} bottom={0}>
                <Flex flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                    <Heading size={6} color="white">BiFROST</Heading>
                    <Heading size={2} color="white">Design Sytstem</Heading>
                </Flex>
            </Box>
        </Box>
    </Container>
);
