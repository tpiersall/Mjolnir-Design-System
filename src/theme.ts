
export const theme = {
    textStyles: {
        heading1: {
            fontSize: ['32px', '42px', '52px'],
            color: '#000',
            fontWeight: 800,
        },
        textStyle1: {
            fontSize: '16px',
            color: '#000',
            fontWeight: 400,
            lineHeight: '1.4',
        },
    },
    colors: {
        primary: '#3366FF',
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
    fontSizes: [
        '9px',
        '11px',
        '13px',
        '15px',
        '17px',
        '19px',
        '21px',
        '23px',
        '27px',
        '35px',
        '58px',
        '128px',
    ],
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
        "56px",
        "64px",
        "96px",
        "128px",
        "192px"
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

