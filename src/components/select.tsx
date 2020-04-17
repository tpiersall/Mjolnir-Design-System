import React, { FC, useState, useRef } from 'react'
import styled from 'styled-components'
import { useCombobox, useSelect } from "downshift"
import { ChevronRight } from './icons'
import { ChevronDown, Search } from 'react-feather'
import { Button } from '../components/button'
import { Box } from './box'
import { Text } from './text'
import { typography, space, color } from 'styled-system'
import css from '@styled-system/css';
import { AnimatePresence, motion } from 'framer-motion'




export interface SelectProps {
    items: any
    inputValue?: string
    selectedItem: string
    selectTitle?: string
}

export interface SearchSelectProps {
    items: any
    inputValue?: string
}

export const Select: FC<SelectProps> = ({ items, ...props }) => {

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useSelect({ items })
    return (
        <Box position="relative">
            <BaseContainer {...getToggleButtonProps()}>
                {selectedItem || <Text>{props.selectTitle}</Text>}
                <Box
                    position="absolute"
                    right='14px'
                    top='12px'
                >
                    <ChevronDown size="20px" />
                </Box>
            </BaseContainer>
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
                            items.map((item, index) => (
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
        </Box>
    )
}

Select.defaultProps = {
    selectTitle: "Select One",
    items: []
}

export const SearchSelect: FC<SearchSelectProps> = (props) => {
    const [inputItems, setInputItems] = useState(props.items)

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
        <Box position='relative' width="100%">
            <div {...getComboboxProps()}>
                <Box
                    {...getToggleButtonProps()}
                    position="relative"
                >
                    <BaseInput {...getInputProps()}></BaseInput>
                    <Box
                        position="absolute"
                        right='14px'
                        top='12px'
                    >
                        <Search size="20px" />
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

        </Box>
    )
}

SearchSelect.defaultProps = {
    items: []
}

const BaseContainer = styled('div')<SelectProps>(
    css({
        position: 'relative',
        borderOffset: '-2px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: "Mono30",
        outline: 'none',
        padding: 4,
        fontSize: 2,
        width: '100%',
        transition: '.2s',
    }),
)

const BaseInput = styled('input')<SearchSelectProps>(
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
            boxShadow: `0px 4px 8px 0px #0000001a`,

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
        zIndex: 9999
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