export const theme = {
    fonts: {
        normal: 'Graphik, -apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
        mono: 'Inconsolata, monospace;'
    },
    fontSizes: [
        '12px',
        '14px',
        '16px',
        '20px',
        '28px',
        '32px',
        '42px',
        '54px',
        '128px',
    ],

    colors: {

        primary: '#000000',
        primary5: '#292929',
        primary10: '#525252',

        Accent0: '#E8F7EF',
        Accent5: '#BCF5D6',
        Accent10: '#90F3BD',
        Accent20: '#41EB8D',
        Accent30: '#07DD66',
        Accent40: '#00C858',
        Accent50: '#00AA49',
        Accent60: '#008338',
        Accent70: '#005925',

        Mono0: '#FFFFFF',
        Mono5: '#FCFCFC',
        Mono10: '#F8F8F8',
        Mono20: '#EBEBEB',
        Mono30: '#D4D4D4',
        Mono40: '#B2B2B2',
        Mono50: '#828282',
        Mono60: '#444444',
        Mono70: '#000000',



        secondary: '#F2F8FF',
        lightGray: '#ececec',
        purple: '#744c9d',
        black: '#000000',
        white: '#FFF',
        grays: [
            '#868E96',
            '#A8AEB3',
            '#BFC3C7',
            '#E2E3E5',
            '#EDEEEF',
            '#F5F5F6'
        ],
        reds: [
            '#EC3435'
        ]
    },
    lineHeights: ['20px', '25px', '30px', '35px', '40px', '45px', '50px', '55px', '60px'],
    space: [
        "2px",
        "4px",
        "6px",
        "8px",
        "10px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
        "22px",
        "24px",
        "32px",
        "40px",
        "48px",
        "104px"
    ],
    input: {
        color: {
            accent: '#3366FF',
            border: '#A8AEB3',
            invalid: '#dc3545',
            disabled: '#e9ecef',
            placeholder: '#6E7276',
            invalidFocus: 'rgba(220, 53, 69, 0.25)'
        },
        select: { fontFamily: 'inherit', fontSize: '12px' },
        icon: {
            color: '#cccccc',
            padding: '0.5rem 0.9375rem',
            hoverColor: '#A6A6A6',
            clear: {
                fontWeight: 900,
                fontSize: '0.65em',
                transition: 'color 0.15s ease-in -out',
                fontFamily: 'Helvetica, Arial, sans- serif'
            },
            caret: {
                size: '5px',
                transition: 'transform 0.225s ease-in-out, color 0.15s ease-in-out'
            },
        },
        loader: {
            opacity: '0.42',
            size: '0.4rem',
            color: '#007bff',
            padding: '0.375rem 0.75rem'
        },
        control: {
            borderStyle: 'solid',
            borderRadius: '0.25rem',
            boxShadow: '10 0 0.2rem',
            height: "40px",
            padding: '8px',
            boxShadowColor: 'rgba(0, 123, 255, 0.25)',
            focusedBorderColor: 'rgba(0, 123, 255, 0.75)',
            transition: 'box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out'
        },
        menu: {
            width: '100%',
            margin: '0.5rem 0',
            padding: '0.15rem 0',
            borderRadius: '0.25rem',
            backgroundColor: '#fff',
            boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1)',
            option: {
                textAlign: 'left',
                selectedColor: 'black',
                selectedBgColor: '#F5F5F6',
                padding: '0.375rem 0.75rem',
                focusedBgColor: '#F5F5F6',
            }
        },

    }
}

