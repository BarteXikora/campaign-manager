import styled from 'styled-components'

const StyledConfirmRemove = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray4};
    padding: ${({ theme }) => theme.spaces.xBig};
    border-radius: ${({ theme }) => theme.borderRadiuses.big};
    text-align: center;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.title};
        margin: ${({ theme }) => theme.spaces.medium} 0;
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.default};
        font-weight: normal;
        margin: 0;
    }

    .actions {
        display: flex;
        gap: ${({ theme }) => theme.spaces.medium};
        margin: 0;
        margin-top: ${({ theme }) => theme.spaces.xBig};
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: ${({ theme }) => theme.spaces.medium};
        margin: 0 ${({ theme }) => theme.spaces.medium};
    }
`

export default StyledConfirmRemove