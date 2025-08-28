import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: ${({ theme }) => theme.spaces.small} 0;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderradiuses.big};

    .logo {
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSizes.title};
        padding: ${({ theme }) => theme.spaces.small + ' ' + theme.spaces.big};
    }

    .title {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    .value {
        font-size: ${({ theme }) => theme.fontSizes.default};
        font-weight: bold;
    }

    .header-data {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.medium};
    }

    .emerald-account {
        background-color: ${({ theme }) => theme.colors.gray1};
        height: 100%;
        display: flex;
        align-items: end;
        flex-direction: column;
        justify-content: center;
        padding: 0 ${({ theme }) => theme.spaces.big};
        border-radius: 0 ${({ theme }) => theme.borderradiuses.big} ${({ theme }) => theme.borderradiuses.big} 0;
    }

    @media (max-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
        margin-top: 0;
        border-radius: 0;

        .logo {
            padding: ${({ theme }) => theme.spaces.small};
        }

        .data-box {
            display: none;
        }

        .emerald-account {
            border-radius: 0;
            padding: 0 ${({ theme }) => theme.spaces.small};
        }
    }
`

export default StyledHeader