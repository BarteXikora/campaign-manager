// Default theme for styled-components

const colors = {
    black: '#003249',
    gray1: '#10506D',
    gray2: '#7096A7',
    gray3: '#C0D2DB',
    gray4: '#DFE8EC',
    white: '#FFFFFF',

    primary: '#19C960',
    primaryLighter: '#2FED75',

    secondary: '#ABD6E9',

    wrong: '#FF213F',
    wrongLighter: '#DE939D'
}

const fontSizes = {
    title: '1.6rem',
    default: '1.2rem',
    small: '.9rem'
}

const spaces = {
    big: '30px',
    medium: '22px',
    small: '12px'
}

const borderradiuses = {
    big: '14px',
    small: '7px'
}

const screenBreakpoints = {
    desktop: '1200px',
    tablet: '800px'
}

const defaultTheme = {
    colors,
    fontSizes,
    spaces,
    borderradiuses,
    screenBreakpoints,
    transition: 'all .2s ease-in-out'
}

export default defaultTheme