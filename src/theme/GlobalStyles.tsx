import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.default};
    }
`

export default GlobalStyles