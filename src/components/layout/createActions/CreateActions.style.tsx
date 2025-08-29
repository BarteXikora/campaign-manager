import styled from 'styled-components'

const StyledCreateActions = styled.div`
    display: flex;
    justify-content: end;
    margin-top: ${({ theme }) => theme.spaces.medium};
    gap: ${({ theme }) => theme.spaces.medium};

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: 0 ${({ theme }) => theme.spaces.medium};
        margin: ${({ theme }) => theme.spaces.xBig} 0;
        justify-content: space-between;

        button {
            flex: auto;
        }
    }
`

export default StyledCreateActions