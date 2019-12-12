import React, { useState } from 'react';
import { BarChart } from './chart';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import { Button } from '../button'
import { Flex } from '../flex'
import { Card } from '../card'
import { Divider } from '../divider'



export default {
    title: 'Components | Chart',
    component: BarChart,
    decorators: [withInfo]
};


export const BarCharz = () => {
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
    return (
        <Card kind="shadow">
            <BarChart data={data}></BarChart>
            <Divider my={8} />
            <Flex>
                <Button onClick={() => setData(data.map(value => value + 5))} mr={2}>update data</Button>
                <Button onClick={() => setData([...data, Math.round(Math.random() * 100)])} mr={2}>Add data</Button>
                <Button kind="secondary" onClick={() => setData(data.filter(value => value < 65))}>filter data</Button>
            </Flex>
        </Card>
    )
};


