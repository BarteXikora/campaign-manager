import styled from 'styled-components'

const StyledListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spaces.medium};

    h2 {
        padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.xBig};
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

export default StyledListHeader