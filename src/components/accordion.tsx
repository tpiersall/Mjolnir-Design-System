import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Box } from './box'
import { Text } from './text'
import { ChevronRight } from './icons'
import css from '@styled-system/css'
import { space, variant, color, typography, border } from 'styled-system'

export interface AccordionProps {
    open?: boolean
    title: string
    titleSize?: any
    fontWeight?: any
    children: any
    size: any
    ml?: any

}
export const Accordion: FC<AccordionProps> = (props) => {

    const [open, setOpen] = useState(props.open)

    return (
        <>
            <AccordionTrigger
                {...props}
                onClick={() => setOpen(!open)}
            >
                <Text
                    size={props.titleSize}
                    fontWeight={props.fontWeight}
                >
                    {props.title}
                </Text>
                {open ? (
                    <div style={{ marginLeft: "auto", transform: 'rotate(-90deg)', transition: '.1s'  }}>
                        <ChevronRight />
                    </div>
                ) : <div style={{ marginLeft: "auto", transform: 'rotate(90deg)', transition: '.1s'  }}>
                        <ChevronRight />
                    </div>

                }
            </AccordionTrigger>
            <AccordionPanel>
                {open ? <Box p={3}>{props.children}</Box> : null}
            </AccordionPanel>
        </>
    )
}

Accordion.defaultProps = {
    fontWeight: 500,
    size: 1
}


const AccordionTrigger = styled('button')(
    css({
        bg: 'Mono10',
        outline: '2px solid transparent',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        p: 2,
        cursor: 'pointer',
        width: '100%',
        '&:focus': {
            outline: '2px solid',
            outlineOffset: '-2px',
            outlineColor: 'black',
        },
    }),

)

const AccordionPanel = styled(Box)({})


