import React, { FC } from 'react'
import styled from 'styled-components'
import { Text } from './text'
import css from '@styled-system/css'
import { compose, variant } from 'styled-system'


export interface InputProps {
    placeholder?: string
    id?: string
    error?: boolean
    for?: any
    errorMessage?: string
    value?: number
    onChange?: any
    type?: any
}

export const TextInput: FC<InputProps> = (props) => {
    return (
        <>
            <BaseInput error={props.error} placeholder={props.placeholder} id={props.id} value={props.value} onChange={props.onChange} type={props.type} />
            {props.error && <Text size={0} fontWeight={500} color="Red40">{props.errorMessage}</Text>}
        </>
    )
}

const BaseInput = styled('input')<InputProps>(
    css({
        borderOffset: '-2px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: "Mono30",
        outline: 'none',
        padding: 4,
        fontSize: 2,
        width: '100%',
        transition: '.2s',
        ':focus': {
            borderColor: 'Mono50',
            borderWidth: '2px',
            boxShadow: `0px 4px 8px 0px #0000001a`
        },
    }),
    variant({
        prop: 'error',
        variants: {
            true: {
                borderColor: 'Red40',
                borderWidth: '2px',
                boxShadow: `0px 4px 8px 0px #0000001a`,
                ':focus': {
                    borderColor: 'Red40',
                    borderWidth: '2px',
                },
            }
        }
    }),
    {}
)


export interface LabelProps {
    for?: string
    size?: number | string
}



