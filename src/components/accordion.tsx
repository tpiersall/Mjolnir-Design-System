import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Box } from './box'
import { Text } from './text'
import { ChevronRight } from './icons'

export interface AccordionProps {
    open?: boolean
    title: string
    titleSize?: any
    fontWeight?: any
    children: any
    ml?: any

}
export const Accordion: FC<AccordionProps> = (props) => {

    const [open, setOpen] = useState(props.open)

    return (
        <>
            <AccordionTrigger
                {...props}
                bg="Mono10"
                display="flex"
                mb={0}
                alignItems="center"
                p={2}
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}

            >
                <Text
                    size={props.titleSize}
                    fontWeight={props.fontWeight}
                >
                    {props.title}
                </Text>
                <div style={{ marginLeft: "auto" }}>
                    <ChevronRight />
                </div>
            </AccordionTrigger>
            <AccordionPanel>
                {open ? <Box p={3}>{props.children}</Box> : null}
            </AccordionPanel>
        </>
    )
}


const AccordionTrigger = styled(Box)({

})

const AccordionPanel = styled(Box)({})


