import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useCombobox } from "downshift"
import { ChevronRight } from './icons'
import { Box } from './box'
import { Text } from './text'
import { typography, space, color } from 'styled-system'
import css from '@styled-system/css';
import { AnimatePresence, motion } from 'framer-motion'


export interface SelectProps {
    items: any
    inputValue?: string
}

export const Select: FC<SelectProps> = (props) => {
    const [inputItems, setInputItems] = useState(props.items)

    const handleClose = () => {
        setInputItems([])
    }

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue }) => {
            setInputItems(
                props.items.filter(item =>
                    //@ts-ignore
                    item.toLowerCase().startsWith(inputValue.toLowerCase()),
                )
            )
        }
    });
    return (
        <>
            <div {...getComboboxProps()}>
                <Box
                    {...getToggleButtonProps()}
                    position="relative"
                >
                    <BaseInput {...getInputProps()}></BaseInput>
                    <Box
                        position="absolute"
                        right='10px'
                        top='10px'
                        style={{ transform: 'rotate(90deg)' }}
                    >
                        <ChevronRight />
                    </Box>
                </Box>
            </div>
            <AnimatePresence>
                {isOpen &&
                    <BaseMenu
                        {...getMenuProps()}
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ display: 'none' }}
                        transition={{ ease: "easeOut", duration: .2 }}
                    >
                        {isOpen &&
                            inputItems.map((item, index) => (
                                <ListItemWrapper
                                    key={`${item}${index}`}
                                    {...getItemProps({ item, index })}
                                >
                                    <Text size={2} p={4}>
                                        {item}
                                    </Text >
                                </ListItemWrapper>
                            ))}
                    </BaseMenu>
                }
            </AnimatePresence>

        </>
    )
}

Select.defaultProps = {

}

const BaseInput = styled('input')<SelectProps>(
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
            borderColor: 'primary',
            borderWidth: '2px',
            boxShadow: `0px 4px 8px 0px #0000001a`
        },
    }),
)

export const BaseMenu = styled(motion.ul)(
    css({
        boxShadow: '0px 6px 9px 0px #0000001f',
        maxHeight: '200px',
        overflow: 'scroll',
        position: 'absolute',
        bg: '#fff',
        border: '1px solid',
        borderColor: 'Mono30',
        borderRadius: '4px',
        outline: 'none',
        width: '100%',
        padding: '0px',
        margin: '0px',
        zIndex: 99999
    }),
)

export const ListItemWrapper = styled('li')(
    space,
    typography,
    color,
    css({
        listStyle: 'none',
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
            bg: 'Mono20',
        },
    })
)