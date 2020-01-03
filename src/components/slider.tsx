import React, { FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { theme } from '../theme'
import { Text } from './text'
import { Box } from './box'
import { motion } from 'framer-motion'
import { TextInput } from './textInput'



export interface ISliderProps {
    value?: number
    onChange: any
}


export const Slider: FC<ISliderProps> = (props) => {
    return (
        <BaseSlider>
            <Text size={0}>0</Text>
            <input type="range" className="slider" value={props.value} onChange={props.onChange} />
            <Text size={0}>100</Text>
        </BaseSlider>

    )
}

Slider.defaultProps = {
    value: 50
}


const BaseSlider = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    .slider {
        -webkit-appearance: none; 
        appearance: none;
        width: 100%; /* Full-width */
        background: ${theme.colors.primary};
        height: 2px; 
        outline: none; 
        opacity: 0.7; 
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%; 
        border: 1.5px solid ${theme.colors.primary};
        background: white;
        cursor: pointer;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.2);
        transition: .2s;

        :active {
            transform: scale(1.4);
        }
    }
    
`











