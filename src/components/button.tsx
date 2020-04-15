import React, { FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
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
    fullWidth?: boolean
    startEnhancer?: any
    endEnhancer?: any
    onClick?: any
    m?: string | number
    mt?: string | number
    mb?: string | number
    ml?: string | number
    mr?: string | number
    p?: string | number
    pt?: string | number
    pb?: string | number
    pl?: string | number
    pr?: string | number
}




export const Button: FC<ButtonProps> = (props) => {
    return (

        <ButtonWrapper
            {...props}
            onClick={props.onClick}
            padding={4}
            bg='grays.5'
            kind={props.kind}
            size={props.size}
            m={props.m}
            fullWidth={props.fullWidth}
            startEnhancer={() => null}
            endEnhancer={() => null}
        >
            <>
                {props.startEnhancer && (
                    <StartEnhancerSpan>{props.startEnhancer}</StartEnhancerSpan>
                )}
                {props.children}
                {props.endEnhancer && (
                    <EndEnhancerSpan>{props.endEnhancer}</EndEnhancerSpan>
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
    css({
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: '2px solid transparent',
        cursor: 'pointer',
        borderRadius: '4px',
        fontFamily: 'normal',
        fontSize: '10px',
        letterSpacing: 1,
        fontWeight: 700,
        textTransform: 'uppercase',
        transition: '.2s',
    }),
    variant({
        prop: 'kind',
        scale: 'buttons',
        variants: {
            primary: {
                color: 'white',
                bg: 'primary',
                '&:hover': {
                    bg: 'primary10',
                    color: '#fff'
                }
            },
            secondary: {
                color: 'primary',
                bg: 'white',
                borderColor: 'Mono30',
                borderWidth: '1px',
                '&:hover': {
                    border: '1px solid',
                    color: 'primary',
                    borderColor: 'Mono40',
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
                fontSize: "10px"
            },
            large: {
                pl: 7,
                pr: 7,
                pt: 6,
                pb: 6,
                fontSize: 2
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
    }),
    variant({
        prop: 'circle',
        variants: {
            true: {
                borderRadius: '50%',
            },
        }
    }),
    variant({
        prop: 'shapeSize',
        variants: {
            small: {
                height: '24px',
                width: '24px'
            },
            medium: {
                height: '32px',
                width: '32px'
            },
            large: {
                height: '56px',
                width: '56px'
            },
        }
    })
)

Button.defaultProps = {
    kind: 'primary'
}

const StartEnhancerSpan = styled.span`
    display: flex;
    margin-right: 4px;
`

const EndEnhancerSpan = styled.span`
    display: flex;
    margin-left: 4px;
`
