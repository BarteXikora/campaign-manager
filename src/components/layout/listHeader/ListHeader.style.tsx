import styled from 'styled-components'

const StyledListHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        padding: 0 ${({ theme }) => theme.spaces.big};
        font-size: ${({ theme }) => theme.fontSizes.title};
        font-size: bold;
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: ${({ theme }) => theme.spaces.small};

        h2 {
            padding: 0;
        }
    }
`

export default StyledListHeader