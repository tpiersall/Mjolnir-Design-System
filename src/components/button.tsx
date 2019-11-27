import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, variant, color, typography, border } from 'styled-system'



export interface ButtonProps {
    /** button size */
    size?: string
    children: any
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
            padding={3}
            whileTap={{ scale: 0.95 }}
            bg='grays.5'
            fontSize={1}
            border='1px solid'
            borderColor='grays.3'
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
        fontFamily: 'inherit',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 500,
        transition: '.1s'
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
                    bg: 'primary',
                },
            },
            secondary: {
                color: 'primary',
                bg: 'secondary',
                borderColor: 'primary',
                '&:hover': {
                    color: 'primary',
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
                fontSize: 2
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
