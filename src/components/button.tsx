import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, variant, color, typography, border } from 'styled-system'



export interface ButtonProps {
    /** button size */
    size?: string
    children?: React.ReactNode
    kind?: string
    padding?: number
    bg?: string
    fontSize?: number
    borderColor?: string
    border?: string
    m?: number | string
    fullWidth?: boolean
    startEnhancer?: any
    endEnhancer?: any
    onClick?: any
}




export const Button: FC<ButtonProps> = (props) => {
    return (

        <ButtonWrapper
            onClick={props.onClick}
            padding={4}
            bg='grays.5'
            fontSize={2}
            kind={props.kind}
            size={props.size}
            m={props.m}
            fullWidth={props.fullWidth}
            startEnhancer={() => null}
            endEnhancer={() => null}
        >
            <>
                {props.startEnhancer && (
                    <span>←</span>
                )}
                {props.children}
                {props.endEnhancer && (
                    <span>→</span>
                )}
            </>

        </ButtonWrapper>
    )
}

// styles 


const ButtonWrapper = styled(motion.button)<ButtonProps>(
    space,
    color,
    typography,
    border,
    {
        outline: 'none',
        position: 'relative',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: 500,
        transition: '.2s'
    },
    variant({
        prop: 'kind',
        scale: 'buttons',
        variants: {
            primary: {
                color: 'white',
                bg: 'primary',
                borderColor: 'primary',
                '&:hover': {
                    bg: 'primary10',
                    color: '#fff'
                },
            },
            secondary: {
                color: 'primary',
                bg: 'white',
                '&:hover': {
                    color: 'primary',
                    borderColor: 'primary10',
                },
            },
            warning: {
                color: 'reds.0',
                bg: 'grays.5',
                borderColor: 'grays.4',
                '&:hover': {
                    color: 'white',
                    bg: 'reds.0',
                    borderColor: 'reds.0'
                },
            }
        }
    }),
    variant({
        prop: 'size',
        variants: {
            small: {
                pl: 3,
                pr: 3,
                pt: 1,
                pb: 1,
                fontSize: 0
            },
            large: {
                pl: 7,
                pr: 7,
                pt: 6,
                pb: 6,
                fontSize: 4
            }
        }
    }),
    variant({
        prop: 'fullWidth',
        variants: {
            true: {
                width: '100%',
            },
        }
    })
)
