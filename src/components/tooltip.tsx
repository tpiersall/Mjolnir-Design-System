import React, { FC } from 'react'
import { variant, zIndex } from 'styled-system'
import { Text } from './text'
import { Box } from './box'
import styled from 'styled-components'
import css from '@styled-system/css'

export interface ToolTipProps {
    size?: any
    position: string
}
export const ToolTip: FC<ToolTipProps> = (props) => {
    const [hover, setHover] = React.useState(false)


    return (
        <BaseToolTip onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            {
                hover && (
                    <Content orientation={props.orientation}>
                        <Text size={0}>
                            {props.content}
                        </Text>
                        <Arrow position={props.position} />
                    </Content>
                )
            }
            {props.children}
        </BaseToolTip>
    )
}

ToolTip.defaultProps = {
    size: 0
}

const BaseToolTip = styled(Box)(
    css({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'Mono70',
        borderRadius: 4,
    })
)

const Arrow = styled(Box)(
    css({
        position: 'absolute',
        bg: '#fff',
        borderRadius: 2,
    }),
    variant({
        prop: 'position',
        variants: {
            bottom: {
                bottom: '-4px',
                right: '0px',
                left: '0px',
                margin: 'auto',
                width: '12px',
                height: '12px',
                transform: 'rotate(45deg)',
            },
            left: {
                left: '-4px',
                top: '12px',
                width: '12px',
                height: '12px',
                transform: 'rotate(45deg)',
            },
            right: {
                right: '-4px',
                top: '12px',
                width: '12px',
                height: '12px',
                transform: 'rotate(45deg)',
            },
            top: {
                margin: 'auto',
                right: '0px',
                left: '0px',
                top: '-4px',
                width: '12px',
                height: '12px',
                transform: 'rotate(45deg)',
            },
        },
    }),
)

const Content = styled(Box)(
    css({
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bg: '#fff',
        boxShadow: '0px 2px 15px #00000020',
        p: 2,
        zIndex: 200,
        margin: 'auto',

    }),
    variant({
        prop: 'orientation',
        variants: {
            top: {
                transform: 'translateY(-68px)'


            },
            left: {
                transform: 'translateX(-56px)',
                transformOrigin: 'center left'
            },
            right: {
                transform: 'translateY(-12px)',
            },
            bottom: {
                transform: 'translateY(-12px)',
            },
        },
    }),
)




