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
        fontWeight: 600,
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
                color: 'primary',
                bg: '#fff',
                boxShadow: '0 3px 4px 0 #EBEBEB',
                border: '1px solid',
                borderColor: 'Mono20',
                borderRadius: '2px'
            },
            fade: {
                color: 'primary',
                bg: 'Mono20',
            }
        }
    }),
)


