import styled from 'styled-components'

const StyledForm = styled.main`
    background-color: ${({ theme }) => theme.colors.gray4};
    border-radius: ${({ theme }) => theme.borderRadiuses.big};
    padding: ${({ theme }) => theme.spaces.xBig};

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${({ theme }) => theme.spaces.xBig};
    }

    label {
        display: flex;
        flex-direction: column;
    }

    .columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${({ theme }) => theme.spaces.xBig};
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.desktop}) {
        .columns {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        padding: ${({ theme }) => theme.spaces.medium};
        margin: 0 ${({ theme }) => theme.spaces.medium};
        margin-bottom: ${({ theme }) => theme.spaces.medium};

        form {
            grid-template-columns: 1fr;
        }
    }
`

export default StyledForm