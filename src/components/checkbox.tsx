import React, { FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'

export interface CheckboxProps {
    iconEnhancer?: object
    labelPosition?: string
    ref?: any
}

export const CheckBox: FC<CheckboxProps> = (props) => {
    return (
        <BaseCheckbox ref={props.ref} labelPosition={props.labelPosition}>
            <>
                {props.iconEnhancer && (
                    <IconEnhancerSpan>{props.iconEnhancer}</IconEnhancerSpan>
                )}
                {props.labelPosition === "left" ? <TextWrapper>{props.children}</TextWrapper> : null}
            </>
            <Input type="checkbox" />
            <FakeCheckbox>
                <CheckedIcon
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                >
                    <path d="M11.5 3.5L6.5 11.5L3.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
                </CheckedIcon>
            </FakeCheckbox>
            {props.labelPosition === "right" ? <TextWrapper>{props.children}</TextWrapper> : null}
        </BaseCheckbox>
    )
}

CheckBox.defaultProps = {
    labelPosition: "right"
}

const BaseCheckbox = styled('label')<CheckboxProps>(
    {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%'
    }

)

const Input = styled('input')({
    appearance: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    outline: 'none',
    margin: 0,
    opacity: 0,
})

const TextWrapper = styled('div')(
    css({
        fontFamily: 'normal',
        fontSize: 1,
        marginLeft: 1,
        marginRight: 3,
        verticalAlign: 'middle',
    })
);

const FakeCheckbox = styled('div')<CheckboxProps>(
    css({
        width: 8,
        height: 8,
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'Mono40',
        display: 'inline-flex',
        verticalAlign: 'middle',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'transparent',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        [`${Input}:hover + &`]: {
            borderColor: 'Mono50',
        },
        [`${Input}:focus + &`]: {
            borderColor: 'primary',
        },
        [`${Input}:checked + &`]: {
            backgroundColor: 'primary',
            borderColor: 'primary',
            color: 'white',
        },
    }),
);

const CheckedIcon = styled('svg')({ display: 'block' });


const IconEnhancerSpan = styled.span`
    display: flex;
    margin-right: 4px;
`
