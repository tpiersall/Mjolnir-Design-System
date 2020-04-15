import React, { FC } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Manager, Reference, Popper } from 'react-popper';
import { motion, AnimatePresence } from 'framer-motion'
import css from '@styled-system/css';


export interface PopoverProps {
    open?: boolean
    children?: React.ReactNode
    content?: any
    handleClickOutside?: any
    alignment?: "left" | "bottom" | "right" | "top"
}




export const PopOver: FC<PopoverProps> = (props) => {
    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen(!open)


    return (
        <Manager>
            <BasePopOver {...props} onTap={toggle}>
                <>
                    {props.children}
                    <AnimatePresence
                    >
                        {open && (
                            <div>
                                <Content
                                    initial={{ y: -10 }}
                                    animate={{ y: 0 }}
                                    exit={{ display: 'none' }}
                                    transition={{ ease: "easeOut", duration: .2 }}
                                    alignment={props.alignment}
                                >
                                    {props.content}
                                </Content>
                            </div>
                        )
                        }
                    </AnimatePresence>

                </>
            </BasePopOver >
        </Manager>
    )
}

const BasePopOver = styled(motion.div)<PopoverProps>(
    {},
    css({
        position: 'relative',
        whiteSpace: 'nowrap'
    }),
)

const Content = styled(motion.div)<PopoverProps>(
    {
        position: 'absolute',
        zIndex: 10000,
    },
    variant({
        prop: 'alignment',
        variants: {
            top: {
                top: "0px"
            },
            bottom: {
                bottom: "0px"
            },
            left: {
                left: "0px"
            },
            right: {
                right: "0px"
            }
        }
    }),

)



