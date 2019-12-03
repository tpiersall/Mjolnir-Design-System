import styled from 'styled-components'
import css from '@styled-system/css'

export const Table = styled('table')({
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
});

export const Thead = styled('thead')(
    {}
);
export const Tbody = styled('tbody')({});
export const Tr = styled('tr')({});
export const Td = styled('td')(
    css({
        paddingY: 6,
        paddingX: 6,
        paddingRight: 6,
        paddingLeft: 6,
        borderBottom: '1px solid',
        borderColor: '#eeeeee',
        fontSize: 1,
    })
)

export const Th = styled(Td)(
    css({
        fontFamily: 'normal',
        fontWeight: 500,
        borderBottom: '1px solid',
        borderColor: '#eeeeee',
        borderWidth: 1,
        padding: 6,
        fontSize: 1,
    })
).withComponent('th');

export const Tfoot = styled('tfoot')({});