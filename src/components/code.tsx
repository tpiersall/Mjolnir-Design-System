import React, { FC } from 'react'
import css from '@styled-system/css'
import { variant, styles } from 'styled-system'
import styled from 'styled-components'


export interface CodeProps {
    children: React.ReactNode
    kind?: "normal" | "fade"
}

export const Code: FC<CodeProps> = (props) => {
    return (
        <CodeBase {...props} kind={props.kind}>{props.children}</CodeBase>
    )
}


const CodeBase = styled('span')<CodeProps>(
    css({
        fontWeight: 500,
        fontFamily: 'mono',
        fontSize: 1,
        lineHeight: "20px",
        paddingX: 2,
        paddingY: 0,
    }),
    variant({
        prop: 'kind',
        variants: {
            normal: {
                color: 'Accent70',
                bg: 'Accent5',
            },
            fade: {
                color: 'primary',
                bg: 'Mono20',
            }
        }
    }),
)



