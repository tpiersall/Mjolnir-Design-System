import css from '@styled-system/css'
import styled from 'styled-components'
import { space, color, layout, border, position, compose } from 'styled-system'

interface DividerProps {
    mx?: number
    my?: number
    px?: number
    py?: number
    mt?: number | string
    ml?: number | string
    mr?: number | string
    mb?: number | string
    pt?: number | string
    pl?: number | string
    pr?: number | string
    pb?: number | string
}

const dividerStyleProps = compose(
    space,
    layout,
    color,
    position
)

export const Divider = styled('div')<DividerProps>(
    css({
        height: "1px",
        bg: 'Mono20'
    }),
    dividerStyleProps
)
