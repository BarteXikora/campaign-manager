import styled from 'styled-components'

const StyledCreateFormHeader = styled.header`
    margin-bottom: ${({ theme }) => theme.spaces.medium};

    h2 {
        padding: 0 ${({ theme }) => theme.spaces.xBig};
        font-size: ${({ theme }) => theme.fontSizes.title};
        font-size: bold;
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: ${({ theme }) => theme.spaces.medium};

        h2 {
            padding: 0;
        }
    }
`

export default StyledCreateFormHeader